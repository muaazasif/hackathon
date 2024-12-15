import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Usethecontentblocks() {
  return (
    <div className="bg-[#4E4D93] min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Top Famous Section */}
      <div className="flex flex-col items-start justify-center py-12 px-4 sm:px-5">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Use the content blocks
        </h1>
        <p className="text-lg text-white text-justify max-w-5xl leading-relaxed">
          We’ve built out a multitude of content blocks for you to use in your landing pages. From hero sections, forms, CTAs to pricing sections. Everything you need to get started building polished, modern landing pages.
        </p>
      </div>

      {/* Content Section (Images Section) */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Single column for the image and centered */}
        <div className="flex justify-center w-full">
          {/* First Image with specific size */}
          <Image
            src={require('/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Usethecontentblocks/Email sign-up.png')} // Keep your image URL as it is
            alt="Tikka"
            width={800} // Set the width to 800px
            height={300} // Set the height to 300px
            className="rounded-lg shadow-lg mb-6"
          />
        </div>
      </div>
    </div>
  );
}
