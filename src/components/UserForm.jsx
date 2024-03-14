import React, { useRef, useState } from 'react'
import { SketchPicker } from 'react-color';
import { FormState } from '../context/FormProvider';


const UserForm = () => {
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const { colorsArray, setColorsArray, setText, setCtaText, selected, setSelected } = FormState();

  

  let selectedColorFromArray = colorsArray[selected];
  let selectedColorFromPicker = colorsArray[selected];


  const handleClick = (e) => {
    setDisplayColorPicker(!displayColorPicker);
  };


  const handleChange = (newColor) => {
    // Create a new array without the last color
    const newColors = colorsArray.slice(0, -1);

    // Add the new color at the beginning
    newColors.unshift(newColor.hex);

    // Update the state
    setColorsArray(newColors);
    console.log(colorsArray)

  };



  const maxLine = 21;

  const handleInputChange1 = (event) => {
    let inputText = event.target.value;
    if (inputText.length > 31) {
      alert('word limit exceeded')
    }
    let breakIndex = inputText.lastIndexOf(' ', maxLine);
    if (breakIndex === -1) breakIndex = maxLine;
    const line1 = inputText.substring(0, breakIndex);
    const line2 = inputText.substring(breakIndex + 1);
    setText(line1 + '\n' + line2);
  };
  const handleInputChange2 = (event) => {
    let inputText = event.target.value;
    if (inputText.length > 31) {
      alert('word limit exceeded')
    }
    let breakIndex = inputText.lastIndexOf(' ', maxLine);
    if (breakIndex === -1) breakIndex = maxLine;
    const line1 = inputText.substring(0, breakIndex);
    const line2 = inputText.substring(breakIndex + 1);
    setCtaText(line1 + '\n' + line2);
  };



  return (
    <div className="w-[100%]">

      <form className="w-[100%]">
        <fieldset className="flex flex-col text-center border-t text-gray-400 font-semibold text-[18px] ">

          <legend className="mb-[25px]">Edit contents</legend>

          <input className=" border rounded-md pl-3 h-12 text-black placeholder:text-[15px] placeholder:pl-5 focus:outline-none" placeholder="Ad Content" type="text" onChange={handleInputChange1} />

          <br />

          <input className="border rounded-md pl-3 h-12 text-black placeholder:text-[15px] placeholder:pl-5 focus:outline-none" placeholder="CTA" type="text" onChange={handleInputChange2} />

          <br />

        </fieldset>
      </form>

      <div className='flex flex-row'>
        {
          colorsArray.map((color, index) => (
            <div key={index}
              className={`rounded-full hover:cursor-pointer ${index === 0 ? "ml-0" : "ml-3"} ${selected === index ? 'border-4 border-black' : ''}`}
              style={{ backgroundColor: color, width: '23px', height: '23px' }}
              onClick={() => {
                setSelected(index)
                selectedColorFromArray = colorsArray[index];
              }} ></div>
          ))
        }

        <div>
          <button className='bg-[#dbdcdd] w-[23px] h-[23px] rounded-full flex items-center justify-center font-bold ml-3' onClick={handleClick}>+</button>
          {displayColorPicker ? (
            <div >
              <SketchPicker width='50%' height="25%" color={selectedColorFromPicker} onChange={handleChange} />
            </div>
          ) : null}
        </div>
      </div>


    </div >
  )
}

export default UserForm
