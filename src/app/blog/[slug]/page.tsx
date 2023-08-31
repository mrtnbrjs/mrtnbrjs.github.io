import { Roboto_Slab } from "next/font/google";
import Head from "next/head";
import { dummyDB } from "../../../../dummyDB";
const inter = Roboto_Slab({ subsets: ["latin"] }); // $ExpectType FontFace

export default async function BlogPostPage({ slug }: any) {
  const post = await getPost(slug);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <main className={"max-w-4xl mx-auto pt-16 pl-6 pr-6 "}>
        <section className="bg-black">
          <div className="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              🇲
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
              <div className="gradient-bg lg:mt-0 lg:col-span-5 lg:flex  bg-white mx-auto p-1 rounded-full h-fit w-fit  align-center justify-center "></div>
            </div>
          </div>
        </section>
        <h3 className={"text-3xl font-bold text-white"} style={inter.style}>
          Entradas
        </h3>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return dummyDB;
}

export async function getPost(params: any) {
  console.log("entra getpost", params);
  return dummyDB.find((post) => post.slug === params);
}
