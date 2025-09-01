import Deals from "@/components/Deals/Deals";
import Featured from "@/components/Featured/Featured";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/HeroArea/Hero";
import HotDeals from "@/components/HotDeals/HotDeals";
import Stories from "@/components/LatestStories/Stories";
import NavBar from "@/components/Navbar/navbar";
import Categories from "@/components/PopularCategories/Categories";
import Popular from "@/components/PopularProducts/Popular";
import Socials from "@/components/Socials/Socials";
import Testimonials from "@/components/Testimonails/Testimonials";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-[#FFFFFF] overflow-hidden">
      <NavBar />
      <main className="w-full flex flex-col mt-[250px] lg:mt-52 gap-10">
        <Hero />
        <Categories />
        <Popular />
        <Deals />
        <HotDeals />
        <Featured />
        <Stories />
        <Testimonials />
        <Socials />
      </main>
      <Footer />
    </div>
  );
}
