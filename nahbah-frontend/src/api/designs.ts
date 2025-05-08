import API from "@/lib/axios";

export const getDesigns = async () => {
  const response = await API.get("/designs/");
  return response.data;
};
