"use client";

import Link from "next/link";
// import Card from "./shop/Card";
import Banner from "../pages/shop/banner";
import Navbar from "../../components/navbar";
import TopBar from "../pages/shop/topBar";
import Swiper from "../pages/shop/swiperItem";
import PopularWallpaper from "../pages/shop/popularWallpaper";
import ReviewCard from "../pages/shop/reviewCard";
import Reeling from "../pages/shop/reeling";
import DetailCard from "../pages/shop/detailCard";
import CategorieCard from "../pages/shop/categorieCard";
import VideoSection from "../pages/shop/videoSection";
import Footer from "../../components/footer";
import ourTeam from "~/components/ourTeam";
import SectionBlock from "~/components/ui/section-block";
import StepSection from "../pages/shop/stepSection";
import ConsultationSection from "../pages/shop/consultation-background";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export default function page() {
  return (
    <main>
      <TopBar time={{ hours: 0, minutes: 7, seconds: 27 }}></TopBar>
      <Navbar></Navbar>
      <section className="mx-auto w-full max-w-1920 bg-light pb-8 lg:pb-10 xl:pb-14">
  <div className="flex w-full justify-center  py-20 md:min-h-[250px] lg:min-h-[288px]">
    <div className="relative flex w-full flex-col items-center justify-center">
      <h1 className="text-brand-dark text-center text-xl font-bold md:text-2xl lg:text-3xl 2xl:text-[40px]">
        <span className="font-manrope mb-1 block font-bold md:mb-1lg:mb-1 2xl:mb-2">
          Terms &amp; conditions
        </span>
      </h1>
    
    </div>
  </div>
  <div className="mx-auto w-full max-w-screen-lg px-4 py-10">
    <div>
      <div className="text-center text-bolder"></div>
      <div>
        <h2 className="mb-4 text-[30px]">Overview</h2>
        <div>
          Iaculis euismod a euismod dictum sit dictum arcu, neque. Consequat fusce laoreet accumsan, vestibulum. Turpis sed eu tortor massa pellentesque lectus tortor viverra sed. Nulla dignissim quis dolor nunc id bibendum vel. Dignissim sit sed viverra rhoncus pulvinar blandit massa. Eu aenean eu est non nibh suscipit pretium, pellentesque. Dolor vitae, amet, ornare suspendisse.
        </div>
        <div>
          Sit ac varius libero egestas ullamcorper lacinia et viverra auctor. Semper lobortis vitae vitae in malesuada molestie. Ante elementum massa pretium, sit arcu. Porta blandit tincidunt urna magna. Orci, et ipsum gravida eget risus. Nunc velit quam pellentesque viverra. Feugiat mi purus ornare vitae aliquet cras tellus velit sociis. Ut augue tellus sed at. Duis morbi lorem nibh amet, mus urna, purus velit. Mi condimentum laoreet sed iaculis nunc vestibulum nunc diam tortor. Pulvinar orci, non lectus nec duis. Adipiscing vitae augue sed sapien purus.
        </div>
        <div>
          Porttitor at eu mi, non enim nunc diam. Vel nisl cursus nam risus morbi ac venenatis faucibus ac. Enim ullamcorper nullam in aliquam, curabitur dapibus risus interdum cursus. Arcu et quis egestas scelerisque tempor, mauris. Dictum amet odio pellentesque dis euismod diam arcu, pellentesque. Leo sem pellentesque pretium volutpat quam consequat. Eu nec consectetur mus consectetur eget. Vitae eu ultrices adipiscing commodo. Interdum vivamus enim ut diam nisl.
        </div>
        <div>
          Lacus dapibus urna blandit turpis pulvinar adipiscing eu aliquam. Lectus scelerisque arcu aliquet feugiat velit ut nunc massa in. Sed sapien ut molestie ipsum. Sed tristique ullamcorper ornare vitae accumsan malesuada ac facilisis. Posuere lorem duis adipiscing cras nisl.
        </div>
        <div>
          Eget gravida orci congue quis etiam condimentum mattis. Nibh morbi aliquam et, lectus rhoncus. Nullam lacus, urna quis tempus varius. Amet, venenatis, scelerisque dignissim sed. Tellus fermentum.
        </div>
      </div>
    </div>
    <div>
      <h2 className="mb-4 mt-4 text-[30px]">Terms of Services</h2>
      <div>
        Sagittis eleifend tincidunt semper eget venenatis nulla viverra. Pharetra, nascetur sit turpis feugiat vestibulum semper orci. Lacus pretium in aliquet tristique. Eget mollis nam eu, sem mattis suspendisse ac. Dictum ultrices dolor suspendisse donec elit integer.
      </div>
    </div>
    <div>
      <h2 className="mb-1 mt-4 text-[30px]">Online Store Terms</h2>
      <div>
        Amet, elit fames quis consequat. Vel, mattis tellus in turpis elementum tellus id vitae. Nibh quis ut bibendum cursus amet, vitae metus scelerisque quam. Nibh bibendum augue urna, sed nulla ultrices molestie aenean id. Consequat tortor vestibulum feugiat vulputate. Ipsum mattis morbi.
      </div>
    </div>
    <div>
      <h2 className="mb-1 mt-4 text-[30px]">General Conditions</h2>
      <div>
        Tellus consectetur sed et cras nec gravida sit. Ut euismod egestas amet vel viverra lectus id id arcu. Ultrices in magna id tincidunt luctus amet. Porttitor pulvinar integer justo, eget amet, vitae aliquam aliquam. Mi tellus in nisi, augue nibh faucibus adipiscing vitae orci. Risus urna consequat in pellentesque nec imperdiet fringilla. Convallis faucibus egestas urna enim, urna vivamus et. In arcu vitae sed massa. Sed amet eu, neque non urna a amet id libero. Ut quisque sed pretium sodales in felis dictumst elit viverra. Sed in quisque risus orci quis urna. Enim ullamcorper orci amet arcu turpis.
      </div>
    </div>
  </div>
</section>

      <Footer></Footer>
    </main>
  );
}
