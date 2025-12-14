import React, {
  useState,
  useRef,
  useEffect,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { useTranslation } from "react-i18next";
import { getMaterials } from "@/api/materials";
import { submitDesign } from "@/api/designs";
import TermsAndConditions from "@/components/TermsAndConditions";
import GDPRStatement from "@/components/GDPRStatement";

const Contribute: React.FC = () => {
  const { t } = useTranslation('contribute');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    material: "",
    customMaterial: "", // For "Other" material description
    description: "",
    title: "", // Add title field based on your API
  });
  const [file, setFile] = useState<File | null>(null);
  const [acceptGDPR, setAcceptGDPR] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [materialOptions, setMaterialOptions] = useState<
    { id: number; name: string }[]
  >([]);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [showGDPR, setShowGDPR] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fetch material options from the backend
  useEffect(() => {
    const fetchMaterials = async () => {
      setLoading(true);
      try {
        const materials = await getMaterials();

        // Ensure the materials array has the expected structure
        if (Array.isArray(materials)) {
          // Ensure "Other" option is always available
          const hasOtherOption = materials.some(
            (m) => m.name.toLowerCase() === "other" || m.name === "Other"
          );

          if (!hasOtherOption) {
            materials.push({ id: -1, name: "Other" });
          }

          setMaterialOptions(materials);
        } else {
          console.error("Received invalid material data format:", materials);
          setMaterialOptions([{ id: -1, name: "Other" }]); // Fallback
        }
      } catch (error) {
        console.error("Error fetching materials:", error);
        setMaterialOptions([{ id: -1, name: "Other" }]); // Fallback
      } finally {
        setLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  const handleInputChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    console.log(`Updating ${name} to ${value}`);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (!selectedFile) {
      setFile(null);
      return;
    }

    // Validate file type
    const fileType = selectedFile.type;
    const isValidType =
      fileType === "application/pdf" ||
      fileType === "image/png" ||
      fileType === "image/jpeg";

    // Validate file size (5MB = 5 * 1024 * 1024 bytes) - From your Django validator
    const isValidSize = selectedFile.size <= 5 * 1024 * 1024;

    if (!isValidType) {
      setErrors({ ...errors, file: t('form.file.errorType') });
      setFile(null);
      e.target.value = "";
      return;
    }

    if (!isValidSize) {
      setErrors({ ...errors, file: t('form.file.errorSize') });
      setFile(null);
      e.target.value = "";
      return;
    }

    setFile(selectedFile);
    setErrors({ ...errors, file: "" });
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    // Only validate name and email if NOT anonymous
    if (!isAnonymous) {
      if (!formData.name.trim()) newErrors.name = t('form.name.error');
      if (!formData.email.trim()) {
        newErrors.email = t('form.email.errorRequired');
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = t('form.email.errorInvalid');
      }
    }

    // Keep all other existing validation the same
    if (!formData.title.trim()) newErrors.title = t('form.designTitle.error');
    if (!formData.material) {
      newErrors.material = t('form.material.error');
    } else if (formData.material === "-1" && !formData.customMaterial.trim()) {
      newErrors.customMaterial = t('form.customMaterial.error');
    }
    if (!formData.description.trim()) {
      newErrors.description = t('form.description.errorRequired');
    } else if (formData.description.length > 1500) {
      newErrors.description = t('form.description.errorTooLong');
    }
    if (!file) newErrors.file = t('form.file.errorRequired');
    if (!acceptGDPR) newErrors.gdpr = t('form.gdpr.error');
    if (!acceptTerms) newErrors.terms = t('form.terms.error');

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      // Determine if it's a custom material
      const isCustomMaterial = formData.material === "-1";

      const submitData = {
        title: formData.title,
        description: formData.description,
        // For "Other", send custom_material_name; for standard, send material_id
        ...(isCustomMaterial
          ? { custom_material_name: formData.customMaterial }
          : { material_id: parseInt(formData.material) }
        ),
        contributor: isAnonymous
          ? {
              name: "Anonymous",
              email: "anonymous@email.com",
            }
          : {
              name: formData.name,
              email: formData.email,
            },
        isAnonymous: isAnonymous,
      };

      await submitDesign(submitData, file);

      // Success message based on submission type
      const message = isAnonymous
        ? t('messages.successAnonymous')
        : t('messages.successNamed', { name: formData.name });

      alert(message);

      // Reset form including anonymous checkbox
      setFormData({
        name: "",
        email: "",
        material: "",
        customMaterial: "",
        description: "",
        title: "",
      });
      setFile(null);
      setAcceptGDPR(false);
      setAcceptTerms(false);
      setIsAnonymous(false); // Reset anonymous checkbox
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Error submitting design:", error);
      alert(t('messages.error'));
    } finally {
      setLoading(false);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-black text-white hero-text">
      <div className="pt-32 px-4 max-w-3xl mx-auto">
        <div className="absolute top-20 mb-8 text-white/14 font-semibold text-9xl" aria-hidden="true">
          {t('hero.backgroundText')}
        </div>
        <h1 className="text-5xl mb-20 ml-26 font-semibold" id="contribute-heading">
          {t('hero.title')}
        </h1>

        <form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          aria-labelledby="contribute-heading"
          noValidate
        >
          <div className="space-y-4">
            {/* Title input - REQUIRED */}
            <div>
              <label htmlFor="title" className="block text-lg mb-2">
                {t('form.designTitle.label')} <span className="text-white-500" aria-label="required">*</span>
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder={t('form.designTitle.placeholder')}
                className={`w-full bg-transparent border-b ${
                  errors.title ? "border-red-500" : "border-white"
                } py-2 focus:outline-none focus:border-lime-500 transition-colors`}
                disabled={loading}
                aria-invalid={errors.title ? "true" : "false"}
                aria-describedby={errors.title ? "title-error" : undefined}
              />
              {errors.title && (
                <p id="title-error" className="mt-1 text-white-500" role="alert">
                  {errors.title}
                </p>
              )}
            </div>

            {/* Anonymous Checkbox */}
            <fieldset className={`border-b pb-4 mb-6 transition-colors duration-300 ${
              isAnonymous ? 'border-lime-400' : 'border-white'
            }`}>
              <legend className="sr-only">{t('form.anonymous.label')}</legend>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={isAnonymous}
                  onChange={(e) => {
                    setIsAnonymous(e.target.checked);
                    if (e.target.checked) {
                      setFormData(prev => ({
                        ...prev,
                        name: "",
                        email: ""
                      }));
                      setErrors(prev => {
                        const newErrors = { ...prev };
                        delete newErrors.name;
                        delete newErrors.email;
                        return newErrors;
                      });
                    }
                  }}
                  className="mt-1 mr-3 accent-lime-400 focus-visible:ring-2 focus-visible:ring-lime-500"
                  disabled={loading}
                  aria-describedby="anonymous-description"
                />
                <div>
                  <label htmlFor="anonymous" className="text-lg font-medium text-white">
                    {t('form.anonymous.label')}
                  </label>
                  <p id="anonymous-description" className="text-sm text-gray-400 mt-1">
                    {isAnonymous 
                      ? t('form.anonymous.descriptionAnonymous')
                      : t('form.anonymous.descriptionNamed')
                    }
                  </p>
                </div>
              </div>
            </fieldset>

            {/* Conditional Name and Email - ONLY REQUIRED IF NOT ANONYMOUS */}
            {!isAnonymous && (
              <>
                <div>
                  <label htmlFor="name" className="block text-lg mb-2">
                    {t('form.name.label')} <span className="text-white-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('form.name.placeholder')}
                    className={`w-full bg-transparent border-b ${
                      errors.name ? "border-red-500" : "border-white"
                    } py-2 focus:outline-none focus:border-lime-500 transition-colors`}
                    disabled={loading}
                    aria-invalid={errors.name ? "true" : "false"}
                    aria-describedby={errors.name ? "name-error" : undefined}
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-white-500" role="alert">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg mb-2">
                    {t('form.email.label')} <span className="text-white-500" aria-label="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder={t('form.email.placeholder')}
                    className={`w-full bg-transparent border-b ${
                      errors.email ? "border-red-500" : "border-white"
                    } py-2 focus:outline-none focus:border-lime-500 transition-colors`}
                    disabled={loading}
                    aria-invalid={errors.email ? "true" : "false"}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-white-500" role="alert">
                      {errors.email}
                    </p>
                  )}
                </div>
              </>
            )}

            {/* Material dropdown - REQUIRED */}
            <div>
              <label htmlFor="material" className="block text-lg mb-2">
                {t('form.material.label')} <span className="text-white-500" aria-label="required">*</span>
              </label>
              <select
                id="material"
                name="material"
                value={formData.material}
                onChange={handleInputChange}
                className={`w-full bg-transparent border-b ${
                  errors.material ? "border-red-500" : "border-white"
                } py-2 focus:outline-none focus:border-lime-500 transition-colors text-white`}
                disabled={loading}
                aria-invalid={errors.material ? "true" : "false"}
                aria-describedby={errors.material ? "material-error" : "material-help"}
              >
                <option value="" className="bg-black">{t('form.material.placeholder')}</option>
                {materialOptions.map((material) => (
                  <option key={material.id} value={material.id.toString()} className="bg-black">
                    {material.name}
                  </option>
                ))}
              </select>
              {loading && materialOptions.length === 0 && (
                <p id="material-help" className="mt-1 text-gray-400" aria-live="polite">
                  {t('form.material.loading')}
                </p>
              )}
              {errors.material && (
                <p id="material-error" className="mt-1 text-white-500" role="alert">
                  {errors.material}
                </p>
              )}
            </div>

            {/* Custom material - ONLY REQUIRED IF material === "-1" */}
            {formData.material === "-1" && (
              <div className="mt-3 pl-4 border-l-2 border-lime-500">
                <label htmlFor="customMaterial" className="block text-lg mb-2">
                  {t('form.customMaterial.label')} <span className="text-white-500" aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="customMaterial"
                  name="customMaterial"
                  value={formData.customMaterial}
                  onChange={handleInputChange}
                  placeholder={t('form.customMaterial.placeholder')}
                  className={`w-full bg-transparent border-b ${
                    errors.customMaterial ? "border-red-500" : "border-white"
                  } py-2 focus:outline-none focus:border-lime-500 transition-colors`}
                  disabled={loading}
                  aria-invalid={errors.customMaterial ? "true" : "false"}
                  aria-describedby="custom-material-help custom-material-error"
                />
                <p id="custom-material-help" className="mt-1 text-sm text-gray-400">
                  {t('form.customMaterial.note')}
                </p>
                {errors.customMaterial && (
                  <p id="custom-material-error" className="mt-1 text-white-500" role="alert">
                    {errors.customMaterial}
                  </p>
                )}
              </div>
            )}

            {/* Description - REQUIRED */}
            <div>
              <label htmlFor="description" className="block text-lg mb-2">
                {t('form.description.label')} <span className="text-white-500" aria-label="required">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={3}
                maxLength={1500}
                className={`w-full bg-transparent border-b ${
                  errors.description ? "border-red-500" : "border-white"
                } py-2 focus:outline-none focus:border-lime-500 transition-colors`}
                disabled={loading}
                aria-invalid={errors.description ? "true" : "false"}
                aria-describedby="description-count description-error"
              ></textarea>
              <p id="description-count" className="text-sm text-gray-400">
                {t('form.description.characterCount', { count: formData.description.length })}
              </p>
              {errors.description && (
                <p id="description-error" className="mt-1 text-white-500" role="alert">
                  {errors.description}
                </p>
              )}
            </div>

            {/* File upload - REQUIRED */}
            <div className="mt-6">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.png,.jpg,.jpeg"
                className="sr-only"
                id="file-upload"
                aria-invalid={errors.file ? "true" : "false"}
                aria-describedby="file-name file-help file-error"
              />
              <label htmlFor="file-upload" className="sr-only">
                {t('form.file.uploadButton')} <span className="text-white-500" aria-label="required">*</span>
              </label>
              <button
                type="button"
                onClick={triggerFileInput}
                disabled={loading}
                className={`border px-6 py-3 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none ${
                  file ? "bg-lime-800 border-lime-500" : "border-lime-500"
                } hover:bg-lime-900 transition-colors ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                aria-label={file ? t('form.file.selectedButton') : t('form.file.uploadButton')}
              >
                {file ? t('form.file.selectedButton') : t('form.file.uploadButton')}
              </button>
              <span id="file-name" className="ml-4 text-gray-400" aria-live="polite">
                {file ? file.name : t('form.file.description')}
              </span>
              <p id="file-help" className="text-sm text-gray-400 mt-2">
                {t('form.file.description')}
              </p>
              {errors.file && (
                <p id="file-error" className="mt-1 text-white-500" role="alert">
                  {errors.file}
                </p>
              )}
            </div>

            {/* Checkboxes - BOTH REQUIRED */}
            <fieldset className="space-y-3 mt-6">
              <legend className="sr-only">Consent and Terms</legend>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="gdpr"
                  checked={acceptGDPR}
                  onChange={() => setAcceptGDPR(!acceptGDPR)}
                  className="mt-1 accent-lime-400 focus-visible:ring-2 focus-visible:ring-lime-500"
                  disabled={loading}
                  aria-invalid={errors.gdpr ? "true" : "false"}
                  aria-describedby={errors.gdpr ? "gdpr-error" : undefined}
                />
                <label htmlFor="gdpr" className="ml-2">
                  {t('form.gdpr.label')}{" "}
                  <button
                    type="button"
                    onClick={() => setShowGDPR(true)}
                    className="text-lime-400 hover:text-lime-300 underline transition-colors focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none rounded"
                    disabled={loading}
                  >
                    {t('form.gdpr.linkText')}
                  </button>
                  <span className="text-white-500 ml-1" aria-label="required">*</span>
                </label>
              </div>
              {errors.gdpr && <p id="gdpr-error" className="text-white-500 text-sm mt-1" role="alert">{errors.gdpr}</p>}

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={() => setAcceptTerms(!acceptTerms)}
                  className="mt-1 accent-lime-400 focus-visible:ring-2 focus-visible:ring-lime-500"
                  disabled={loading}
                  aria-invalid={errors.terms ? "true" : "false"}
                  aria-describedby={errors.terms ? "terms-error" : undefined}
                />
                <label htmlFor="terms" className="ml-2">
                  {t('form.terms.label')}{" "}
                  <button
                    type="button"
                    onClick={() => setShowTerms(true)}
                    className="text-lime-400 hover:text-lime-300 underline transition-colors focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none rounded"
                    disabled={loading}
                  >
                    {t('form.terms.linkText')}
                  </button>
                  <span className="text-white-500 ml-1" aria-label="required">*</span>
                </label>
              </div>
              {errors.terms && <p id="terms-error" className="text-white-500 text-sm mt-1" role="alert">{errors.terms}</p>}
            </fieldset>
          </div>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`border border-lime-500 hover:bg-lime-900 px-10 py-3 text-lime-500 font-bold tracking-wider transition-colors uppercase focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:outline-none ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-busy={loading}
            >
              {loading ? t('form.submit.submitting') : t('form.submit.button')}
            </button>
          </div>

          {/* Submission note */}
          <div className="mt-6 mb-2 text-sm text-gray-400 pb-6" role="status" aria-live="polite">
            <p>{t('messages.reviewNote')}</p>
            {formData.material === "-1" && (
              <p className="mt-2">{t('messages.customMaterialNote')}</p>
            )}
          </div>
        </form>

        <TermsAndConditions 
          isOpen={showTerms} 
          onClose={() => setShowTerms(false)} 
        />
        <GDPRStatement 
          isOpen={showGDPR} 
          onClose={() => setShowGDPR(false)} 
        />
      </div>
    </div>
  );
};

export default Contribute;
