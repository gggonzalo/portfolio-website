import Link from "next/link";
import Image from "next/image";
import { ProjectCard } from "@/components/ProjectCard";
import {
  AngularBadge,
  AspDotNetCoreWebApiBadge,
  EfCoreBadge,
  NextJsBadge,
  SignalRBadge,
  TailwindBadge as TailwindCssBadge,
} from "@/components/ProjectCard/TechnologyBadges";
import { InProgressBadge } from "@/components/ProjectCard/StatusBadge";

export default function Home() {
  return (
    <>
      {/* TODO: Add animations on scroll */}
      <section
        id="intro"
        className="flex flex-col md:flex-row items-center justify-between mb-20"
      >
        <Image
          src="/images/me.png"
          alt=""
          height="192"
          width="192"
          className="shrink-0 md:order-2 mb-10 md:mb-0"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">Hey, I&apos;m Gonzalo. 👋</h1>
          <p className="text-lg mr-0 md:mr-20 mb-2">
            I&apos;m a{" "}
            <em className="font-medium not-italic">Full Stack Developer</em>{" "}
            from&nbsp;<span className="whitespace-pre">Costa Rica. 👨‍💻</span>
            <br />I like building simple, usable, delightful user experiences
            and tools, as well as writing code that&apos;s easy to understand
            and&nbsp;<span className="whitespace-pre">maintainable. 🛠️✨</span>
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="https://www.linkedin.com/in/gggonzalo"
              rel="noopener"
              target="_blank"
              className="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 420 500"
                className=" fill-blue-500 dark:fill-blue-400 h-5 w-5 mr-1.5"
              >
                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
              </svg>
              {/* TODO: Check if we can use a different element here. Seems like a label inside a is not semantically correct */}
              <label className="text-xl tracking-wider cursor-pointer hover:text-blue-400">
                LinkedIn
              </label>
            </Link>
            <Link
              href="https://github.com/gggonzalo"
              rel="noopener"
              target="_blank"
              className="flex items-center"
            >
              <svg
                viewBox="0 1.5 22 22"
                xmlns="http://www.w3.org/2000/svg"
                className=" fill-slate-700 dark:fill-purple-400 h-5 w-5 mr-1.5"
              >
                <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path>
              </svg>
              <label className="text-xl tracking-wider cursor-pointer hover:text-slate-700 dark:hover:text-purple-400">
                GitHub
              </label>
            </Link>
          </div>
        </div>
      </section>
      <section id="projects" className="flex flex-col mb-20">
        <h2 className="text-3xl font-semibold mb-3">Projects</h2>
        <p className="text-lg mb-6">
          Some of the side projects I&apos;ve worked on:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProjectCard
            projectName="Nueva Mejenga"
            projectDescription="Organizing a pick-up soccer game with your friends can be complicated. From finding the players to changing the date and time. Nueva Mejenga helps you with these tasks so you only have to worry about having fun when it's game day."
            imageSrc="/images/nueva-mejenga.jpg"
            // TODO: Readd when the database for this demo is fixed
            // liveDemoLink="https://nuevamejenga.gggonzalo.com"
            statusBadge={<InProgressBadge />}
            technologyBadges={[
              <AngularBadge key="Angular" />,
              <TailwindCssBadge key="TailwindCSS" />,
              <AspDotNetCoreWebApiBadge key="AspDotNetCoreWebApi" />,
              <EfCoreBadge key="EfCore" />,
              <SignalRBadge key="SinalR" />,
            ]}
          />
          <ProjectCard
            projectName="CustoMe"
            projectDescription="Sometimes the Halloween party is close but you don't have a costume. CustoMe helps you find characters based on the attributes that work for you, so you get an idea of what you can dress up as."
            imageSrc="/images/custo-me.jpg"
            statusBadge={<InProgressBadge />}
            liveDemoLink="https://custo-me.gggonzalo.com"
            gitHubLink="https://github.com/gggonzalo/custo-me"
            technologyBadges={[
              <AngularBadge key="Angular" />,
              <TailwindCssBadge key="TailwindCSS" />,
            ]}
          />
          <ProjectCard
            projectName="Portfolio website"
            projectDescription="The website you are on right now."
            statusBadge={<InProgressBadge />}
            gitHubLink="https://github.com/gggonzalo/portfolio-website"
            technologyBadges={[
              <NextJsBadge key="NextJs" />,
              <TailwindCssBadge key="TailwindCSS" />,
            ]}
          />
        </div>
      </section>
    </>
  );
}
