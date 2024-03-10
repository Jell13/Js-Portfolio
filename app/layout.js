import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-light dark:bg-dark`}>
        <div className="h-screen w-screen text-dark dark:bg-dark dark:text-light">
            <div className="h-24">
              <Navbar/>
            </div>
            <div className="h-[calc(100vh-6rem)]">
              {children}
            </div> 
        </div>   
      </body>
    </html>
  );
}
