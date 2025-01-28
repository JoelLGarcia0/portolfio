import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Head from "next/head";
import {motion} from "framer-motion";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Projects from "@/components/Projects";
import NavBar from "@/components/Navbar";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Head>
        <title>Joel Garcia</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width-device-width, initial-scale=1"/>
        <link rel="icon" href="/logo.ico" />
      </Head>
      {/* start of main container */}
      <main className=" w-full h-screen font-bodyFont bg-bodyColor 
      text-textLight overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textGreen/60">

          <NavBar />
          {/* container after Navbar */}

          <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between ">

            {/* Leftside container */}
            <motion.div
             initial={{opacity:0}}
             animate={{opacity:1}}
             transition={{duration: 2.5 }}  
             className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0">
              <LeftSide />
            </motion.div>

            {/* middle container */}
            <div className="h-[88vh] w-full mx-auto p-4">
              <Banner/>
              <About/>
              <Projects />
              <Contact />
              <Footer />
            </div>

            {/* rightside container */}
            <motion.div 
               initial={{opacity:0}}
               animate={{opacity:1}}
               transition={{duration: 2.5 }}  
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0">
              <RightSide  />
            </motion.div>
          </div>
      </main>
     </>
  );
}
