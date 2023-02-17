import Head from "next/head";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <Head>
        <title>Gonzalo Gonzalez</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-screen max-w-4xl mx-auto flex flex-col">
        <Navbar />
        <main className="grow px-4 my-10">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
