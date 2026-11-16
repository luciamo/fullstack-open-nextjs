import type { Metadata } from "next";
import "./globals.css";
import SessionProvider from "./components/SessionProvider";
import NavBar from "./components/NavBar";
import { NotificationProvider } from "./components/NotificationContext";
import Notification from "./components/Notification";

export const metadata: Metadata = {
  title: "Blog List",
  description: "Full Stack Open - Blog List exercise",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <SessionProvider>
          <NotificationProvider>
            <NavBar />
            <Notification />
            {children}
          </NotificationProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
