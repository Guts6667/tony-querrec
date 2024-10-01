import "./globals.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export const metadata = {
  title: "Tony Querrec - Photographe à Paris",
  description:
    "Tony Querrec, Photographe à Paris, spécialisé en image d’Œuvres d’Art, Portraits et Événements. Je suis photographe professionnel, spécialisé dans la capture d’œuvres d’art, d’expositions et de portraits. Je propose également un service de photographie évènementielle (portrait et reportage corporate, conférence). Contactez-moi pour discuter de votre projet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body className={"py-[48px] px-[24px] sm:px-[48px]"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
