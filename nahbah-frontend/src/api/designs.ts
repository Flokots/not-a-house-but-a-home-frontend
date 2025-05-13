import API from "@/api/axios";

export const getDesigns = async () => {
  const response = await API.get("/designs/");
  console.log(response.data);
  return response.data;
};
