"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Usethecomponents() {
  // State for checkboxes
  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: true,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
  });

  // Handle change in checkbox state
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckboxes({
      ...checkboxes,
      [id]: checked,
    });
  };

  return (
    <div className="bg-[#4E4D93] min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Top Famous Section */}
      <div className="flex flex-col items-start justify-center py-12 px-4 sm:px-5">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Use the components
        </h1>
        <p className="text-lg text-white text-justify max-w-5xl leading-relaxed">
          There’s a bunch of pre-configured components for you to use in this free template. Simply go to
          the Style Guide page and under the components header you can see everything included. <br />
          Buttons, steppers, filter options, and more for you to integrate into your screens and modify to
          your tastes and requirements.
        </p>
      </div>

      {/* Content Section (Images Section) */}
      <div className="flex flex-col items-center justify-center py-10 flex-grow">
        {/* Images, Buttons, and Checkboxes in the Same Row */}
        <div className="flex flex-wrap justify-center gap-10">
          {/* First Image */}
          <div className="flex justify-center">
            <Image
              src={require('/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Usethecomponents/Parent.png')}
              alt="Tikka"
              className="rounded-lg shadow-lg mb-6 animate-pulse"
            />
          </div>
          {/* Second Image */}
          <div className="flex justify-center">
            <Image
              src={require('/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Usethecomponents/Photo.png')}
              alt="Chicken Boti"
              className="rounded-lg shadow-lg mb-6 animate-pulse"
            />
          </div>

          {/* Buttons Section (Vertically Stacked Buttons in Same Row) */}
          <div className="flex flex-col justify-center items-center gap-4">
            {/* Button 1 */}
            <div className="flex justify-center">
              <Image
                src={require('/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Usethecomponents/Button Small.png')}
                alt="Button 1"
                className="rounded-lg shadow-lg animate-pulse"
              />
            </div>
            {/* Button 2 */}
            <div className="flex justify-center">
              <Image
                src={require('/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Usethecomponents/Button Small (1).png')}
                alt="Button 2"
                className="rounded-lg shadow-lg animate-pulse"
              />
            </div>
            {/* Button 3 */}
            <div className="flex justify-center">
              <Image
                src={require('/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Usethecomponents/Button Small.png')}
                alt="Button 3"
                className="rounded-lg shadow-lg animate-pulse"
              />
            </div>
            {/* Button 4 */}
            <div className="flex justify-center">
              <Image
                src={require('/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Usethecomponents/Button Small (2).png')}
                alt="Button 4"
                className="rounded-lg shadow-lg animate-pulse"
              />
            </div>
          </div>

          {/* Checkboxes Section (Vertically Stacked Checkboxes) */}
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox1"
                className="mr-2"
                checked={checkboxes.checkbox1}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox1" className="text-white">Furniture</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox2"
                className="mr-2"
                checked={checkboxes.checkbox2}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox2" className="text-white">Homeware</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox3"
                className="mr-2"
                checked={checkboxes.checkbox3}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox3" className="text-white">Vases</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox4"
                className="mr-2"
                checked={checkboxes.checkbox4}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox4" className="text-white">Products</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox5"
                className="mr-2"
                checked={checkboxes.checkbox5}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox5" className="text-white">Components</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox6"
                className="mr-2"
                checked={checkboxes.checkbox6}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="checkbox6" className="text-white">Styleguide</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
