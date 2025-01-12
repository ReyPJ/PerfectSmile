"use client";
import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import EnHeader from "../components/en/enHeader";
import EnFooter from "../components/en/enFooter";
import DeHeader from "../components/ger/deHeader";
import DeFooterSection from "../components/ger/deFooter";
import Image from "next/image"

export default function About() {
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
          <div>
            <h1 className="text-6xl text-center font-bold uppercase my-10">Estamos aqui para ayudar</h1>
            <div className="py-10">
              <Image 
                alt="LogoRedondo" 
                src="/redonda.png"
                width={400}
                height={400}
                className="mx-auto justify-center flex"
              />
            </div>
            <div className="flex flex-col items-center space-y-8">
              <h2 className="text-3xl uppercase md:text-4xl font-bold text-black">
                Nuestro Equipo
              </h2>

              <h3 className="text-2xl uppercase md:text-3xl font-bold text-black">
                Casi 10 años de experiencia en alineadores
              </h3>

              {/* Descripción de equipo */}
              <p className="max-w-2xl text-justify text-lg text-black mt-6">
                Con casi 10 años de experiencia en la industria de los alineadores,
                hemos construido una sólida reputación por ofrecer asesoría experta y
                planificación de tratamientos para ortodoncistas de todo el mundo.
                Nuestro profundo conocimiento y amplia experiencia nos permiten
                ofrecer soluciones de vanguardia adaptadas a las necesidades únicas de
                cada paciente. Ya sea que estés tratando casos complejos o
                tratamientos estándar, nuestra experiencia nos permite guiarte con
                confianza y precisión, lo que nos convierte en un socio de confianza
                en tu práctica ortodóntica.
              </p>

              <div className="flex flex-col lg:flex-row justify-center py-20 gap-8 lg:gap-32">
                {/* Primer miembro del equipo */}
                <div className="flex flex-col items-center pb-5 bg-bluebg rounded-lg shadow-lg">
                  <div className="mb-4 lg:w-[500px] w-auto">
                    <Image
                      src="/DiegoAraya.jpg"
                      alt="Dentista"
                      width={800}
                      height={800}
                      className="rounded w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center text-center text-black pt-4 pb-10 space-y-2 min-h-[150px]">
                    <h3 className="text-2xl uppercase font-bold">Diego Araya</h3>
                    <h3 className="text-xl font-bold">
                      Ubicación: Kansas City, Estados Unidos.
                    </h3>
                    <h4 className="text-md max-w-xs text-start">
                      - Ex Especialista en Protocolo Clínico en Invisalign: brindando
                      asistencia a médicos a nivel mundial.
                      <br />- Ex Diseñador de Tratamientos Dentales en 3D (técnico de
                      tratamiento).
                    </h4>
                  </div>
                </div>

                {/* Segundo miembro del equipo */}
                <div className="flex flex-col items-center pb-5 bg-orangebg rounded-lg shadow-lg">
                  <div className="mb-4 lg:w-[500px] w-auto">
                    <Image
                      src="/steff.jpg"
                      alt="Dentista"
                      width={800}
                      height={800}
                      className="rounded w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center text-center text-white space-y-2 min-h-[150px]">
                    <h3 className="text-2xl uppercase font-bold">Stefanie Francke</h3>
                    <h3 className="text-xl font-bold">
                      Ubicación: Zona de Colonia,
                      <br /> Renania del Norte-Westfalia, Alemania.
                    </h3>
                    <h4 className="text-md max-w-xs text-start">
                      - Técnico dental
                      <br />
                      - Ex-especislista técnico y clínico en alineadores, aparatos
                      terapéuticos, guías quirúrgicas, planificación de implantes (a
                      nivel mundial)
                      <br />- Formadora en dispositivos médicos y aplicaciones de
                      software
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      ) : idioma === "en" ? (
        <>
          <EnHeader /> 
          <div>
            <h1 className="text-6xl text-center font-bold uppercase my-10">We are here to help</h1>
            <div className="py-10">
              <Image 
                alt="LogoRedondo" 
                src="/redonda.png"
                width={400}
                height={400}
                className="mx-auto justify-center flex"
              />
            </div>
            <div className="flex flex-col items-center space-y-8">
              <h2 className="text-3xl uppercase md:text-4xl font-bold text-black">
                  Our Team
              </h2>

              <h3 className="text-2xl uppercase md:text-3xl font-bold text-black">
                  Almost 10 Years of Expertise in Aligners
              </h3>

              {/* Descripción de equipo */}
              <p className="max-w-2xl text-justify text-lg text-black mt-6">
                  With almost 10 years of experience in the aligner industry, we have
                  built a solid reputation for providing expert consultation and
                  treatment planning for orthodontists worldwide. Our deep knowledge and
                  extensive experience enable us to offer cutting-edge solutions
                  tailored to each patient’s unique needs. Throughout the years, we have
                  worked closely with dental professionals to help them optimize their
                  aligner treatments, ensuring the highest standards of care and
                  efficiency. Whether you’re dealing with complex cases or standard
                  treatments, our experience allows us to guide you with confidence and
                  precision, making us a trusted partner in your orthodontic practice.
              </p>

              <div className="flex flex-col lg:flex-row justify-center py-20 gap-8 lg:gap-32">
                {/* Primer miembro del equipo */}
                <div className="flex flex-col items-center pb-5 bg-bluebg rounded-lg shadow-lg">
                  <div className="mb-4 lg:w-[500px] w-auto">
                    <Image
                      src="/DiegoAraya.jpg"
                      alt="Dentista"
                      width={800}
                      height={800}
                      className="rounded w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center text-center text-black pt-4 pb-10 space-y-2 min-h-[150px]">
                    <h3 className="text-2xl uppercase font-bold">Diego Araya</h3>
                    <h3 className="text-xl font-bold">
                        Location: Kansas City, United States.
                    </h3>
                    <h4 className="text-md max-w-xs text-start">
                      - Former Clinical Protocol Specialist at Invisalign: providing
                      assistance to doctors worldwide.
                      <br />- Former 3D Dental Treatment Designer (treatment
                      technician).
                    </h4>
                  </div>
                </div>

                {/* Segundo miembro del equipo */}
                <div className="flex flex-col items-center pb-5 bg-orangebg rounded-lg shadow-lg">
                  <div className="mb-4 lg:w-[500px] w-auto">
                    <Image
                      src="/steff.jpg"
                      alt="Dentista"
                      width={800}
                      height={800}
                      className="rounded w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center text-center text-white space-y-2 min-h-[150px]">
                    <h3 className="text-2xl uppercase font-bold">Stefanie Francke</h3>
                    <h3 className="text-xl font-bold">
                        Location: Cologne Area, NRW, Germany.
                    </h3>
                    <h4 className="text-md max-w-xs text-start">
                        - Dental Technician
                        <br /> - Former Technical and Clinical Specialist in aligners,
                        therapeutic appliances, surgical guides, implant planning
                        (worldwide).
                        <br />- Trainer for medical devices and software applications.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <EnFooter />
        </>
      ) : idioma === "ger" ? (
        <>
          <DeHeader />
          <div>
            <h1 className="text-6xl text-center font-bold uppercase my-10">Wir sind hier, um zu helfen</h1>
            <div className="py-10">
              <Image 
                alt="LogoRedondo" 
                src="/redonda.png"
                width={400}
                height={400}
                className="mx-auto justify-center flex"
              />
            </div>
            <div className="flex flex-col items-center space-y-8">
              <h2 className="text-3xl uppercase md:text-4xl font-bold text-black">
                  Unser Team
              </h2>

              <h3 className="text-2xl uppercase md:text-3xl font-bold text-black">
                  Fast 10 Jahre Erfahrung mit Alignern
              </h3>

              {/* Descripción de equipo */}
              <p className="max-w-2xl text-justify text-lg text-black mt-6">
                  Mit fast 10 Jahren Erfahrung in der Aligner-Industrie haben wir uns
                  einen soliden Ruf in der Beratung und Behandlungsplanung für
                  Kieferorthopäden weltweit aufgebaut. Unser fundiertes Wissen und
                  unsere umfangreiche Erfahrung ermöglichen es uns, innovative
                  Lösungen anzubieten, die auf die Bedürfnisse jedes einzelnen
                  Patienten zugeschnitten sind. Im Laufe der Jahre haben wir eng mit
                  Kieferorthopäden zusammengearbeitet, um ihre Aligner-Behandlungen zu
                  optimieren und die höchsten Standards in Bezug auf Sorgfalt und
                  Effizienz zu gewährleisten. Ob komplexe Fälle oder
                  Standardbehandlungen, unsere Erfahrung ermöglicht es uns, Sie mit
                  Vertrauen und Präzision zu beraten, was uns zu einem zuverlässigen
                  Partner in Ihrer kieferorthopädischen Praxis.
              </p>

              <div className="flex flex-col lg:flex-row justify-center py-20 gap-8 lg:gap-32">
                {/* Primer miembro del equipo */}
                <div className="flex flex-col items-center pb-5 bg-bluebg rounded-lg shadow-lg">
                  <div className="mb-4 lg:w-[500px] w-auto">
                    <Image
                      src="/DiegoAraya.jpg"
                      alt="Dentista"
                      width={800}
                      height={800}
                      className="rounded w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center text-center text-black pt-4 pb-10 space-y-2 min-h-[150px]">
                    <h3 className="text-2xl uppercase font-bold">Diego Araya</h3>
                    <h3 className="text-xl font-bold">
                        Location: Kansas City, United States.
                    </h3>
                    <h4 className="text-md max-w-xs text-start">
                      - Former Clinical Protocol Specialist at Invisalign: providing
                      assistance to doctors worldwide.
                      <br />- Former 3D Dental Treatment Designer (treatment
                      technician).
                    </h4>
                  </div>
                </div>

                {/* Segundo miembro del equipo */}
                <div className="flex flex-col items-center pb-5 bg-orangebg rounded-lg shadow-lg">
                  <div className="mb-4 lg:w-[500px] w-auto">
                    <Image
                      src="/steff.jpg"
                      alt="Dentista"
                      width={800}
                      height={800}
                      className="rounded w-full"
                    />
                  </div>
                  <div className="flex flex-col justify-center text-center text-white space-y-2 min-h-[150px]">
                    <h3 className="text-2xl uppercase font-bold">Stefanie Francke</h3>
                    <h3 className="text-xl font-bold">
                        Raum Köln, NRW, Deutschland.
                    </h3>
                    <h4 className="text-md max-w-xs text-start">
                        - Zahntechniker.
                        <br />- Ehemaliger technischer und klinischer Spezialist für
                        Aligner, therapeutische Geräte, Bohrschablonen, Implantatplanung
                        (weltweit).
                        <br />- Trainer für Medizinprodukte und Softwareanwendungen.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <DeFooterSection />
        </>
      ) : null}
    </main>
  );
}
