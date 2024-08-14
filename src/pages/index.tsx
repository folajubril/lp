import Image from "next/image";
import Header from "@/components/Header";
import Form from "@/components/Form";
import Info from "@/components/Info";
import Footer from "@/components/Footer";

export default function Home() {
  return (

      <div className="w-[100vw] h-full flex flex-col">
        <Header />
        <Form/>
        <Info/>
        <Footer/>
      </div>
  );
}
