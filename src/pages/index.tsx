import Link from "next/link";
import Image from "next/image";

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
            from Costa Rica.
            <span className="whitespace-nowrap">👨‍💻🇨🇷</span>
            <br />I like building simple, usable, delightful user experiences
            and tools, as well as writing code that&apos;s easy to understand
            and maintainable. <span className="whitespace-nowrap">🛠️✨</span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6">
          {/* TODO: Make these cards a component */}
          <div className="transition-[border-color,box-shadow] duration-500 border-2 border-slate-200 dark:border-slate-600 shadow-lg dark:shadow-none flex flex-col rounded-lg overflow-clip">
            {/* TODO: Add alt pictures  */}
            <div className="h-56 w-full relative">
              <Image
                src="/images/custo-me.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col p-3">
              <div className="flex items-start justify-between mb-3">
                <div className="flex flex-col items-start">
                  <h3 className="text-lg font-medium">CustoMe</h3>
                  <div className="flex items-center transition-[background-color] duration-500 bg-amber-300 dark:bg-amber-500 rounded-lg px-1.5 py-0.5">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      viewBox="0 0 512 512"
                      className="h-1.5 w-1.5 transition-[fill] duration-500 fill-amber-700 dark:fill-white mr-1.5"
                    >
                      <g strokeWidth="0"></g>
                      <g strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <g>
                            <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span className="text-xs transition-[color] duration-500 text-amber-700 dark:text-white font-medium">
                      In progress
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <Link
                    href="https://custo-me.gggonzalo.com"
                    target="_blank"
                    aria-label="Live demo"
                    title="Live demo"
                  >
                    <svg
                      viewBox="-4 1.5 28 28"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-blue-500 dark:fill-blue-400 w-6 h-6"
                    >
                      <path d="M15.656 8.5l-10.438 10.5 2.188 2.219 10.469-10.469 1.938 1.906c0.531 0.531 1 0.375 1-0.438v-5.656c0-0.5-0.438-0.969-0.969-0.969h-5.656c-0.813 0-1 0.469-0.469 1zM16.813 23.031v-7.094h2.375v7.906c0 1.406-1.156 2.563-2.563 2.563h-14.063c-1.406 0-2.563-1.156-2.563-2.563v-14.094c0-1.406 1.156-2.563 2.563-2.531h8.656v2.375h-7.844c-0.5 0-0.969 0.469-0.969 0.969v12.469c0 0.5 0.469 0.969 0.969 0.969h12.469c0.5 0 0.969-0.469 0.969-0.969z"></path>
                    </svg>
                  </Link>
                  <Link
                    href="https://github.com/gggonzalo/custo-me"
                    target="_blank"
                    rel="noopener"
                    aria-label="View source code"
                    title="View source code"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-blue-500 dark:fill-blue-400 w-6 h-6"
                    >
                      <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <p>
                  Sometimes the Halloween party is close but you don&apos;t have
                  a costume. CustoMe helps you find characters based on the
                  attributes that work for you, so you get an idea of what you
                  can dress up as.
                </p>
                {/* TODO: Add to projects that have a separate page */}
                {/* <Link
                  href="/"
                  className="text-blue-500 dark:text-blue-400 hover:underline mt-1"
                >
                  Read more
                </Link> */}
              </div>
              <div className="flex gap-1.5 text-white text-sm">
                <div className="transition-[background-color,border-color] duration-500 bg-red-100 bg-opacity-30 border border-red-500 dark:bg-red-600 dark:bg-opacity-100 dark:border-red-600 rounded-lg p-1">
                  <span className="transition-[color] duration-500 text-red-500 dark:text-white">
                    Angular
                  </span>
                </div>
                <div className="transition-[background-color,border-color] duration-500 bg-sky-100 bg-opacity-30 border border-sky-500 dark:bg-sky-500 dark:bg-opacity-100 dark:border-sky-500 rounded-lg p-1">
                  <span className="transition-[color] duration-500 text-sky-500 dark:text-white">
                    Tailwind CSS
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="transition-[border-color,box-shadow] duration-500 border-2 border-slate-200 dark:border-slate-600 shadow-lg dark:shadow-none flex flex-col rounded-lg overflow-clip">
            {/* TODO: Add alt pictures  */}
            <div className="h-56 w-full relative">
              <Image
                src="/images/nueva-mejenga.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col p-3">
              <div className="flex items-start justify-between mb-3">
                <div className="flex flex-col items-start">
                  <h3 className="text-lg font-medium">Nueva Mejenga</h3>
                  <div className="flex items-center transition-[background-color] duration-500 bg-amber-300 dark:bg-amber-500 rounded-lg px-1.5 py-0.5">
                    <svg
                      version="1.1"
                      id="Layer_1"
                      viewBox="0 0 512 512"
                      className="h-1.5 w-1.5 transition-[fill] duration-500 fill-amber-700 dark:fill-white mr-1.5"
                    >
                      <g strokeWidth="0"></g>
                      <g strokeLinecap="round" strokeLinejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                        <g>
                          <g>
                            <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z"></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                    <span className="text-xs transition-[color] duration-500 text-amber-700 dark:text-white font-medium">
                      In progress
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  {/* TODO: Add link to demo when there's something deployed :P */}
                  {/* <Link
                    href="https://nuevamejenga.gggonzalo.com"
                    target="_blank"
                    aria-label="Live demo"
                    title="Live demo"
                  >
                    <svg
                      viewBox="-4 1.5 28 28"
                      version="1.1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-blue-500 dark:fill-blue-400 w-6 h-6"
                    >
                      <path d="M15.656 8.5l-10.438 10.5 2.188 2.219 10.469-10.469 1.938 1.906c0.531 0.531 1 0.375 1-0.438v-5.656c0-0.5-0.438-0.969-0.969-0.969h-5.656c-0.813 0-1 0.469-0.469 1zM16.813 23.031v-7.094h2.375v7.906c0 1.406-1.156 2.563-2.563 2.563h-14.063c-1.406 0-2.563-1.156-2.563-2.563v-14.094c0-1.406 1.156-2.563 2.563-2.531h8.656v2.375h-7.844c-0.5 0-0.969 0.469-0.969 0.969v12.469c0 0.5 0.469 0.969 0.969 0.969h12.469c0.5 0 0.969-0.469 0.969-0.969z"></path>
                    </svg>
                  </Link> */}
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <p>
                  Organizing a pick-up soccer game with your friends can be
                  complicated. From defining the date and time to ensuring that
                  everyone paid you their fee. NuevaMejenga helps you with these
                  tasks so you only have to worry about having fun when
                  it&apos;s game day.
                </p>
                {/* TODO: Add to projects that have a separate page */}
                {/* <Link
                  href="/"
                  className="text-blue-500 dark:text-blue-400 hover:underline mt-1"
                >
                  Read more
                </Link> */}
              </div>
              <div className="flex flex-wrap gap-1.5 text-white text-sm">
                <div className="transition-[background-color,border-color] duration-500 bg-red-100 bg-opacity-30 border border-red-500 dark:bg-red-600 dark:bg-opacity-100 dark:border-red-600 rounded-lg p-1">
                  <span className="transition-[color] duration-500 text-red-500 dark:text-white">
                    Angular
                  </span>
                </div>
                <div className="transition-[background-color,border-color] duration-500 bg-sky-100 bg-opacity-30 border border-sky-500 dark:bg-sky-500 dark:bg-opacity-100 dark:border-sky-500 rounded-lg p-1">
                  <span className="transition-[color] duration-500 text-sky-500 dark:text-white">
                    Tailwind CSS
                  </span>
                </div>
                <div className="transition-[background-color,border-color] duration-500 bg-purple-100 bg-opacity-30 border border-purple-600 dark:bg-purple-700 dark:bg-opacity-100 dark:border-purple-700 rounded-lg p-1">
                  <span className="transition-[color] duration-500 text-purple-600 dark:text-white">
                    ASP.NET Core Web API
                  </span>
                </div>
                <div className="transition-[background-color,border-color] duration-500 bg-purple-100 bg-opacity-30 border border-purple-600 dark:bg-purple-700 dark:bg-opacity-100 dark:border-purple-700 rounded-lg p-1">
                  <span className="transition-[color] duration-500 text-purple-600 dark:text-white">
                    EF Core
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
