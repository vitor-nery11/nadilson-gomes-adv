import { Poppins } from "next/font/google";
import "./globals.css";
import Preloader from "../components/Preloader";

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: "Nadilson Gomes | Advocacia Estratégica",
  description: "Direito com estratégia, experiência e atendimento próximo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
