import { League_Spartan } from "next/font/google";
import { dummyDB } from "../../dummyDB";
import Image from "next/image";

const inter = League_Spartan({ subsets: ["latin"] }); // $ExpectType FontFace

export default function Home() {
  return (
    <>
      <main className={"max-w-4xl mx-auto pt-16 pl-6 pr-6 "}>
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
              <p className="max-w-2xl mt-6 mb-6 font-light text-white leading-relaxed lg:mb-8 md:text-lg lg:text-xl">
                Soy desarrollador <b className="font-bold">frontend</b>, músico
                aficionado y me gusta el fútbol. Aquí vengo a dar mis opiniones
                sobre lo que voy viviendo.
              </p>
            </div>
            <div className="floating mx-auto lg:col-span-5 align-center justify-center">
              <div className="gradient-bg lg:mt-0 lg:col-span-5 lg:flex  bg-white mx-auto p-1 rounded-full h-fit w-fit  align-center justify-center ">
                <Image
                  src="/images/profile.jpg"
                  alt="Picture of the author"
                  width={201}
                  height={201}
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
        <h3 className={"text-3xl font-bold text-white"} style={inter.style}>
          Entradas
        </h3>
        {dummyDB.map((post: any) => (
          <div
            key={post.slug}
            className={
              "mt-8 border border-white p-4 rounded-lg hover-page cursor-pointer "
            }
          >
            <h2 className={"text-2xl font-bold text-white"} style={inter.style}>
              {post.title}
            </h2>
            <p className={"mt-2 text-white"}>
              {post.content.substring(0, 30)}...
            </p>
          </div>
        ))}
      </main>
    </>
  );
}
