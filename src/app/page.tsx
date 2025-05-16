import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <Header />
      <Services />
      <FAQs />
      <Footer />
    </div>
  );
}
