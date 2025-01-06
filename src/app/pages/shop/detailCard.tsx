import { Heart } from '~/components/icons/Heart';
import banner from'../../../assets/banner/banner.png';
import product1  from "../../../assets/product/Woltop2222.png";
import product2  from "../../../assets/product/Woltop333333.png";
import product3  from "../../../assets/product/Woltop44444.png";
import product4  from "../../../assets/product/Woltop55555.png";


import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '~/components/ui/card';
import { Minus } from '~/components/icons/Heart copy 4';
import { Plus } from '~/components/icons/Plus';

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
                md:w-9" >
                  
                <svg  fill="#49AD91" viewBox="0 0 24 24" stroke="#49AD91"
                   className="h-5 w-5 stroke-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </button>
                </div>
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
        <div className="p-3 border rounded-lg cursor-pointer text-left transition
          border-2 border-dashed border-[#d2d2d2]    rounded-md">
          <span className="block text-[8px] rounded-3xl bg-[#49AD9126] inline-block p-1 font-semibold text-green-600">
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

        <div className="p-2 border rounded-lg cursor-pointer text-left transition
         border-2 border-dashed border-[#49AD91]    rounded-md bg-[#49AD910D]">
          <span className="block text-[8px] rounded-3xl bg-[#49AD9126] inline-block p-1 font-semibold text-green-600">
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
          <Heart />
        </button>

        <div className="flex border rounded border-[#49AD91]">
       

          <div className="flex items-center justify-center p-2 w-[135px] bg-[#49AD91] text-white font-semibold text-sm">
          <Plus></Plus>
           ADD
          </div>

         
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
