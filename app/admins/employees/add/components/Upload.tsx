"use client";

import { CldUploadButton } from "next-cloudinary";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { TiDelete } from "react-icons/ti";

interface UploadProps {
    value?: string;
    onChange: (value: string) => void;
}

const Upload = ({
    value,
    onChange
}: UploadProps) => {
    const handleUpload = (result: any) => {
        const imageUrl = result.info.secure_url;
        onChange(imageUrl);
    };

    const handleDelete = ()=>{
        onChange('')
    }

    if(value !== ''){
        return (
            <div className="relative">
                <img 
                    src={value} alt="image" 
                    className="w-[300px] h-[400px] ring-2 rounded-xl object-cover"
                />

                <button 
                    className="text-rose-500 rounded-full absolute right-0 top-0"
                    onClick={handleDelete}
                >
                    <TiDelete size={30} />
                </button>
            </div>
        )
    }

    return (
        <CldUploadButton
            options={{ maxFiles: 1 }}
            uploadPreset='pdycjsdn'
            onUpload={handleUpload}
        >
            <MdOutlineInsertPhoto size={30} className="" />
        </CldUploadButton>
    );
};

export default Upload;
