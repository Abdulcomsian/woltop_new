
import TopBar from "~/components/topBar";
// import topBar from "~/components/topBar";
import Navbar from "../pages/shop/navbar";
import Footer from "../pages/shop/footer";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../../components/ui/accordion";
  
 
export default function page() {
  return (
    <main className="">
                <TopBar  time={{ hours: 0, minutes: 7, seconds: 27 }} ></TopBar>
                <Navbar></Navbar>
              
<div className="flex items-center space-x-8 bg-[#F1FBFF] py-4 px-6 
 w-full top-0 start-0 justify-center"
  role="tablist" aria-orientation="horizontal">
    <div id="headlessui-tabs-tab-:rp:" role="tab" aria-selected="true" 
    tabindex="0" data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-:rv:">
      <button className="flex items-center space-x-2 custom-tab relative max-[568px]:text-[14px] 
      text-[#000000]-600 active"><div className="icon-with-text relative flex gap-2 items-center
       before:content-[''] before:w-[10px] before:h-[10px] before:rounded-full before:border-solid
        before:border-[#49AD91] before:absolute before:transform: translate(-16px, 8px);
         before:top-[6px] before:left-[-20px] before:border-[1px] before:border-[3px]
          before:w-[15px] before:h-[15px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" 
            xmlns="http://www.w3.org/2000/svg"><path
             d="M9 22.5C9.55228 22.5 10 22.0523 10 21.5C10 20.9477 9.55228 20.5 9 20.5C8.44772 20.5 8 20.9477 8 21.5C8 22.0523 8.44772 22.5 9 22.5Z"
              stroke="#0B0A0A" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round"></path>
               <path d="M20 22.5C20.5523 22.5 21 22.0523 21 21.5C21 20.9477 20.5523 20.5 20 20.5C19.4477 20.5 19 20.9477 19 21.5C19 22.0523 19.4477 22.5 20 22.5Z"
                stroke="#0B0A0A" stroke-width="2" stroke-linecap="round"
                 stroke-linejoin="round"></path>
                 <path d="M1 1.5H5L7.68 14.89C7.77144 15.3504 8.02191 15.764 8.38755 16.0583C8.75318 16.3526 9.2107 16.509 9.68 16.5H19.4C19.8693 16.509 20.3268 16.3526 20.6925 16.0583C21.0581 15.764 21.3086 15.3504 21.4 14.89L23 6.5H6" stroke="#0B0A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><span>Cart</span></div></button></div><div id="headlessui-tabs-tab-:rr:" role="tab" aria-selected="false" tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:r11:">
                  <button className="after:content-[''] max-[568px]:after:content-[none] max-[568px]:text-[14px] max-[568px]:before:content-[none] after:lg:w-[38%] after:md:w-[30%] after:w-[5rem] after:border after:border-dashed after:border-[#49AD91] after:absolute after:end-0 before:content-[''] before:lg:w-[38%] before:md:w-[30%] before:w-[5rem] before:border before:border-dashed before:border-[#49AD91] before:absolute before:start-0 flex items-center space-x-2 lg:w-[40rem] md:w-[30rem] min-[568px]:w-[20rem] max-[568px]:w-[8rem] custom-tab justify-center middle-tab relative text-gray-400"><div className="icon-with-text relative flex gap-2 items-center before:content-[''] before:w-[10px] before:h-[10px] before:rounded-full before:border-solid before:border-[#49AD91] before:absolute before:transform: translate(-16px, 8px); before:top-[6px] before:left-[-20px] before:border-[1px] false">
                  <svg width="28" height="20" viewBox="0 0 28 20" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0V1.81818H16.625V15.4545H11.2385C10.8482 13.8918 9.4955 12.7273 7.875 12.7273C6.2545 12.7273 4.90175 13.8918 4.5115 15.4545H3.5V10.9091H1.75V17.2727H4.5115C4.90175 18.8355 6.2545 20 7.875 20C9.4955 20 10.8482 18.8355 11.2385 17.2727H18.5115C18.9018 18.8355 20.2545 20 21.875 20C23.4955 20 24.8482 18.8355 25.2385 17.2727H28V9.85818L27.9449 9.71546L26.1949 4.26091L26.005 3.63636H18.375V0H0ZM0.875 3.63636V5.45455H8.75V3.63636H0.875ZM18.375 5.45455H24.7459L26.25 10.1136V15.4545H25.2385C24.8482 13.8918 23.4955 12.7273 21.875 12.7273C20.2545 12.7273 18.9018 13.8918 18.5115 15.4545H18.375V5.45455ZM1.75 7.27273V9.09091H7V7.27273H1.75ZM7.875 14.5455C8.85238 14.5455 9.625 15.3482 9.625 16.3636C9.625 17.3791 8.85238 18.1818 7.875 18.1818C6.89762 18.1818 6.125 17.3791 6.125 16.3636C6.125 15.3482 6.89762 14.5455 7.875 14.5455ZM21.875 14.5455C22.8524 14.5455 23.625 15.3482 23.625 16.3636C23.625 17.3791 22.8524 18.1818 21.875 18.1818C20.8976 18.1818 20.125 17.3791 20.125 16.3636C20.125 15.3482 20.8976 14.5455 21.875 14.5455Z" fill="#7A7474"></path></svg><span>Shipping</span></div></button></div>
                    <div id="headlessui-tabs-tab-:rt:" role="tab" aria-selected="false"
                     tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:r13:">
                      <button className="flex items-center space-x-2 custom-tab max-[568px]:text-[14px] text-gray-400">
                        <div className="icon-with-text relative flex gap-2 items-center before:content-[''] before:w-[10px] before:h-[10px] before:rounded-full before:border-solid before:border-[#49AD91] before:absolute before:transform: translate(-16px, 8px); before:top-[6px] before:left-[-20px] before:border-[1px] false">
                          <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.6429 12.6C17.3966 12.6 17.1604 12.6948 16.9863 12.8636C16.8121 13.0324 16.7143 13.2613 16.7143 13.5C16.7143 13.7387 16.8121 13.9676 16.9863 14.1364C17.1604 14.3052 17.3966 14.4 17.6429 14.4H21.3571C21.6034 14.4 21.8396 14.3052 22.0137 14.1364C22.1879 13.9676 22.2857 13.7387 22.2857 13.5C22.2857 13.2613 22.1879 13.0324 22.0137 12.8636C21.8396 12.6948 21.6034 12.6 21.3571 12.6H17.6429ZM0 4.5C0 3.30653 0.489157 2.16193 1.35986 1.31802C2.23057 0.474106 3.41149 0 4.64286 0H21.3571C22.5885 0 23.7694 0.474106 24.6401 1.31802C25.5108 2.16193 26 3.30653 26 4.5V13.5C26 14.6935 25.5108 15.8381 24.6401 16.682C23.7694 17.5259 22.5885 18 21.3571 18H4.64286C3.41149 18 2.23057 17.5259 1.35986 16.682C0.489157 15.8381 0 14.6935 0 13.5V4.5ZM24.1429 5.4V4.5C24.1429 3.78392 23.8494 3.09716 23.3269 2.59081C22.8045 2.08446 22.096 1.8 21.3571 1.8H4.64286C3.90404 1.8 3.19548 2.08446 2.67306 2.59081C2.15064 3.09716 1.85714 3.78392 1.85714 4.5V5.4H24.1429ZM1.85714 7.2V13.5C1.85714 14.2161 2.15064 14.9028 2.67306 15.4092C3.19548 15.9155 3.90404 16.2 4.64286 16.2H21.3571C22.096 16.2 22.8045 15.9155 23.3269 15.4092C23.8494 14.9028 24.1429 14.2161 24.1429 13.5V7.2H1.85714Z" fill="#7A7474"></path></svg><span>Payment</span></div></button></div></div>
              
              <div className="flex">
                <div class="checkout-cart">
                  <div class="flex border-b border-solid border-border-200 border-opacity-75 pt-6  
                  text-sm pb-5"
                  //  style="opacity: 1;"
                  >
                    <div class="relative flex w-[123px] h-[173px] shrink-0 items-center
                     justify-center overflow-hidden bg-gray-100">
                      <img alt="The Bed Time Story Part 2" loading="lazy" decoding="async" 
                      data-nimg="fill" class="object-contain" sizes="(max-width: 768px) 100vw" 
                      srcset="/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1673%2Fconversions%2FChildren-Literature-3-thumbnail.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1673%2Fconversions%2FChildren-Literature-3-thumbnail.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1673%2Fconversions%2FChildren-Literature-3-thumbnail.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1673%2Fconversions%2FChildren-Literature-3-thumbnail.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1673%2Fconversions%2FChildren-Literature-3-thumbnail.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1673%2Fconversions%2FChildren-Literature-3-thumbnail.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1673%2Fconversions%2FChildren-Literature-3-thumbnail.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1673%2Fconversions%2FChildren-Literature-3-thumbnail.jpg&amp;w=3840&amp;q=75 3840w" src="/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1673%2Fconversions%2FChildren-Literature-3-thumbnail.jpg&amp;w=3840&amp;q=75" 
                      style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
                      ></div><div class="px-2 relative"><h3 class="font-bold text-heading text-[18px]">The Bed Time 
                      Story Part 2 </h3><p class="text-[12px] color-[#000000] ">53CM x 6M</p>
                      <div class="flex"><p class="my-2.5 font-semibold  text-accent text-[20px] color-[#BAB8B8]">
                        $120.00</p><div class="text-xs my-2.5 ml-2 pt-1 text-body w-20">68 X 1 pc</div></div>
                        <div class="badge"><span class="inline-flex items-center rounded-md bg-green-50 px-2
                         py-1 text-xs    font-medium text-green-700 ring-1 ring-inset ring-green-600/20">49% off
                         </span></div><div class="counter-with-trash-icon absolute bottom-0 flex justify-between
                          w-full"><div class="trash-icon"><img src="../../../public/img/trash1.png" alt=""/></div>
                          <div class=" flex justify-between align-middle w-full"><div class="icon">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                              <path d="M4.375 4.375L5.15625 16.875C5.19336 17.5973 5.71875 18.125 6.40625 18.125H13.5938C14.284 18.125 14.7996 17.5973 14.8438 16.875L15.625 4.375" stroke="#7A7474" stroke-linecap="round" stroke-linejoin="round"></path>
                              <path d="M3.125 4.375H16.875" stroke="#7A7474" stroke-miterlimit="10" stroke-linecap="round">
                                </path><path d="M7.5 4.375V2.8125C7.49964 2.68929 7.52365 2.56722 7.57063 2.45331C7.61762 2.33941 7.68666 2.23591 7.77379 2.14879C7.86091 2.06166 7.96441 1.99262 8.07831 1.94563C8.19222 1.89865 8.31429 1.87464 8.4375 1.875H11.5625C11.6857 1.87464 11.8078 1.89865 11.9217 1.94563C12.0356 1.99262 12.1391 2.06166 12.2262 2.14879C12.3133 2.23591 12.3824 2.33941 12.4294 2.45331C12.4764 2.56722 12.5004 2.68929 12.5 2.8125V4.375" stroke="#7A7474" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 6.875V15.625" stroke="#7A7474" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.1875 6.875L7.5 15.625" stroke="#7A7474" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.8125 6.875L12.5 15.625" stroke="#7A7474" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                </div><div class="flex border rounded border-[#49AD91]">
                                  <button class="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover 
                                  focus:outline-0 w-[35px] rounded text-[#49AD91] flex justify-center items-center
                                   hover:!bg-gray-100"><span class="sr-only">minus</span>
                                   <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-3 w-3 stroke-2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20 12H4"></path></svg>
                                    </button><div class="flex flex-1 items-center justify-center px-3 text-sm font-semibold
                                     w-[35px] bg-[#49AD91] text-[#fff]  !px-0">68</div>
                                     <button class="cursor-pointer p-2 transition-colors duration-200 hover:bg-accent-hover
                                      focus:outline-0 w-[35px] rounded text-[#49AD91] flex justify-center items-center
                                       hover:!bg-gray-100" title=""><span class="sr-only">plus</span>
                                       <svg fill="#49AD91" viewBox="0 0 24 24" stroke="#49AD91"
                                        class="md:w-4.5 h-3.5 w-3.5 stroke-2.5 md:h-4.5"><path stroke-linecap="round"
                                         stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></button>
                                         </div></div></div></div></div><div class="save-content md:p-0   ">
                                          <div class="flex"><div class="text-content"><p class="flex gap-2 items-center">
                                            <span class="icon"><svg width="16" height="18" viewBox="0 0 16 18" fill="none" 
                                            xmlns="http://www.w3.org/2000/svg">
                                              <path d="M6.90034 0.754047C7.23451 0.560137 7.61399 0.458008 8.00034 0.458008C8.38669 0.458008 8.76618 0.560137 9.10034 0.754047L9.10117 0.75488L14.6103 3.92155C14.9448 4.11604 15.2224 4.395 15.4151 4.73051C15.6079 5.06601 15.7091 5.44628 15.7087 5.83321V12.169C15.7079 12.5554 15.6061 12.9348 15.4134 13.2697C15.2208 13.6046 14.9439 13.8833 14.6103 14.0782L14.6078 14.0799L9.10117 17.2457H9.09951C8.76544 17.4395 8.38611 17.5415 7.99992 17.5415C7.61374 17.5415 7.23441 17.4395 6.90034 17.2457H6.89951L1.39284 14.079H1.39034C1.05514 13.8851 0.777068 13.6062 0.584215 13.2704C0.391362 12.9346 0.290564 12.5538 0.292007 12.1665V5.83155C0.29283 5.4452 0.394614 5.06578 0.587271 4.73089C0.779928 4.39601 1.05677 4.1173 1.39034 3.92238L1.39284 3.92071L6.90034 0.754047ZM6.35867 6.47488C6.30146 6.41347 6.23246 6.36422 6.15579 6.33006C6.07912 6.2959 5.99636 6.27753 5.91244 6.27605C5.82852 6.27457 5.74517 6.29001 5.66734 6.32144C5.58952 6.35288 5.51883 6.39967 5.45948 6.45901C5.40013 6.51836 5.35334 6.58906 5.32191 6.66688C5.29047 6.74471 5.27503 6.82806 5.27651 6.91198C5.278 6.9959 5.29636 7.07866 5.33052 7.15533C5.36468 7.23199 5.41394 7.30099 5.47534 7.35821L5.76951 7.65321C5.82673 7.71462 5.89573 7.76387 5.97239 7.79803C6.04906 7.83219 6.13182 7.85056 6.21574 7.85204C6.29966 7.85352 6.38302 7.83808 6.46084 7.80665C6.53866 7.77521 6.60936 7.72843 6.66871 7.66908C6.72806 7.60973 6.77484 7.53903 6.80628 7.46121C6.83771 7.38339 6.85315 7.30003 6.85167 7.21611C6.85019 7.13219 6.83182 7.04943 6.79766 6.97276C6.7635 6.8961 6.71425 6.8271 6.65284 6.76988L6.35867 6.47488ZM9.35034 10.3499C9.2333 10.4671 9.16756 10.6259 9.16756 10.7915C9.16756 10.9572 9.2333 11.116 9.35034 11.2332L9.64451 11.5282C9.76299 11.6386 9.91969 11.6987 10.0816 11.6959C10.2435 11.693 10.398 11.6274 10.5125 11.5129C10.627 11.3984 10.6926 11.2439 10.6955 11.082C10.6983 10.9201 10.6382 10.7634 10.5278 10.6449L10.2337 10.3499C10.1165 10.2328 9.95763 10.1671 9.79201 10.1671C9.62638 10.1671 9.46753 10.2328 9.35034 10.3499ZM10.5253 7.35821C10.5867 7.30099 10.636 7.23199 10.6702 7.15533C10.7043 7.07866 10.7227 6.9959 10.7242 6.91198C10.7256 6.82806 10.7102 6.74471 10.6788 6.66688C10.6473 6.58906 10.6006 6.51836 10.5412 6.45901C10.4819 6.39967 10.4112 6.35288 10.3333 6.32144C10.2555 6.29001 10.1722 6.27457 10.0882 6.27605C10.0043 6.27753 9.92156 6.2959 9.84489 6.33006C9.76823 6.36422 9.69923 6.41347 9.64201 6.47488L5.47534 10.6415C5.41394 10.6988 5.36468 10.7678 5.33052 10.8444C5.29636 10.9211 5.278 11.0039 5.27651 11.0878C5.27503 11.1717 5.29047 11.2551 5.32191 11.3329C5.35334 11.4107 5.40013 11.4814 5.45948 11.5407C5.51883 11.6001 5.58952 11.6469 5.66734 11.6783C5.74517 11.7097 5.82852 11.7252 5.91244 11.7237C5.99636 11.7222 6.07912 11.7039 6.15579 11.6697C6.23246 11.6355 6.30146 11.5863 6.35867 11.5249L10.5253 7.35821Z"
                                               fill="#49AD91"></path></svg></span><span>Save ₹139 with combo upgrade  </span></p>
                                               <p class="w-72 text-xs text-[#7A7474]  pt-1">Lorem ipsum dolor sit amet consectetur.
                                                 Est velit ac integer</p></div><div class="img-contain flex  items-center justify-center h-18">
                                                  <div class="media-contain">
                                                    <img alt="The Bed Time Story Part 2" loading="lazy" 
                                                  decoding="async" data-nimg="fill" class=" object-contain h-16 w-8 rounded-lg"
                                                   sizes="(max-width: 768px) 100vw"
                                                    src="/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1673%2Fconversions%2FChildren-Literature-3-thumbnail.jpg&amp;w=3840&amp;q=75"></div>
                                                    <div class=" font-black m-1">+</div><div class="media-contain">
                                                      <img alt="The Bed Time Story Part 2" loading="lazy" decoding="async" data-nimg="fill"
                                                     class=" object-contain h-16 w-8  rounded-lg"
                                                      sizes="(max-width: 768px) 100vw"
                                                     src="/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1673%2Fconversions%2FChildren-Literature-3-thumbnail.jpg&amp;w=3840&amp;q=75"></div>
                                                     </div></div><div class="flex price-bar p-3 justify-between mt-4"><div class="price-contain flex"><div class="first-price text-[#505050]  ">₹799</div>
                                                     <div class="second-price ml-2 text-sm text-[#BAB8B8]">₹1630</div>
                                                     <div class="third-price ml-2 text-sm text-[#49AD91]">Save ₹799</div></div>
                                                     <div class="btn bg-[#49AD91]  hover:bg-[#49AD91]
                                                      text-white text-sm font-normal py-1 px-4 rounded text-white">UPGRADE</div></div></div>
                                                      </div>
                <div class="mb-10 sm:mb-12 lg:mb-0 lg:w-96  lg:p-4 md:p-4  md:pt-0 pt-3  ">
                  <div class="gift-wrapper p-3 mb-3"><div class="max-w-sm w-full lg:max-w-full 
                   flex">
                    <div class="md:h-28 h-26  lg:h-28   lg:h-auto lg:w-14   
                     w-14 flex-none bg-cover  pt-3 rounded-t   lg:rounded-t-none lg:rounded-l 
                     text-center overflow-hidden" title="Woman holding a mug">
                      <img alt="The Bed Time Story Part p-2 " loading="lazy" decoding="async" 
                      data-nimg="fill" class=" object-contain  rounded-lg" sizes=""
                       src="/_next/image?url=https%3A%2F%2Fpickbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F1673%2Fconversions%2FChildren-Literature-3-thumbnail.jpg&amp;w=3840&amp;q=75"></div><div class="rounded-b lg:rounded-b-none  p-2 flex flex-col justify-between leading-normal" 
                      //  style="width: 100%;"
                       ><div class="mb-2"><div
                        class="flex gap-2 items-center justify-between"><div class="flex pt-2 pb-2">
                          <span class="icon  pr-2 "><img src="assets/img/gifts.svg" class="pt-1" alt="">
                          </span><span
                        class="text-xl  text-[12px] font-bold ">Free Gift Set </span></div>
                        <a class="text-black-950 text-[12px]  text-[#7A7474]  underline" href="">
                          Tap to Apply</a></div>
                          <p class="text-sm font-poppins w-60 text-[#7A7474]  text-[12px] ">
                            Enjoy your ultimate wallpaper tool set worth ₹799</p></div><div></div></div></div>
                            <div class="offer-bar mb-2  flex justify-center ">
                              <div class="w-full" 
                              // style="display: flex; margin: auto; overflow: hidden;"
                              
                              ><div class="box-1 basis-20 bg-white  " 
                              
                              // style="border: 1px solid pink; padding-inline: 10px; padding-block: 10px;"
                              >
                                <div class="offer-text flex justify-center align-middle text-[12px]"><span>
                                  <svg width="10" height="14" class="pt-1 mr-1" viewBox="0 0 15 17" 
                                  fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.45469 0.666247C6.77215 0.482033 7.13266 0.38501 7.49969 0.38501C7.86672 0.38501 8.22723 0.482033 8.54469 0.666247L8.54548 0.667039L13.7792 3.67537C14.097 3.86014 14.3606 4.12516 14.5437 4.44389C14.7269 4.76261 14.823 5.12386 14.8226 5.49145V11.5105C14.8218 11.8775 14.7251 12.238 14.5421 12.5561C14.3591 12.8743 14.0961 13.139 13.7792 13.3242L13.7768 13.3258L8.54548 16.3333H8.5439C8.22653 16.5174 7.86617 16.6143 7.49929 16.6143C7.13242 16.6143 6.77205 16.5174 6.45469 16.3333H6.4539L1.22256 13.325H1.22019C0.901751 13.1408 0.63758 12.8758 0.454369 12.5567C0.271159 12.2377 0.175401 11.876 0.176772 11.5081V5.48987C0.177553 5.12284 0.274249 4.76239 0.457273 4.44425C0.640297 4.12611 0.903293 3.86133 1.22019 3.67616L1.22256 3.67458L6.45469 0.666247ZM5.94011 6.10104C5.88575 6.0427 5.8202 5.99591 5.74736 5.96346C5.67453 5.93101 5.59591 5.91356 5.51619 5.91215C5.43646 5.91075 5.35727 5.92541 5.28334 5.95527C5.20941 5.98514 5.14225 6.02958 5.08587 6.08597C5.02949 6.14235 4.98504 6.20951 4.95517 6.28344C4.92531 6.35737 4.91065 6.43656 4.91205 6.51628C4.91346 6.59601 4.93091 6.67463 4.96336 6.74746C4.99581 6.8203 5.0426 6.88585 5.10094 6.9402L5.3804 7.22045C5.43475 7.27879 5.5003 7.32558 5.57314 7.35803C5.64597 7.39048 5.72459 7.40793 5.80432 7.40934C5.88404 7.41075 5.96323 7.39608 6.03716 7.36622C6.11109 7.33636 6.17825 7.29191 6.23464 7.23553C6.29102 7.17914 6.33546 7.11199 6.36533 7.03805C6.39519 6.96412 6.40986 6.88493 6.40845 6.80521C6.40704 6.72548 6.38959 6.64686 6.35714 6.57403C6.32469 6.5012 6.2779 6.43565 6.21956 6.38129L5.94011 6.10104ZM8.78219 9.78229C8.671 9.89362 8.60854 10.0445 8.60854 10.2019C8.60854 10.3592 8.671 10.5101 8.78219 10.6215L9.06165 10.9017C9.1742 11.0066 9.32307 11.0637 9.47689 11.061C9.63072 11.0583 9.77748 10.9959 9.88626 10.8872C9.99505 10.7784 10.0574 10.6316 10.0601 10.4778C10.0628 10.324 10.0057 10.1751 9.90081 10.0625L9.62136 9.78229C9.51003 9.6711 9.35912 9.60864 9.20177 9.60864C9.04443 9.60864 8.89352 9.6711 8.78219 9.78229ZM9.89844 6.9402C9.95677 6.88585 10.0036 6.8203 10.036 6.74746C10.0685 6.67463 10.0859 6.59601 10.0873 6.51628C10.0887 6.43656 10.0741 6.35737 10.0442 6.28344C10.0143 6.20951 9.96989 6.14235 9.91351 6.08597C9.85713 6.02958 9.78997 5.98514 9.71604 5.95527C9.64211 5.92541 9.56292 5.91075 9.48319 5.91215C9.40347 5.91356 9.32485 5.93101 9.25201 5.96346C9.17918 5.99591 9.11363 6.0427 9.05927 6.10104L5.10094 10.0594C5.0426 10.1137 4.99581 10.1793 4.96336 10.2521C4.93091 10.3249 4.91346 10.4036 4.91205 10.4833C4.91065 10.563 4.92531 10.6422 4.95517 10.7161C4.98504 10.7901 5.02949 10.8572 5.08587 10.9136C5.14225 10.97 5.20941 11.0144 5.28334 11.0443C5.35727 11.0742 5.43646 11.0888 5.51619 11.0874C5.59591 11.086 5.67453 11.0686 5.74736 11.0361C5.8202 11.0037 5.88575 10.9569 5.94011 10.8985L9.89844 6.9402Z" fill="#FF4C7B">
                                      </path></svg></span>OFFERS</div></div><div class="box-2 basis-40 bg-white  md:text-[11px] lg:text-[11px]   text-[11px]"
                                    //  style="border: 1px solid pink; flex-basis: 100%; padding-inline: 10px; padding-block: 10px;"
                                     
                                     >
                                      <div>Apply coupon or tap to explore more offers</div></div></div></div></div>
                                      <div class="w-full"><div class="border rounded"><div class="header bg-[#F0F7F2]  p-2">
                                        <p class="flex gap-2 items-center"><span class="icon"><svg width="19" height="19"
                                         viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M8.45469 1.66625C8.77215 1.48203 9.13266 1.38501 9.49969 1.38501C9.86672 1.38501 10.2272 1.48203 10.5447 1.66625L10.5455 1.66704L15.7792 4.67537C16.097 4.86014 16.3606 5.12516 16.5437 5.44389C16.7269 5.76261 16.823 6.12386 16.8226 6.49145V12.5105C16.8218 12.8775 16.7251 13.238 16.5421 13.5561C16.3591 13.8743 16.0961 14.139 15.7792 14.3242L15.7768 14.3258L10.5455 17.3333H10.5439C10.2265 17.5174 9.86617 17.6143 9.49929 17.6143C9.13242 17.6143 8.77205 17.5174 8.45469 17.3333H8.4539L3.22256 14.325H3.22019C2.90175 14.1408 2.63758 13.8758 2.45437 13.5567C2.27116 13.2377 2.1754 12.876 2.17677 12.5081V6.48987C2.17755 6.12284 2.27425 5.76239 2.45727 5.44425C2.6403 5.12611 2.90329 4.86133 3.22019 4.67616L3.22256 4.67458L8.45469 1.66625ZM7.94011 7.10104C7.88575 7.0427 7.8202 6.99591 7.74736 6.96346C7.67453 6.93101 7.59591 6.91356 7.51619 6.91215C7.43646 6.91075 7.35727 6.92541 7.28334 6.95527C7.20941 6.98514 7.14225 7.02958 7.08587 7.08597C7.02949 7.14235 6.98504 7.20951 6.95517 7.28344C6.92531 7.35737 6.91065 7.43656 6.91205 7.51628C6.91346 7.59601 6.93091 7.67463 6.96336 7.74746C6.99581 7.8203 7.0426 7.88585 7.10094 7.9402L7.3804 8.22045C7.43475 8.27879 7.5003 8.32558 7.57314 8.35803C7.64597 8.39048 7.72459 8.40793 7.80432 8.40934C7.88404 8.41075 7.96323 8.39608 8.03716 8.36622C8.11109 8.33636 8.17825 8.29191 8.23464 8.23553C8.29102 8.17914 8.33546 8.11199 8.36533 8.03805C8.39519 7.96412 8.40986 7.88493 8.40845 7.80521C8.40704 7.72548 8.38959 7.64686 8.35714 7.57403C8.32469 7.5012 8.2779 7.43565 8.21956 7.38129L7.94011 7.10104ZM10.7822 10.7823C10.671 10.8936 10.6085 11.0445 10.6085 11.2019C10.6085 11.3592 10.671 11.5101 10.7822 11.6215L11.0616 11.9017C11.1742 12.0066 11.3231 12.0637 11.4769 12.061C11.6307 12.0583 11.7775 11.9959 11.8863 11.8872C11.995 11.7784 12.0574 11.6316 12.0601 11.4778C12.0628 11.324 12.0057 11.1751 11.9008 11.0625L11.6214 10.7823C11.51 10.6711 11.3591 10.6086 11.2018 10.6086C11.0444 10.6086 10.8935 10.6711 10.7822 10.7823ZM11.8984 7.9402C11.9568 7.88585 12.0036 7.8203 12.036 7.74746C12.0685 7.67463 12.0859 7.59601 12.0873 7.51628C12.0887 7.43656 12.0741 7.35737 12.0442 7.28344C12.0143 7.20951 11.9699 7.14235 11.9135 7.08597C11.8571 7.02958 11.79 6.98514 11.716 6.95527C11.6421 6.92541 11.5629 6.91075 11.4832 6.91215C11.4035 6.91356 11.3248 6.93101 11.252 6.96346C11.1792 6.99591 11.1136 7.0427 11.0593 7.10104L7.10094 11.0594C7.0426 11.1137 6.99581 11.1793 6.96336 11.2521C6.93091 11.3249 6.91346 11.4036 6.91205 11.4833C6.91065 11.563 6.92531 11.6422 6.95517 11.7161C6.98504 11.7901 7.02949 11.8572 7.08587 11.9136C7.14225 11.97 7.20941 12.0144 7.28334 12.0443C7.35727 12.0742 7.43646 12.0888 7.51619 12.0874C7.59591 12.086 7.67453 12.0686 7.74736 12.0361C7.8202 12.0037 7.88575 11.9569 7.94011 11.8985L11.8984 7.9402Z" fill="#749362"></path></svg>
                                          </span><span class="text-[#7A7474]  text-[12px]">Yay! You have saved ₹799 on this order 
                                            </span></p></div><div class="bill-detail mx-3">
                                              <div class="flex flex-col border-b border-border-200 py-3 p-2">
                                                <h4 class="font-medium mt-3">Bill Details</h4><div class="flex mt-2">
                                                  <img src="assets/img/coin.svg" class="w-4" alt=""/>
                                                  <p class="text-base text-[#7A7474] ml-2  text-[8px]">Total Wol Cash</p></div></div>
                                                  </div><div class="border-b border-border-200 py-3 p-2 mx-3"><ul>
                                                    <li class="text-body text-[14px] mb-2 flex justify-between"><div>Total MRP</div>
                                                    <div class="text-[#000000] font-medium">₹799</div></li>
                                                    <li class="text-body text-[14px] mb-2 flex justify-between">
                                                      <div>Cart Discount</div><div class="text-[#000000] font-medium">-₹155</div>
                                                      </li><li class="text-body  text-[14px] flex justify-between">
                                                        <div>Shipping Charges</div><div class="text-[#000000] font-medium">₹50 
                                                           <span class="text-[14px]   text-[#49AD91]">FREE</span> </div></li>
                                                           </ul></div><div class="subtotal mx-3 mt-2 pb-3">
                                                            <h4 class="font-medium flex justify-between items-center">
                                                              <span>Sub Total</span><span>$8,160.00</span></h4>
                                                              <p class="text-body text-[14px]">You can send a gift note on 
                                                                the next step</p></div></div><div class=" ml-3 mr-3  md:ml-2 md:mr-2">
                                                                  <button data-variant="normal" 
                                                                  class="inline-flex items-center justify-center shrink-0 font-semibold
                                                                   leading-none rounded outline-none transition duration-300 ease-in-out
                                                                    focus:outline-0 focus:shadow focus:ring-1 focus:ring-accent-700
                                                                     bg-accent text-light border border-transparent hover:bg-accent-hover
                                                                      px-5 py-0 h-12 mt-5 w-full">Checkout<svg width="20" height="20" 
                                                                      class="ml-2" viewBox="0 0 20 20" fill="none" 
                                                                      xmlns="http://www.w3.org/2000/svg">
                                                                        <path d="M10.4688 4.375L16.0937 10L10.4687 15.625" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                                        <path d="M15.3125 10L3.90625 10" stroke="white" stroke-width="1.5" stroke-linecap="round"
                                                                         stroke-linejoin="round"></path></svg></button></div></div></div>
              </div>
              
                <Footer></Footer>
    </main>
  );
}