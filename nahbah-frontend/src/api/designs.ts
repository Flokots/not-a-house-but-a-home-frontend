import API from "@/api/axios";
import axios from "axios";

export const getDesigns = async () => {
  const response = await API.get("/designs/");
  return response.data;
};

export const submitDesign = async (
  designData: {
    title: string;
    description: string;
    material: string;
    customMaterial?: string;
    contributor: { name: string; email: string };
    isAnonymous: boolean;
  },
  file: File | null
) => {
  const formData = new FormData();
  
  formData.append('title', designData.title);
  formData.append('description', designData.description);
  formData.append('material_id', designData.material);
  
  if (designData.material === "-1" && designData.customMaterial) {
    formData.append('custom_material_name', designData.customMaterial);
  }
  
  if (file) {
    formData.append('design_file', file);
  }
  
  // Always send contributor data (either real or anonymous placeholders)
  formData.append('contributor.name', designData.contributor.name);
  formData.append('contributor.email', designData.contributor.email);

  try {
    const response = await API.post("/designs/", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Backend error:', error.response?.data);
    }
    throw error;
  }
};