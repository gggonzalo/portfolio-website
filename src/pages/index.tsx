import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* TODO: Add animations on scroll */}
      <section
        id="intro"
        className="flex flex-col md:flex-row items-center justify-between mb-20"
      >
        {/* TODO: See if this can be changed to Image. Also, see why this is taking so long to load on mobile */}
        <img
          src="/images/me.png"
          alt=""
          className="h-48 w-48 md:order-2 mb-10 md:mb-0"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">Hey, I&apos;m Gonzalo. 👋</h1>
          <p className="text-lg mr-0 md:mr-20 mb-2">
            I&apos;m a{" "}
            <em className="font-medium not-italic">Full Stack Developer</em>{" "}
            from Costa Rica.
            <span className="whitespace-nowrap">👨🏻‍💻🇨🇷</span>
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
              <label className="text-xl tracking-wider hover:text-blue-400">
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
              <label className="text-xl tracking-wider hover:text-slate-700 dark:hover:text-purple-400">
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
          <div className="transition-[border-color,box-shadow] duration-500 border-2 border-slate-200 dark:border-slate-600 shadow-lg dark:shadow-none flex flex-col rounded-lg overflow-clip">
            {/* TODO: Add alt pictures  */}
            <img
              src="/images/custo-me.jpg"
              alt=""
              className="w-full h-56 object-cover"
            />
            <div className="flex flex-col p-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">CustoMe</h3>
                <div className="flex items-center gap-1.5">
                  <Link href="/" aria-label="Live demo" title="Live demo">
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
              <p className="mb-1">
                Sometimes the Halloween party is close but you don&apos;t have a
                costume. CustoMe helps you find characters based on the
                attributes that work for you, so you get an idea of what you can
                dress up as.
              </p>
              <Link
                href="/"
                className="text-blue-500 dark:text-blue-400 hover:underline mb-4"
              >
                Read more
              </Link>
              <div className="flex gap-1.5 text-white text-sm">
                <div className="flex items-center transition-[background-color,color] duration-500 bg-transparent border border-red-500 text-red-500 dark:text-white dark:bg-red-600 rounded-lg p-1">
                  <svg
                    viewBox="0 0 128 128"
                    className="transition-[fill] duration-500 fill-red-500 dark:fill-white w-4 h-4 mr-1"
                  >
                    <path d="M52.864 64h23.28L63.769 38.123zM63.81 1.026L4.553 21.88l9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635L63.81 1.026zM48.044 75l-7.265 18.176-13.581.056 36.608-81.079-.07-.153h-.064l.001-.133.063.133h.141l.123-.274V12h-.124l-.069.153 38.189 81.417-13.074-.287-8.042-18.58-17.173.082"></path>
                  </svg>
                  <span>Angular</span>
                </div>
                <div className="flex items-center transition-[background-color,color] duration-500 bg-transparent border border-sky-500 text-sky-500 dark:text-white dark:bg-sky-500 rounded-lg p-1">
                  <span>Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
