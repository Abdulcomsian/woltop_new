import banner from'../../../assets/banner/banner.png';

import product1  from "../../../assets/product/Woltop2222.png";
import product2  from "../../../assets/product/Woltop333333.png";
import product3  from "../../../assets/product/Woltop44444.png";
import product4  from "../../../assets/product/Woltop55555.png";
import { ArrowRight } from '~/components/icons/Arrowfill';

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '~/components/ui/card';


export default function categorieCard() {

  const cardData = [
    {
      id: 1,
      title: "Card Title 1",
      img: product1,
      description: "$250.00",
      price: "$250.00",
      discountPrice: "$250.00",
      discount: "5%",
      content: "Science Fiction",
    },
    {
      id: 2,
      title: "Card Title 2",
      img: product2,
      description: "$250.00",
      price: "$250.00",
      discountPrice: "$250.00",
      discount: "16%",
      content: "Literature",
    },
    {
      id: 3,
      title: "Card Title 3",
      img: product3,
      description: "$250.00",
      price: "$250.00",
      discountPrice: "$250.00",
      discount: "10%",
      content: "Children's Literature",
    },
    {
      id: 4,
      title: "Card Title 4",
      img: product4,
      description: "$250.00",
      price: "$250.00",
      discountPrice: "$250.00",
      discount: "12%",
      content: "Comic books",
    }
  ];


  return (
    <div className="flex w-full flex-col  pb-[20px]  lg:pb-[40px] 
    xl:pb-[54px] 3xl:pb-[60px] lg:container lg:m-auto  ">

   {/* <div className="grid grid-cols-2 gap-4 lg:gap-2 px-3 lg:px-0 md:gap-6 gap-y-10 lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))] 3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]"> */}
<div className='w-full'>
<div className='grid grid-cols-2 gap-5 lg:gap-2 px-3 lg:px-0 md:gap-6 gap-y-10
lg:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] 
xl:grid-cols-[repeat(auto-fill,minmax(220px,1fr))] xl:gap-8 xl:gap-y-12 
2xl:grid-cols-[repeat(auto-fill,minmax(280px,1fr))]
 3xl:grid-cols-[repeat(auto-fill,minmax(360px,1fr))]'>
        
           {cardData.map((card) => (
           <div style={{ width: "100%", marginRight: "24px" }}> 
           <a   >
             <div className="card-wrapper relative">
<div className="absolute   z-40 top-0 right-0  translate-x-1/2 -translate-y-1/2 ">
<div className="w-11/12 flex justify-end">

   
   </div>
</div>
             
       <Card key={card.id}
         style={{ backgroundImage: `url(${card.img.src})` }}
       className="custom-card-class h-52 z-0 md:h-80 w-auto items-center justify-center relative">
   
         <CardHeader>
         
         </CardHeader>
        
         {/* <p>{card.price}</p> */}
         

       </Card>
     
          <div className="flex justify-between items-center mt-3 px-2.5 md:px-0">
            <span className="text-base font-semibold text-heading transition-colors
             group-hover:text-orange-500 ltr:text-left rtl:text-right text-xs md:text-base">
              {card.content}</span>
             <ArrowRight/>
        
          </div>
       </div>
       </a>
       </div>
     ))}
           </div>
           </div>
   </div>
);
}
