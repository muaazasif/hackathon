import Navbar from "../components/Navbar";
import Image from "next/image";

export default function Checkthelayouts() {
  return (
    <div className="bg-[#4E4D93] min-h-screen flex flex-col justify-between">
      {/* Navbar */}
      <Navbar />

      {/* Top Famous Section */}
      <div className="flex flex-col items-start justify-center py-12 px-4 sm:px-5">
        <h1 className="text-3xl font-bold mb-6 text-white">
          Check the layouts
        </h1>
        <p className="text-lg text-white text-justify max-w-5xl leading-relaxed">
          As well as components and styles we’ve built a bunch of layouts in both mobile and desktop sizes. Play around with replacing and modifying the nested content blocks and to switch device, simply use the content block property ‘device’ to toggle between mobile and desktop.
        </p>
      </div>

      {/* Content Section (Images Section) */}
      <div className="flex flex-col items-center justify-center flex-grow">
        {/* Images Section with continuous animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto">
          {/* First Image (Increased Size) */}
          <div className="flex justify-center pt-10">
            <Image
              src={require('/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Checkthelayouts/Product Details.png')} // Keep your image URL as it is
              alt="Tikka"
              width={250} // Increased width for the first image
              height={250} // Increased height for the first image
              className="rounded-lg shadow-lg mb-6 animate-pulse"
            />
          </div>

          {/* Second Image (Same Size) */}
          <div className="flex justify-center">
            <Image
              src={require('/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Checkthelayouts/Product v3.png')} // Keep your image URL as it is
              alt="Chicken Boti"
              width={250} // Same size as other images
              height={250}
              className="rounded-lg shadow-lg mb-6 animate-pulse"
            />
          </div>

          {/* Third Image (Same Size) */}
          <div className="flex justify-center">
            <Image
              src={require('/home/muaaz/Desktop/Governor Sindh IT/Quarter 2/Class01/my-app/app/Checkthelayouts/Product v3 (1).png')} // Keep your image URL as it is
              alt="Malai Boti"
              width={250} // Same size as other images
              height={250} // Same size as other images
              className="rounded-lg shadow-lg mb-6 animate-pulse"
            />
          </div>
        </div>
      </div>
    </div>
  );
}