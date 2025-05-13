import API from "@/api/axios";

export const downloadBooklet = async (designIds: number[]) => {
  // Convert the array of IDs to a comma-separated string
  const designIdsParam = designIds.join(',');
  
  try {
    // For file downloads, we need to handle the response differently
    const response = await API.get(`/designs/download_booklet/`, {
      params: { design_ids: designIdsParam },
      responseType: 'blob',
      withCredentials: true,
    });
    
    // Create a blob URL from the response data
    const blob = new Blob([response.data], { type: 'application/pdf' });
    const url = window.URL.createObjectURL(blob);
    
    // Create a temporary link element to trigger the download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'not_a_house_but_a_home.pdf';
    document.body.appendChild(a);
    a.click();
    
    // Clean up
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
    
    return true;
  } catch (error) {
    console.error('Error downloading booklet:', error);
    throw error;
  }
};