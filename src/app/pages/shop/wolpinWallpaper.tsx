import Image from "next/image";
import productdescription from "../../../../public/productdescription.png";

export default function WolpinWallpaper() {
  const cartData = [
    {
      id: 1,
      src: productdescription,
    },
    {
      id: 2,
      src: productdescription,
    },
    {
      id: 3,
      src: productdescription,
    },
    {
      id: 4,
      src: productdescription,
    },
    {
      id: 5,
      src: productdescription,
    },
    {
      id: 6,
      src: productdescription,
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="scrollbar-hide grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[27px] px-3">
        {cartData?.map((item) => (
          <div key={item.id} className="relative cursor-pointer">
            <Image
              src={item?.src || undefined}
              className="h-56 rounded-lg object-cover md:h-[368px] w-full"
              alt="img"
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
}
