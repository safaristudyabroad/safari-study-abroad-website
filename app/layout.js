import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppWidget from "./components/WhatsappWidget";
export const metadata = {
  title: "Safari Study Abroad",
  description:
    "Quality European education at Mediterranean beaches, recognized degrees, and living costs 60% lower than Western Europe and North America. Start your journey in as little as 2 weeks.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <WhatsAppWidget />
      </body>
    </html>
  );
}
