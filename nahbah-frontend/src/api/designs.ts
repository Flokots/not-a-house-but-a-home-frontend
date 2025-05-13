import API from "@/api/axios";

export const getDesigns = async () => {
  const response = await API.get("/designs/");
  return response.data;
};

export const submitDesign = async (formData: FormData) => {
  try {
    // Extract values from FormData
    const title = formData.get('title') as string;
    const materialId = formData.get('material') as string;
    const customMaterial = formData.get('customMaterial') as string;
    const description = formData.get('description') as string;
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const file = formData.get('designFile') as File;
    
    if (!file) {
      throw new Error('Design file is required');
    }
    
    console.log('Preparing submission with data:', {
      title, materialId, customMaterial, description, name, email, 
      file: file.name
    });

    // Create FormData for multipart upload
    const apiFormData = new FormData();
    
    // Add basic fields
    apiFormData.append('title', title);
    apiFormData.append('description', description);
    apiFormData.append('design_file', file);
    
    // Handle material selection properly
    const isCustomMaterial = materialId === "-1";
    
    if (!isCustomMaterial) {
      apiFormData.append('material_id', materialId);
    } else {
      apiFormData.append('material_id', "1"); // Using first material as placeholder
      apiFormData.append('custom_material_name', customMaterial);
    }
    
    // Try different approach for contributor data - send as nested form data
    apiFormData.append('contributor.name', name);
    apiFormData.append('contributor.email', email);
    
    // Debug what we're sending
    console.log("Form data being sent:");
    for (const [key, value] of apiFormData.entries()) {
      console.log(`${key}: ${value instanceof File ? `File: ${value.name}` : value}`);
    }
    
    // Submit with appropriate headers
    const response = await API.post("/designs/", apiFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    return response.data;
  } catch (error: unknown) {
    console.error('Design submission error:', error);
    
    if (error && typeof error === 'object' && 'response' in error) {
      const errorObj = error as { response?: { data?: unknown } };
      if (errorObj.response?.data) {
        console.error('Server error response:', JSON.stringify(errorObj.response.data, null, 2));
      }
    }
    
    throw error;
  }
};