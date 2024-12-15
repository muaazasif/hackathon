import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Usethestyles() {
  return (
    <div className="bg-[#4E4D93] min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />



  {/* Top Famous Section */}
  <div className="flex flex-col items-start justify-center py-12 px-4 sm:px-5">
    <h1 className="text-3xl font-bold mb-6 text-white">
      Use the styles
    </h1>
    <p className="text-lg text-white text-justify max-w-5xl leading-relaxed">
      Styles in Figma mean you don’t have to repetitively enter values for typography, colors and elevations, minimizing the risk of inconsistencies and streamlining the design process.
      <br />
      Within this template, you can find color and type styles, and their definitions on the style guide page. To use them, simply select them from the Figma style panel as shown below.
    </p>
  </div>





      {/* Content Section (Images Section) */}
      <div className="flex flex-col items-center justify-center py-10 flex-grow">

        {/* Images Section with continuous animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
          <div className="flex justify-center pt-10">
            <Image
              src={require('/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Usethestyles/Screenshot 2022-05-31 at 9.33.png')} // Keep your image URL as it is
              alt="Tikka"
              width={200}
              height={200}
              className="rounded-lg shadow-lg mb-6 animate-pulse" // Add animation class
            />
          </div>
          <div className="flex justify-center">
            <Image
              src={require('/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Usethestyles/Screenshot 2022-05-31 at 9.33 (1).png')} // Keep your image URL as it is
              alt="Chicken Boti"
              width={200}
              height={200}
              className="rounded-lg shadow-lg mb-6 animate-pulse" // Add animation class
            />x
          </div>
          <div className="flex justify-center pt-10">
            <Image
              src={require('/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Usethestyles/Screenshot 2022-05-31 at 9.33 (2).png')} // Keep your image URL as it is
              alt="Malai Boti"
              width={200}
              height={200}
              className="rounded-lg shadow-lg mb-6 animate-pulse" // Add animation class
            />
          </div>
        </div>
      </div>
    </div>
  );
}
