import API from "@/lib/axios";

export const getContributors = async () => {
  const response = await API.get("/contributors/");
  return response.data;
};
