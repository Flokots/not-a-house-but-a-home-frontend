import API from "@/api/axios";
import axios from "axios";

export interface DesignData {
  title: string;
  description: string;
  material_id?: number; // Updated: Optional for custom materials
  custom_material_name?: string; // Updated: For "Other" materials
  contributor: { name: string; email: string };
  isAnonymous: boolean;
}

export const getDesigns = async () => {
  const response = await API.get("/designs/");
  return response.data;
};

export const submitDesign = async (
  designData: DesignData, // Updated interface
  file: File | null
) => {
  const formData = new FormData();
  
  formData.append('title', designData.title);
  formData.append('description', designData.description);
  
  // Handle material: Use material_id for standard materials, custom_material_name for "Other"
  if (designData.custom_material_name) {
    formData.append('custom_material_name', designData.custom_material_name);
  } else if (designData.material_id !== undefined) {
    formData.append('material_id', designData.material_id.toString());
  }
  
  if (file) {
    formData.append('design_file', file);
  }
  
  // Always send contributor data (either real or anonymous placeholders)
  formData.append('contributor_name', designData.contributor.name);
  formData.append('contributor_email', designData.contributor.email);
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