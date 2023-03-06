import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="transition-[background-color] duration-500 bg-slate-100 dark:bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
