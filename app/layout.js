import { Lexend } from "next/font/google";
import "./globals.css";

const inter = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "Cyparta App",
  description: "Cyparta App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
