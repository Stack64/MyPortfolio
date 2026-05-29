import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohd Sohail Khan | Backend Engineer",
  description: "Portfolio of Mohd Sohail Khan, a Backend Engineer building scalable Spring Boot microservices, Kafka-driven event systems, and low-latency REST APIs.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23000000'/><text x='50' y='55' font-family='Arial, sans-serif' font-weight='bold' font-size='45' text-anchor='middle' dominant-baseline='central'><tspan fill='%23ffffff'>S</tspan><tspan fill='%2310B981'>K</tspan><tspan fill='%23ffffff'>.</tspan></text></svg>",
        type: "image/svg+xml",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="antialiased bg-black text-white"
      >
        {children}
      </body>
    </html>
  );
}
