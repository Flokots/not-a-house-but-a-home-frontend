import API from "@/api/axios";

export const getDesigns = async () => {
  const response = await API.get("/designs/");
  return response.data;
};
