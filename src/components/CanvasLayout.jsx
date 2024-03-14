import React, { useEffect, useRef } from 'react'
import { FormState } from '../context/FormProvider';
import cakeimg from "../assets/cake image.jpg"

function CanvasLayout() {

    const canvasRef = useRef(null);
    const { selectedFile, colorsArray, text, ctaText, selected } = FormState();

    
    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 970; // Set the canvas width
        canvas.height = 600; // Set the canvas height
        const ctx = canvas.getContext('2d');

        ctx.strokeStyle = 'white'; // Set the color of the line to white

        // Calculate the diagonal distance across the canvas
        const diagonal = Math.sqrt(Math.pow(canvas.width, 2) + Math.pow(canvas.height, 2));

        const gap = 20; // Set the gap between lines
        const numberOfLines = Math.ceil(diagonal / gap); // Calculate the number of lines


        // Draw lines from the top right to the bottom left
        for (let i = 0; i < numberOfLines; i++) {
            const x = (i * gap) * (canvas.width / diagonal);

            const y = (i * gap) * (canvas.height / diagonal);


            ctx.beginPath();
            ctx.moveTo(canvas.width - x, 0);
            ctx.lineTo(0, canvas.height - y);
            ctx.stroke();
        }



        const innerCanvas = document.getElementById('innerCanvas');
        const innerCtx = innerCanvas.getContext('2d');

        // Set the properties for the line
        innerCtx.strokeStyle = colorsArray[selected]; // Stroke color
        innerCtx.lineWidth = 120; // Line width

        // Create a new path (this begins the drawing process)
        innerCtx.beginPath();

        // Move the drawing cursor to the starting point (a little bit right from the top left corner)
        innerCtx.moveTo(0, 0);

        // Draw a line to the ending point (bottom right corner)
        innerCtx.lineTo(innerCanvas.width, innerCanvas.height);

        // Apply the stroke
        innerCtx.stroke();

    }, [selected, colorsArray]); 

    

    return (
        <div className=' w-[970px] h-[600px] relative  flex justify-center items-center'>
            <canvas id='mainCanvas' ref={canvasRef} width="100%" height="100%" className={`bg-gray-200 absolute`} />
            <div className='w-[50%] h-[75%] relative'>
                <canvas id='innerCanvas' className={`w-[100%] h-[100%] bg-white absolute`} />

                <img src={`${selectedFile ? (selectedFile) : (`${cakeimg}`)}`} className={` w-[75%] h-[75%] absolute right-[15%] top-2 rounded-[13%]`} alt='img' />

                <div className='w-[70%] h-[60px] absolute bottom-[3%] left-[12%] flex justify-between items-center gap-5'>
                    <p className='w-[60%] font-bold text-[15px]'>{text ? text : ("1 & 2 BHK Luxury Apartment at just Rs.34.97 Lakhs")}</p>
                    <button className='w-[50%] h-[50%] bg-white font-bold rounded-lg '>{ctaText ? ctaText : "Contact Us"}</button>
                </div>

            </div>
        </div>
    )
}

export default CanvasLayout
