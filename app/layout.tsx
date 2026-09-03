import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "./components/SessionProvider";
import NavBar from "./components/NavBar";

export const metadata: Metadata = {
  title: "Blog List",
  description: "Full Stack Open - Blog List exercise",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <NavBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
