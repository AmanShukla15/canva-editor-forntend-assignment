import { useContext, useState } from "react";
import UserForm from "../components/UserForm";
import uploadFile from "../assets/file-arrow-up-solid.svg"
import { FormState } from "../context/FormProvider";

function HeadingLayout() {
    const { selectedFile, setSelectedFile} = FormState();

    const handleButtonClick = () => {
        document.getElementById('getFile').click();
    };

    const handleFileUpload = (event) => {
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
    };
    return (
        <div className="md:w-[970px] h-[600px] flex flex-col items-center p-20  ">

            <div className="flex flex-col items-center mb-10 w-[100%] ">
                <h1 className=" font-bold text-3xl">Ad customization</h1>
                <p className=" text-gray-400 font-semibold text-[18px]">Customise your ad and get the templates accordingly.</p>
            </div>

            <div className="flex justify-left mb-10 w-[100%] border">
                <div className="w-[7%] flex justify-center items-center">
                    <img className="object-cover w-[25px] h-[25px] " src={uploadFile} alt="upload file" />
                </div>
                <h2 className=" p-4 text-gray-400 font-semibold text-[18px]">
                    Change the ad creative image.
                </h2>
                <button className=" block w-30 h-7.5 underline text-[#307FFA] font-bold" onClickCapture={handleButtonClick}>Select file</button>
                <input type='file' id="getFile" className="hidden" onChange={handleFileUpload} />
            </div>
            <UserForm />

        </div>
    )
}

export default HeadingLayout
