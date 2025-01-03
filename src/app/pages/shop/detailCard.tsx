import banner from'../../../assets/banner/banner.png';
import product1  from "../../../assets/product/Woltop2222.png";
import product2  from "../../../assets/product/Woltop333333.png";
import product3  from "../../../assets/product/Woltop44444.png";
import product4  from "../../../assets/product/Woltop55555.png";


import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '~/components/ui/card';

type DetailCardProps = {
  rating: boolean;

};


export default function detailCard({ rating }) {

    const cardData = [
        {
          id: 1,
          title: "Card Title 1",
          img: product1,
          description: "$250.00",
          price: "$250.00",
          discountPrice: "$250.00",
          discount: "5%",
          content: "wolpin Wallpaper Non-Woven",
        },
        {
          id: 2,
          title: "Card Title 2",
          img: product2,
          description: "$250.00",
          price: "$250.00",
          discountPrice: "$250.00",
          discount: "16%",
          content: "The Adventures of  Pin Pin",
        },
        {
          id: 3,
          title: "Card Title 3",
          img: product3,
          description: "$250.00",
          price: "$250.00",
          discountPrice: "$250.00",
          discount: "10%",
          content: "The Children Story 2",
        },
        {
          id: 4,
          title: "Card Title 4",
          img: product4,
          description: "$250.00",
          price: "$250.00",
          discountPrice: "$250.00",
          discount: "12%",
          content: "The Bed Time Story Final Part",
        }
      ];


  return (
    <div className="flex w-full flex-col  pb-[20px]  lg:pb-[40px] 
     xl:pb-[54px] 3xl:pb-[60px] lg:container lg:m-auto">

    {/* <div className="grid grid-cols-2 gap-4 lg:gap-2 px-3 lg:px-0 md:gap-6 gap-y-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] 3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]"> */}
<div className='w-full'>
<div className='grid grid-cols-2 gap-5 lg:gap-2 px-3 lg:px-0 md:gap-6 gap-y-10
 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] 
 xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 
 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]
  3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]'>
         
            {cardData.map((card) => (
              <a >
              <div className="card-wrapper relative">
<div className="absolute   z-40 top-0 right-0  translate-x-1/2 -translate-y-1/2 ">
<div className="w-11/12 flex justify-end">
<button className="flex h-7 w-7 items-center justify-center rounded border border-blue-200
 bg-[#F5FFFC] text-sm text-heading transition-colors hover:border-accent hover:bg-accent
 
  hover:text-light focus:border-accent focus:bg-accent focus:text-light focus:outline-0 md:h-9 
  md:w-9" ><svg fill="#49AD91" viewBox="0 0 24 24" stroke="#49AD91"
   className="h-5 w-5 stroke-2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
    </svg></button></div>
</div>
              
        <Card key={card.id}
          style={{ backgroundImage: `url(${card.img.src})` }}
        className="custom-card-class h-52 z-0 md:h-80 w-auto items-center justify-center relative">
        <div className="absolute top-2  left-2 rounded bg-accent px-1.5 text-xs font-semibold bg-emerald-600 text-white
           leading-6 text-light ltr:left-3 rtl:right-2 sm:px-2 md:top-2 md:px-2.5 ltr:md:left-4
            rtl:md:right-2">{card.discount}</div>
          <CardHeader>
          
          </CardHeader>
         
          {/* <p>{card.price}</p> */}
          

        </Card>
        <CardContent>
            <p>{card.content}</p>
          </CardContent>
          <CardFooter>
          
          {/* <CardTitle className="text-blue-500">{card.title}</CardTitle> */}
            <CardDescription> 
              <span className="text-sm font-semibold text-heading md:text-base">{card.price}</span>
            <del className="text-xs text-body ltr:ml-2 ml-2 rtl:mr-2 md:text-sm">{card.discountPrice}</del>
              </CardDescription>
        </CardFooter>
         

        {rating && (
            <div className="card-review">

            <div className="card-review">
     <header className="md:py-6 w-2/3 md:w-full">
      <h3 className="md:mb-4 cursor-pointer truncate text-sm text-black lg:text-base">
        The Bed Time Story Part 2
      </h3>

      <div className="flex gap-1 mb-4">
        <div className="flex text-yellow-400">
          
        {[...Array(5)].map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.884 1.458 8.229L12 18.897l-7.394 4.522L6.064 15.19.001 9.306l8.332-1.151z" />
            </svg>
          ))}
         
        </div>
        <span className="text-gray-600 text-sm">(3)</span>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2">
        <div className="p-2 border rounded-lg cursor-pointer text-left transition border-gray-300 border-dotted">
          <span className="block text-xs font-semibold text-green-600">
            49% off
          </span>
          <span className="block text-[10px] md:text-sm font-bold">
            53CM x 6M
          </span>
          <span className="block text-xs md:text-md font-semibold text-green-700">
            ₹799
          </span>
          <del className="block text-xs text-gray-500">₹1630</del>
        </div>

        <div className="p-2 border rounded-lg cursor-pointer text-left transition border-gray-300 border-dotted">
          <span className="block text-xs font-semibold text-green-600">
            51% off
          </span>
          <span className="block text-[10px] md:text-sm font-bold">
            53CM x 9.5M
          </span>
          <span className="block text-xs md:text-md font-semibold text-green-700">
            ₹1149
          </span>
          <del className="block text-xs text-gray-500">₹462</del>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-3 items-center">
        <button
          type="button"
          className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border text-xl text-accent transition-colors border-gray-300"
        >
          <svg
            viewBox="0 -28 512.001 512"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="#A5A1A1"
            strokeWidth="2"
          >
            <path d="M256 455.516c-7.29 0-14.316-2.641-19.793-7.438-20.684-18.086-40.625-35.082-58.219-50.074l-.09-.078c-51.582-43.957-96.125-81.918-127.117-119.313C16.137 236.81 0 197.172 0 153.871c0-42.07 14.426-80.883 40.617-109.293C67.121 15.832 103.488 0 143.031 0c29.555 0 56.621 9.344 80.446 27.77C235.5 37.07 246.398 48.453 256 61.73c9.605-13.277 20.5-24.66 32.527-33.96C312.352 9.344 339.418 0 368.973 0c39.539 0 75.91 15.832 102.414 44.578C497.578 72.988 512 111.801 512 153.871c0 43.3-16.133 82.938-50.777 124.738-30.993 37.399-75.532 75.356-127.106 119.309-17.625 15.016-37.597 32.039-58.328 50.168a30.046 30.046 0 0 1-19.789 7.43zM143.031 29.992c-31.066 0-59.605 12.399-80.367 34.914-21.07 22.856-32.676 54.45-32.676 88.965 0 36.418 13.535 68.988 43.883 105.606 29.332 35.394 72.961 72.574 123.477 115.625l.093.078c17.66 15.05 37.68 32.113 58.516 50.332 20.961-18.254 41.012-35.344 58.707-50.418 50.512-43.051 94.137-80.223 123.469-115.617 30.344-36.618 43.879-69.188 43.879-105.606 0-34.516-11.606-66.11-32.676-88.965-20.758-22.515-49.3-34.914-80.363-34.914-22.758 0-43.653 7.235-62.102 21.5-16.441 12.719-27.894 28.797-34.61 40.047-3.452 5.785-9.53 9.238-16.261 9.238s-12.809-3.453-16.262-9.238c-6.71-11.25-18.164-27.328-34.61-40.047-18.448-14.265-39.343-21.5-62.097-21.5zm0 0" />
          </svg>
        </button>

        <div className="flex border rounded border-[#49AD91]">
          <button className="cursor-pointer p-2 w-[35px] text-[#49AD91] flex justify-center items-center rounded">
            <span className="sr-only">minus</span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-3 w-3 stroke-2.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
            </svg>
          </button>

          <div className="flex items-center justify-center px-3 w-[35px] bg-[#49AD91] text-white font-semibold text-sm">
            68
          </div>

          <button className="cursor-pointer p-2 w-[35px] text-[#49AD91] flex justify-center items-center rounded">
            <span className="sr-only">plus</span>
            <svg
              fill="#49AD91"
              viewBox="0 0 24 24"
              stroke="#49AD91"
              className="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
             </div>

            </div>

)}


        </div>
        </a>
      ))}
            </div>
            </div>
    </div>
  );
}
