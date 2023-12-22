import "./globals.css";
import NavBar from "@/components/NavBar";

export const metadata = {
  title: "Fun with Flags",
  description: "Made by Thu Smiley @Naughty Cat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg" href="/images/favicon.svg" />
        <meta property="og:image" content="/images/desktop-preview.jpg" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,300;6..12,600;6..12,800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
