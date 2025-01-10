import Image from "next/image";
import { Button } from "../components/ui/button";
import { FileUser } from "lucide-react";
import { Link } from "../components/ui/link";

export default function Home() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col">
      <main className="flex w-full flex-grow flex-col px-6 py-10">
        <div className="mb-24 flex flex-col justify-between gap-6 md:flex-row">
          <Image
            className="self-center object-cover md:order-2 md:self-auto"
            src="/me.jpeg"
            alt=""
            height="200"
            width="200"
          />
          <div className="flex max-w-md flex-col text-balance">
            <h1 className="text-2xl font-bold">Gonzalo González</h1>
            <h2 className="mb-3 text-lg text-muted-foreground">
              Senior Software Engineer
            </h2>
            <div className="flex flex-col items-start">
              <p>I&apos;m a developer from Costa Rica. 🇨🇷</p>
              <p className="mb-4">
                I like building simple, usable, delightful user experiences and
                tools, as well as writing code that&apos;s easy to understand
                and maintainable. 🛠️✨
              </p>
              <Button asChild>
                <a
                  href="https://docs.google.com/document/d/1Pej_WLKjUujAzbf0HdyEc_NgWYLlCNPv_2lEm-hb_yA/edit?tab=t.0"
                  target="_blank"
                >
                  <FileUser />
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
        <h3 className="mb-8 flex gap-3 text-xl font-bold">
          <div className="h-full w-1 bg-primary">&nbsp;</div>
          Personal projects
        </h3>
        <article className="grid grid-cols-1 gap-4 text-balance md:grid-cols-2">
          <section className="flex flex-col items-start">
            <h4 className="mb-2 font-semibold">🏦 Tasas CDPs Costa Rica</h4>
            <p className="mb-1.5 text-sm text-muted-foreground">
              A website that displays both current and historical certificates
              of deposit interest rates from various institutions in Costa Rica,
              all in one place.
            </p>
            <div className="flex gap-4">
              <Link
                className="text-sm"
                href="https://cdpscostarica.gggonzalo.com/"
                target="_blank"
              >
                Website
              </Link>
              <Link
                className="text-sm"
                href="https://github.com/gggonzalo/tasas-cdp-cr"
                target="_blank"
              >
                Source code
              </Link>
            </div>
          </section>
          <section className="flex flex-col items-start">
            <h4 className="mb-2 font-semibold">📈 Crypto alerts</h4>
            <p className="mb-1.5 text-sm text-muted-foreground">
              A web application that displays cryptocurrency charts and allows
              users to set price and indicator alerts. When alerts are
              triggered, users will receive push notifications.
            </p>
            <div className="flex gap-4">
              <Link
                className="text-sm"
                href="https://github.com/gggonzalo/trading-project"
                target="_blank"
              >
                Source code
              </Link>
            </div>
          </section>
        </article>
      </main>
      <footer className="mt-auto w-full border-t">
        <div className="flex flex-col justify-between gap-1 px-6 py-4 text-sm text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Gonzalo González</span>
          <div className="flex gap-2">
            <Link href="https://www.linkedin.com/in/gggonzalo" target="_blank">
              LinkedIn
            </Link>
            <Link href="https://github.com/gggonzalo" target="_blank">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
