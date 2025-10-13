import React, {
  useState,
  useRef,
  useEffect,
  type ChangeEvent,
  type FormEvent,
} from "react";
import { getMaterials } from "@/api/materials";
import { submitDesign } from "@/api/designs";

const Contribute: React.FC = () => {
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
      setErrors({ ...errors, file: "Only PDF or image files are allowed" });
      setFile(null);
      e.target.value = "";
      return;
    }

    if (!isValidSize) {
      setErrors({ ...errors, file: "File size must not exceed 5MB" });
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
      if (!formData.name.trim()) newErrors.name = "Name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Valid email is required";
      }
    }

    // Keep all other existing validation the same
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.material) {
      newErrors.material = "Please select a material";
    } else if (formData.material === "-1" && !formData.customMaterial.trim()) {
      newErrors.customMaterial = "Please describe the material";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length > 1500) {
      newErrors.description = "Description must not exceed 1500 characters";
    }
    if (!file) newErrors.file = "Design file is required";
    if (!acceptGDPR) newErrors.gdpr = "You must accept GDPR guidelines";
    if (!acceptTerms) newErrors.terms = "You must accept Terms and Conditions";

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

      // Prepare data with anonymous handling
      const submitData = {
        title: formData.title,
        description: formData.description,
        material: formData.material,
        customMaterial: formData.customMaterial,
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
        ? "Anonymous design submitted successfully! It will be reviewed by our team."
        : `Thank you ${formData.name}! Your design was submitted successfully and will be reviewed by our team.`;

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
      alert("Failed to submit design. Please try again later.");
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
        <div className="absolute top-20 mb-8 text-white/14 font-semibold text-9xl">
          Upload
        </div>
        <h1 className="text-5xl mb-20 ml-26 font-semibold">Upload Design</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            {/* Title input */}
            <div>
              <label htmlFor="title" className="block text-lg mb-2">
                Design Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Give your design a title"
                className={`w-full bg-transparent border-b ${
                  errors.title ? "border-red-500" : "border-white"
                } py-2 focus:outline-none focus:border-lime-500 transition-colors`}
                disabled={loading}
              />
              {errors.title && (
                <p className="mt-1 text-red-500">{errors.title}</p>
              )}
            </div>

            {/* Anonymous Checkbox with dynamic border color */}
            <div className={`border-b pb-4 mb-6 transition-colors duration-300 ${
              isAnonymous ? 'border-lime-400' : 'border-white'
            }`}>
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="anonymous"
                  checked={isAnonymous}
                  onChange={(e) => {
                    setIsAnonymous(e.target.checked);
                    // Clear name/email when switching to anonymous
                    if (e.target.checked) {
                      setFormData(prev => ({
                        ...prev,
                        name: "",
                        email: ""
                      }));
                      // Clear any validation errors for name/email
                      setErrors(prev => {
                        const newErrors = { ...prev };
                        delete newErrors.name;
                        delete newErrors.email;
                        return newErrors;
                      });
                    }
                  }}
                  className="mt-1 mr-3 accent-lime-400"
                  disabled={loading}
                />
                <div>
                  <label htmlFor="anonymous" className="text-lg font-medium text-white">
                    Submit Anonymously
                  </label>
                  <p className="text-sm text-gray-400 mt-1">
                    {isAnonymous 
                      ? "Your submission will be credited as 'Anonymous Contributor'."
                      : "Your name will be credited with this contribution to help build our community."
                    }
                  </p>
                </div>
              </div>
            </div>

            {/* Conditional Name and Email fields - only show if not anonymous */}
            {!isAnonymous && (
              <>
                <div>
                  <label htmlFor="name" className="block text-lg mb-2">
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name for attribution"
                    className={`w-full bg-transparent border-b ${
                      errors.name ? "border-red-500" : "border-white"
                    } py-2 focus:outline-none focus:border-lime-500 transition-colors`}
                    disabled={loading}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-lg mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className={`w-full bg-transparent border-b ${
                      errors.email ? "border-red-500" : "border-white"
                    } py-2 focus:outline-none focus:border-lime-500 transition-colors`}
                    disabled={loading}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500">{errors.email}</p>
                  )}
                </div>
              </>
            )}

            {/* Material dropdown */}
            <div>
              <label htmlFor="material" className="block text-lg mb-2">
                Material
              </label>
              <select
                name="material"
                value={formData.material}
                onChange={handleInputChange}
                className={`w-full bg-transparent border-b ${
                    errors.customMaterial ? "border-red-500" : "border-white"
                  } py-2 focus:outline-none focus:border-lime-500 transition-colors`}
              >
                <option value="">Select a material</option>
                {materialOptions.map((material) => (
                  <option key={material.id} value={material.id.toString()}>
                    {material.name}
                  </option>
                ))}
              </select>
              {loading && materialOptions.length === 0 && (
                <p className="mt-1 text-gray-400">Loading materials...</p>
              )}
              {errors.material && (
                <p className="mt-1 text-red-500">{errors.material}</p>
              )}
            </div>

            {/* Custom material field - only shows when "Other" is selected */}
            {formData.material === "-1" && (
              <div className="mt-3 pl-4 border-l-2 border-lime-500">
                <label htmlFor="customMaterial" className="block text-lg mb-2">
                  Material Description
                </label>
                <input
                  type="text"
                  id="customMaterial"
                  name="customMaterial"
                  value={formData.customMaterial}
                  onChange={handleInputChange}
                  placeholder="Please describe the material"
                  className={`w-full bg-transparent border-b ${
                    errors.customMaterial ? "border-red-500" : "border-white"
                  } py-2 focus:outline-none focus:border-lime-500 transition-colors`}
                  disabled={loading}
                />
                <p className="mt-1 text-sm text-gray-400">
                  An admin will review and categorize this material during
                  approval.
                </p>
                {errors.customMaterial && (
                  <p className="mt-1 text-red-500">{errors.customMaterial}</p>
                )}
              </div>
            )}

            {/* Description textarea */}
            <div>
              <label htmlFor="description" className="block text-lg mb-2">
                Description
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
              ></textarea>
              <p className="text-sm text-gray-400">
                {formData.description.length}/1500 characters
              </p>
              {errors.description && (
                <p className="mt-1 text-red-500">{errors.description}</p>
              )}
            </div>

            {/* File upload */}
            <div className="mt-6">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.png,.jpg,.jpeg"
                className="hidden"
              />
              <button
                type="button"
                onClick={triggerFileInput}
                disabled={loading}
                className={`border px-6 py-3 ${
                  file ? "bg-lime-800 border-lime-500" : "border-lime-500"
                } hover:bg-lime-900 transition-colors ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {file ? "File Selected" : "Upload Design"}
              </button>
              <span className="ml-4 text-gray-400">
                {file ? file.name : "PDF or image file (JPG, PNG). Max 5MB."}
              </span>
              {errors.file && (
                <p className="mt-1 text-red-500">{errors.file}</p>
              )}
            </div>

            {/* Checkboxes */}
            <div className="space-y-3 mt-6">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="gdpr"
                  checked={acceptGDPR}
                  onChange={() => setAcceptGDPR(!acceptGDPR)}
                  className="mt-1"
                  disabled={loading}
                />
                <label htmlFor="gdpr" className="ml-2">
                  Accept GDPR Data Protection guidelines
                </label>
              </div>
              {errors.gdpr && <p className="text-red-500">{errors.gdpr}</p>}

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptTerms}
                  onChange={() => setAcceptTerms(!acceptTerms)}
                  className="mt-1"
                  disabled={loading}
                />
                <label htmlFor="terms" className="ml-2">
                  Accept Terms and Conditions
                </label>
              </div>
              {errors.terms && <p className="text-red-500">{errors.terms}</p>}
            </div>
          </div>

          {/* Submit button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className={`border border-lime-500 hover:bg-lime-900 px-10 py-3 text-lime-500 font-bold tracking-wider transition-colors uppercase ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>

          {/* Submission note */}
          <div className="mt-6 mb-2 text-sm text-gray-400 pb-6">
            <p>
              All submissions will be reviewed by our team before being
              published.
            </p>
            {formData.material === "-1" && (
              <p className="mt-2">
                Materials marked as "Other" will be reviewed and properly
                categorized during the approval process.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contribute;
