import HomeSection from "./components/inicio";
import AboutSection from "./components/about";
import ServicesSection from "./components/services";
import ReviewSection from "./components/reviews";
import ContactSection from "./components/contact";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HomeSection />
      <div className="p-5">
        <AboutSection />
        <ServicesSection />
        <ReviewSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
