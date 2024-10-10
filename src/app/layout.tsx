import type { Metadata } from "next";
import localFont from "next/font/local";
import '@/app/globals.css';
import Link from "next/link";
import Header from "../components/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Blogpost's",
  description: "Blogpost's app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <footer>
          <nav className="flex flex-col justify-center items-center gap-[25px] min-h-[100px] py-[25px] px-[25px] bg-gray text-center md:flex-row md:justify-around md:text-start">
            <ul>
              <h3 className="text-lg mb-[5px]"><b>Categorías</b></h3>
              <li><Link href="">Programación Web</Link></li>
              <li><Link href="">Finanzas</Link></li>
              <li><Link href="">Inversiones</Link></li>
            </ul>
            <ul>
              <h3 className="text-lg mb-[5px]"><b>Contacto</b></h3>
              <li><Link href="">Soporte</Link></li>
              <li><Link href="">Correo</Link></li>
              <ul className="flex justify-center items-center gap-[5px]">
                <li><Link href=""><img src="/brand-facebook.svg" alt="Facebook" /></Link></li>
                <li><Link href=""><img src="/brand-instagram.svg" alt="Instagram" /></Link></li>
                <li><Link href=""><img src="/brand-youtube.svg" alt="Youtube" /></Link></li>
              </ul>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
