'use client'
import './globals.css'
import '../../node_modules/semantic-ui-css/semantic.min.css';
import Footer from "./component/Footer";
import Top from "./component/Top";


export default function RootLayout({children}) {
  return (
    <div style={{ width: 1000, margin: "0 auto" }}>
      <Top />
      {/* <Component {...pageProps} /> */}

    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>{children}</body>
    </html>

      <Footer />
    </div>
  );
}
