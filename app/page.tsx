import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { BlogList } from "@/components/blog-list";
import { Gallery } from "@/components/gallery";
import { FAQ } from "@/components/faq";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <BlogList />
        <Gallery />
        <FAQ />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
