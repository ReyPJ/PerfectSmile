"use client";
import { useState, useEffect } from "react";
import HomeSection from "./components/inicio";
import EnHeader from "./components/en/enHeader";
import AboutSection from "./components/about";
import ServicesSection from "./components/services";
import ContactSection from "./components/contact";
import Header from "./components/header";
import Footer from "./components/footer";
import EnHomeSection from "./components/en/enInicio";
import EnAboutSection from "./components/en/enAbout";
import EnServicesSection from "./components/en/enServices";
import EnContactSection from "./components/en/enContact";
import EnFooter from "./components/en/enFooter";

export default function Home() {
  const [idioma, setIdioma] = useState<"es" | "en" | "ger">("en");

  useEffect(() => {
    const savedIdioma = localStorage.getItem("idioma");
    if (savedIdioma === "es" || savedIdioma === "en" || savedIdioma === "ger") {
      setIdioma(savedIdioma as "es" | "en" | "ger");
    }
  }, []);

  return (
    <main>
      {idioma === "es" ? (
        <>
          <Header />
          <HomeSection />
          <AboutSection />
          <ServicesSection />
          {/*
          <ReviewSection />
          */}
          <ContactSection />
          <Footer />
        </>
      ) : idioma === "en" ? (
        <>
          <EnHeader />
          <EnHomeSection />
          <EnAboutSection />
          <EnServicesSection />
          {/*
          <ReviewSection />
          */}
          <EnContactSection />
          <EnFooter />
        </>
      ) : idioma === "ger" ? (
        <></>
      ) : null}
    </main>
  );
}
