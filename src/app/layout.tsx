import "~/styles/globals.css";
import ReduxProvider from "~/store/reduxProvider";
import { GeistSans } from "geist/font/sans";
import Navbar from "../components/navbar";
import TopBar from "./pages/shop/topBar";
import Footer from "../components/footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import FaviconAndTitle from "~/components/FaviconAndTitle";

export const metadata = {
  title: "Wolpin Wallpaper",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ReduxProvider>
      <HtmlContent>{children}</HtmlContent>
    </ReduxProvider>
  );
}

function HtmlContent({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head />
      <body>
        <FaviconAndTitle />
        <TopBar time={{ hours: 24, minutes: 7, seconds: 27 }} />
        <Navbar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
