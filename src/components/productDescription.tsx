import React from "react";
import Image from "next/image";
import desImg from "../../public/productdescription.png";

interface ProductData {
  featured_image: any;
  description: string;
}

// Define the prop type that receives the response data
interface ProductDescriptionProps {
  responseData: {
    data: ProductData;
  };
}

export default function ProductDescription({
  responseData,
}: ProductDescriptionProps) {
  const { description, featured_image } = responseData?.data;

  // Function to parse and render the description
  const renderDescription = () => {
    if (!description) return null;

    // Split the description by new lines and filter out empty lines
    const lines = description.split("\n").filter((line) => line.trim() !== "");

    return (
      <ul className="mb-4 p-4 pl-5">
        {lines.map((line, index) => (
          <li
            key={index}
            className="mt-3 flex text-xs text-[#49AD91] md:text-base"
          >
            <span dangerouslySetInnerHTML={{ __html: line }} />
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="">
      <div className="mb-4 flex flex-col justify-between rounded-lg bg-white py-5 md:flex-row">
        <div className="">
          <div className="border-rad h-10 w-60 rounded-br-full rounded-tr-full border-[0.7px] border-dashed border-[#49AD91] bg-[#E6F1FF]">
            <h1 className="p-2 text-base font-semibold md:text-[18px]">
              Product Description
            </h1>
          </div>
          {renderDescription()}
        </div>
        <div className="">
          <Image
            className="mr-4 h-[147.88px] w-full rounded-[6px] object-cover px-3 md:h-[291.1px] md:w-[13rem]"
            src={featured_image}
            alt="Banner Background2"
            width={100}
            height={100}
          />
        </div>
      </div>

      <div className="div rounded border-[0.7px] border-dashed border-[#4E4949] bg-white p-4">
        <h6 className="mt-4 flex justify-start align-middle font-semibold text-[#000000]">
          <svg
            width="22"
            height="28"
            className="mr-4 p-1"
            viewBox="0 0 22 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3997 10.9322C12.5922 10.3547 13.4077 10.3547 13.6002 10.9322L14.7289 14.3219C14.9774 15.0671 15.396 15.7441 15.9515 16.2994C16.5071 16.8547 17.1844 17.2729 17.9297 17.5209L21.3177 18.6497C21.8952 18.8422 21.8952 19.6577 21.3177 19.8502L17.9279 20.9789C17.1828 21.2274 16.5057 21.646 15.9505 22.2016C15.3952 22.7571 14.977 23.4344 14.7289 24.1797L13.6002 27.5677C13.5587 27.6942 13.4783 27.8043 13.3705 27.8823C13.2627 27.9604 13.133 28.0024 12.9999 28.0024C12.8668 28.0024 12.7371 27.9604 12.6293 27.8823C12.5215 27.8043 12.4412 27.6942 12.3997 27.5677L11.2709 24.1779C11.0226 23.433 10.6043 22.7561 10.0491 22.2008C9.4938 21.6456 8.81688 21.2272 8.07191 20.9789L4.68216 19.8502C4.55571 19.8087 4.44559 19.7283 4.36751 19.6205C4.28944 19.5127 4.24741 19.383 4.24741 19.2499C4.24741 19.1168 4.28944 18.9872 4.36751 18.8794C4.44559 18.7716 4.55571 18.6912 4.68216 18.6497L8.07191 17.5209C8.81688 17.2727 9.4938 16.8543 10.0491 16.2991C10.6043 15.7438 11.0226 15.0669 11.2709 14.3219L12.3997 10.9322ZM5.63941 2.00894C5.66451 1.93316 5.71285 1.86721 5.77756 1.82047C5.84228 1.77372 5.92008 1.74857 5.99991 1.74857C6.07974 1.74857 6.15755 1.77372 6.22226 1.82047C6.28698 1.86721 6.33532 1.93316 6.36041 2.00894L7.03766 4.04244C7.34041 4.94894 8.05091 5.65944 8.95741 5.96219L10.9909 6.63944C11.0667 6.66454 11.1326 6.71288 11.1794 6.77759C11.2261 6.84231 11.2513 6.92011 11.2513 6.99994C11.2513 7.07977 11.2261 7.15758 11.1794 7.22229C11.1326 7.28701 11.0667 7.33535 10.9909 7.36044L8.95741 8.03769C8.51007 8.18616 8.10357 8.43703 7.77028 8.77031C7.437 9.1036 7.18613 9.5101 7.03766 9.95744L6.36041 11.9909C6.33532 12.0667 6.28698 12.1327 6.22226 12.1794C6.15755 12.2262 6.07974 12.2513 5.99991 12.2513C5.92008 12.2513 5.84228 12.2262 5.77756 12.1794C5.71285 12.1327 5.66451 12.0667 5.63941 11.9909L4.96216 9.95744C4.8137 9.5101 4.56283 9.1036 4.22954 8.77031C3.89626 8.43703 3.48976 8.18616 3.04241 8.03769L1.00891 7.36044C0.933128 7.33535 0.867179 7.28701 0.820436 7.22229C0.773694 7.15758 0.748535 6.92011 0.748535 6.99994C0.748535 6.92011 0.773694 6.84231 0.820436 6.77759C0.867179 6.71288 0.933128 6.66454 1.00891 6.63944L3.04241 5.96219C3.48976 5.81373 3.89626 5.56286 4.22954 5.22957C4.56283 4.89629 4.8137 4.48979 4.96216 4.04244L5.63941 2.00894ZM18.0102 0.173193C18.0274 0.123364 18.0598 0.080156 18.1028 0.0495759C18.1457 0.0189958 18.1972 0.00256348 18.2499 0.00256348C18.3027 0.00256348 18.3541 0.0189958 18.397 0.0495759C18.44 0.080156 18.4724 0.123364 18.4897 0.173193L18.9412 1.52769C19.1424 2.13319 19.6167 2.60744 20.2222 2.80869L21.5767 3.26019C21.6265 3.27747 21.6697 3.30984 21.7003 3.35281C21.7309 3.39578 21.7473 3.4472 21.7473 3.49994C21.7473 3.55268 21.7309 3.60411 21.7003 3.64708C21.6697 3.69005 21.6265 3.72242 21.5767 3.73969L20.2222 4.19119C19.924 4.29094 19.6531 4.45857 19.4308 4.68087C19.2085 4.90317 19.0409 5.17406 18.9412 5.47219L18.4897 6.82669C18.4724 6.87652 18.44 6.91973 18.397 6.95031C18.3541 6.98089 18.3027 6.99732 18.2499 6.99732C18.1972 6.99732 18.1457 6.98089 18.1028 6.95031C18.0598 6.91973 18.0274 6.87652 18.0102 6.82669L17.5587 5.47219C17.4589 5.17406 17.2913 4.90317 17.069 4.68087C16.8467 4.45857 16.5758 4.29094 16.2777 4.19119L14.9249 3.73969C14.8751 3.72242 14.8319 3.69005 14.8013 3.64708C14.7707 3.60411 14.7543 3.55268 14.7543 3.49994C14.7543 3.4472 14.7707 3.39578 14.8013 3.35281C14.8319 3.30984 14.8751 3.27747 14.9249 3.26019L16.2794 2.80869C16.8849 2.60744 17.3592 2.13319 17.5604 1.52769L18.0102 0.173193Z"
              fill="black"
            />
          </svg>

          <span className="inline-block text-base text-black md:text-[18px]">
            HOW TO CARE
          </span>
        </h6>
        <p className="ml-5 mt-1 pb-5 pl-4 text-xs text-[#49AD91] md:text-base">
          Use a damp cloth to clean the wallpaper. Avoid pasting the wallpaper
          on a cracked, textured or wall surface with moisture.
        </p>
      </div>
    </div>
  );
}