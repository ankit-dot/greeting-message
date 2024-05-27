import { Html, Head, Main, NextScript } from "next/document";
import { Toaster } from "sonner";
// import { Toaster } from "@/components/ui/toaster"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <Toaster/>
        <NextScript />
        <Toaster/>
      </body>
    </Html>
  );
}
