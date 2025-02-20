import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/shared/navigation/Navigation";
import Footer from "@/components/shared/footer/Footer";
import Providers from '@/components/Providers';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: 'swap',
});

export const metadata = {
  title: "Diamond Youth Football League",
  description: "Welcome to the Diamond Youth Football League. Elevating youth football.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased flex flex-col min-h-screen`}>
        <Providers>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
          <Toaster 
            position="top-right"
            toastOptions={{
              className: 'font-sans text-sm',
              success: {
                iconTheme: {
                  primary: '#FF4500',
                  secondary: 'white',
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
