import axios from 'axios';

const API_KEY = "wxaf75gxd2u2zjs1m";
const BASE_URL = "https://techhk.aoscdn.com/";

export const enhancedImageAPI = async(file) => {
    try {
        const taskId = await uploadImage(file);

        const enhancedImageAPI = await fetchEnhancedImage(taskId);
    } catch (error) {
        console.log("Error enhancing image:", error.message);
        
    }
};


const uploadImage = async(file) => {
    const formData = new FormData();
    formData.append("image_file", file);

    const {data} = await axios.post(`${BASE_URL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        },
    });
    if(!data?.data?.task_id){
        throw new Error("Failed to upload new image! Task ID not found.");
    }
    return data.data.task_id;
};
const fetchEnhancedImage = async(taskId) => {
    const {data} = await axios.get(`${BASE_URL}/api/tasks/visual/scale/${task_id}`,{
        headers: {
            "X-API-KEY": API_KEY,
        },
    }); 
};