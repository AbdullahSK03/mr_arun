import "./globals.css";

export const metadata = {
  title: "Mr. Arun",
};

import HeaderNav from "@/components/Navbar/HeaderNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={""}>
        <HeaderNav />
        {children}
      </body>
    </html>
  );
}
