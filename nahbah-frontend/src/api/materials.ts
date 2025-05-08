import API from "@/api/axios";


export const getMaterials = async () => {
    const response = await API.get("/materials/");
    return response.data;
};
