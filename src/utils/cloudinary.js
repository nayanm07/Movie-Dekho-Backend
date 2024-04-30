import {v2 as  cloudinary} from "cloudinary"
import { response } from "express";
import fs from "fs"

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_CLOUD_NAME,
    api_key : process.env.CLOUDINARY_CLOUD_API_KEY,
    api_secret : process.env.CLOUDINARY_CLOUD_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        
        if (!localFilePath) return null
           
        //upload the file on cloudinary
           const response = await cloudinary.uploader.upload(localFilePath, {
                resource_type : "auto"
            })
        fs.unlinkSync(localFilePath)   
        return response;
        
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null;
    }
}


const deleteFromCloudinary = async (imageUrl) => {

    const publicId = imageUrl.split('/').pop().split('.')[0];


    try {
        const result = await cloudinary.uploader.destroy(publicId);
        return result;
    } catch (error) {
        console.error(error);
        return null;
    }
}






export { uploadOnCloudinary , deleteFromCloudinary } 

 