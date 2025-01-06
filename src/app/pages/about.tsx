// import Card from "./shop/Card";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Swiper from "./shop/swiperItem";
import TopBar from "./shop/topBar";

export default function About() {
  return (
    <main>
      <TopBar time={{ hours: 0, minutes: 7, seconds: 27 }}></TopBar>
      <Navbar></Navbar>
      <Swiper></Swiper>

      <h1>lkdsflkjn d,m fkjl </h1>
      {/* <ourTeam></ourTeam> */}
      <Footer></Footer>
    </main>
  );
}
