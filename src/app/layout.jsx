import "./globals.css";

export const metadata = {
  title: "Mr. Arun",
};

import HeaderNav from "@/components/Navbar/HeaderNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`m-3 bg-gradient-to-t from-[#f5f5f5] to-[var(#f4f4f4)] h-screen`}>
        <HeaderNav className=" header-nav"/>
        {children}
      </body>
    </html>
  );
}
