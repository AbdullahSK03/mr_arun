import "./globals.css";

export const metadata = {
  title: "Mr. Arun",
};

import NavHeader from "@/components/NavHeader";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-slate-200"}>
        <NavHeader
          className={`bg-slate-300 font-extrabold text-3xl text text-center p-3`}
        />
        {children}
      </body>
    </html>
  );
}
