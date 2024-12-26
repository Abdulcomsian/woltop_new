import banner from'../../../assets/banner/banner.png';
import product1  from "../../../assets/product/Woltop2222.png";
import product2  from "../../../assets/product/Woltop333333.png";
import product3  from "../../../assets/product/Woltop44444.png";
import product4  from "../../../assets/product/Woltop55555.png";


import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '~/components/ui/card';

export default function PopularWallpaper() {

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
        },
        {
          id: 5,
          title: "Card Title 5",
          img: product2,
          description: "$250.00",
          price: "$250.00",
          discountPrice: "$250.00",
          discount: "20%",
          content: "The Kids Story Part one",
        },
        {
          id: 6,
          title: "Card Title 5",
          img: product1,
          description: "$250.00",
          price: "$250.00",
          discountPrice: "$250.00",
          discount: "20%",
          content: "The Kids Story Part one",
        },
        {
          id: 7,
          title: "Card Title 5",
          img: product4,
          description: "$250.00",
          price: "$250.00",
          discountPrice: "$250.00",
          discount: "20%",
          content: "The Kids Story Part one",
        },
        {
          id: 8,
          title: "Card Title 8",
          img: product4,
          description: "$250.00",
          price: "$250.00",
          discountPrice: "$250.00",
          discount: "20%",
          content: "The Kids Story Part one",
        },
      ];


  return (
    <div className="flex w-full flex-col  pb-[20px]  lg:pb-[40px] lg:px-7 xl:px-10 xl:pb-[54px] 3xl:pb-[60px] lg:container lg:m-auto">
     <h3 className='text-xl font-semibold lg:text-[27px] 3xl:text-3xl font-poppins  mt-5  mb-5  text-center' >Popular Wallpaper</h3>
    {/* <div className="grid grid-cols-2 gap-4 lg:gap-2 px-3 lg:px-0 md:gap-6 gap-y-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] 3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]"> */}
<div className='w-full'>
<div className='grid grid-cols-2 gap-5 lg:gap-2 px-3 lg:px-0 md:gap-6 gap-y-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] 3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]'>
         
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
        </div>
        </a>
      ))}
            </div>
            </div>
    </div>
  );
}
