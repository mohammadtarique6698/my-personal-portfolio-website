import "./globals.css";
import { DM_Sans, Syne } from "next/font/google";
import Providers from "./provider";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Mohammad Tarique | Portfolio",
  description:
    "M365 Administrator & React.js Developer — building scalable business solutions and beautiful web interfaces.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <body style={{ fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// import "./globals.css";
// import { Inter } from "next/font/google";
// import Providers from "./provider";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Mohammad Tarique's Personal Portfolio Website",
//   description: "A Responsive Website designed in Next.js, Tailwind CSS & React",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Providers>
//           {children}
//         </Providers>
//       </body>
//     </html>
//   );
// }

