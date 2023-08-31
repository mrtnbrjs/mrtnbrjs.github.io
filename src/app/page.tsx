import { League_Spartan } from "next/font/google";
import Image from "next/image";

const inter = League_Spartan({ subsets: ["latin"] }); // $ExpectType FontFace

export default function Home() {
  return (
    <>
      <main className={"max-w-4xl mx-auto pt-16"}>
        <section className="bg-black">
          <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">

              <h1
                style={inter.style}
                className="glitch max-w-2xl mb-4 text-5xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
              >
                <span style={inter.style} aria-hidden="true">
                  Hola soy Martín
                </span>
                Hola soy Martín
                <span style={inter.style} aria-hidden="true">
                  Hola soy Martín
                </span>
              </h1>
              <p className="max-w-2xl mt-6 mb-6 font-light text-white leading-relaxed lg:mb-8 md:text-lg lg:text-xl" style={
                {
                  minHeight:"250px",
                }
              }>
                ¡URGENTE! <br/>
                Mi sitio personal está actuando de manera extraña.
                Actualmente estoy muy ocupado, y definitivamente necesitaré ayuda para solucionarlo.
                Parece que hay problemas de diseño y animaciones.
                Agradecería mucho cualquier asistencia que puedan brindarme.
                ¡Gracias de antemano por su ayuda!
              </p>
              <div className="mx-auto">
                <style contentEditable="true" style={
                  {
                    zIndex:1,
                    width:"100%",
                    background:"#101524",
                    padding:"20px 15px",
                    minHeight:"300px",
                    display:"block !important",
                    overflow: "auto",
                    fontFamily: "monospace",
                    color: "white",
                  }
                } >

                </style>
              </div>

            </div>
            <div className="mx-auto lg:col-span-5 align-center justify-center">
              <div className="gradient-bg lg:mt-0 lg:col-span-5 lg:flex  bg-white mx-auto p-1 h-fit w-fit  align-center justify-center ">
                <Image
                  src="/images/profile.jpg"
                  alt="Picture of the author"
                  width={201}
                  height={201}
                  priority
                  style={{
                    borderRadius: "50%",
                    maxHeight: "201px",
                    maxWidth: "201px",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
