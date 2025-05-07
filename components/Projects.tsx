import React from "react";
import SectionTitle from "./SectionTitle";
import Image from "next/image";
import {
  cubabakery,
  leeconstruction,
  portfolio,
  restweb,
} from "@/public/assests";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section
      id="project"
      className="max-w-container mx-auto lgl:px-20 py-24 scroll-mt-20"
    >
      <SectionTitle title="Projects I Have Worked On" titleNo=".02" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {/* Project 1 */}
        <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full h-auto relative group"
              href="https://www.joellgarcia.com"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={portfolio}
                  alt="portfoliopic"
                />
              </div>
            </a>
            <div
              className="w-full xl-w-1/2 flex flex-col gap-6 lgl:justify-between 
            items-end text-right xl:-ml-16 z-10"
            >
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>

              <h3 className="text-2xl font-bold"> Portfolio Website</h3>

              <p className="bg-[#161616] text-sm md-text-base p-2 md:p-6 rounded-md">
                A showcase of my Next.js, React, TypScript, and JavaScript
                skills. Get to know me and some of the stuff i have worked on.
                Contact me via any of my pages or email
              </p>

              <ul className="text-xs md:text:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwindcss</li>
                <li>Vercel</li>
              </ul>

              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/JoelLGarcia0"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://www.joellgarcia.com"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="w-full flex flex-col items-center justify-between gap-28 mt-1">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full h-auto relative group"
              href="https://www.cubabakery.com"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={cubabakery}
                  alt="Cuba Bakery Webpage"
                />
              </div>
            </a>
            <div
              className="w-full xl-w-1/2 flex flex-col gap-6 lgl:justify-between 
    items-end text-right z-10"
            >
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>

              <h3 className="text-2xl font-bold"> Cuba Bakery Website</h3>

              <p className="bg-[#161616] text-sm md-text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                A custom-built website for a local bakery in Homestead, Florida,
                designed to highlight their unique Cuban flavors and connect
                with their community. This project showcases my front-end
                development skills using Next.js, React, TypeScript, and
                JavaScript. Features include a responsive layout, dynamic menu
                display, interactive map integration with Leaflet, and smooth
                navigation between Home, Menu, About Us, and Contact pages.
                Built with a focus on performance, usability, and clean design.
              </p>

              <ul className="text-xs md:text:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwindcss</li>
                <li>Vercel</li>
              </ul>

              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/JoelLGarcia0"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://www.cubabakery.com"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
          <div className="flex flex-col xl:flex-row gap-6">
            <a
              className="w-full h-auto relative group"
              href="https://lee-construction.vercel.app/"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={leeconstruction}
                  alt="Lee Construction Webpage"
                />
              </div>
            </a>
            <div
              className="w-full xl-w-1/2 flex flex-col gap-6 lgl:justify-between 
            items-end text-right xl:-ml-16 z-10"
            >
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>

              <h3 className="text-2xl font-bold"> Lee Construction Website</h3>

              <p className="bg-[#161616] text-sm md-text-base p-2 md:p-6 rounded-md">
                A professional website developed for a South Florida-based
                construction company to establish their online presence and
                showcase their services. Built using Next.js, React, TypeScript,
                and JavaScript, this project demonstrates my ability to create
                clean, functional, and scalable front-end solutions. The site
                features service pages, a project gallery, and a contact
                form—designed with a modern aesthetic and responsive layout to
                ensure accessibility across all devices. This project highlights
                my ability to collaborate with real businesses and deliver
                results tailored to their industry needs.
              </p>

              <ul className="text-xs md:text:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwindcss</li>
                <li>Vercel</li>
              </ul>

              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/JoelLGarcia0"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://lee-construction.vercel.app/"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="w-full flex flex-col items-center justify-between gap-28 mt-1">
          <div className="flex flex-col xl:flex-row-reverse gap-6">
            <a
              className="w-full h-auto relative group"
              href="https://www.restweb.dev"
              target="_blank"
            >
              <div>
                <Image
                  className="w-full h-full object-contain"
                  src={restweb}
                  alt="Restweb Landing Page"
                />
              </div>
            </a>
            <div
              className="w-full xl-w-1/2 flex flex-col gap-6 lgl:justify-between 
    items-end text-right z-10"
            >
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>

              <h3 className="text-2xl font-bold"> RESTWeb Dev Website</h3>

              <p className="bg-[#161616] text-sm md-text-base p-2 xl:-mr-16 md:p-6 rounded-md">
                RESTWeb.dev is my personal web development brand where I design
                and build modern websites for small businesses. I created the
                site using Next.js and Tailwind CSS, focusing on clean design,
                responsive layout, and fast performance. The site showcases my
                services, past work, and contact options for potential clients.
                I also integrated SEO best practices and custom animations to
                create a professional and user-friendly experience. RESTWeb.dev
                reflects my passion for helping businesses grow through
                well-built, effective web solutions.
              </p>

              <ul className="text-xs md:text:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
                <li>Nextjs</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Tailwindcss</li>
                <li>Vercel</li>
              </ul>

              <div className="text-2xl flex gap-4">
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://github.com/JoelLGarcia0"
                  target="_blank"
                >
                  <TbBrandGithub />
                </a>
                <a
                  className="hover:text-textGreen duration-300"
                  href="https://restweb.dev"
                  target="_blank"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
