
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
              
<div className="accordion-wrapper container mx-auto mt-24 w-3/4 mb-16 ">


          <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Maecenas efficitur scelerisque lorem?</AccordionTrigger>
        <AccordionContent>
        Nillam bibendum diam diam, maximus malesuada tortor volutpat sit amet. Curabitur volutpat feugiat tellus, sit amet faucibus massa vulputate lobortis. Vestibulum malesuada ex dolor,
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Pellentesque ultricies nulla sit amet ipsum kra pellentesque?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Nullam bibendum diam diam, maximus malesuada?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Vivamus eleifend nec felis vel auctor?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Vivamus eleifend nec felis vel auctor?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
                <Footer></Footer>
    </main>
  );
}