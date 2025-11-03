import API from "@/api/axios";
import axios from "axios";

export interface DesignData {
  title: string;
  description: string;
  material_id?: number;
  custom_material_name?: string;
  contributor: { name: string; email: string };
  isAnonymous: boolean;
}

export const getDesigns = async () => {
  const response = await API.get("/designs/");
  return response.data;
};

export const submitDesign = async (
  designData: DesignData,
  file: File | null
) => {
  const formData = new FormData();
  
  formData.append('title', designData.title);
  formData.append('description', designData.description);
  
  // Handle material
  if (designData.custom_material_name) {
    formData.append('custom_material_name', designData.custom_material_name);
  } else if (designData.material_id !== undefined) {
    formData.append('material_id', designData.material_id.toString());
  }
  
  if (file) {
    formData.append('design_file', file);
  }
  
  // Send contributor as nested JSON
  formData.append('contributor', JSON.stringify(designData.contributor));
  formData.append('is_anonymous', designData.isAnonymous.toString());

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