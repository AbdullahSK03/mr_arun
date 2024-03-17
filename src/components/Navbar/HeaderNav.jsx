import React from "react";
import Link from "next/link";

const HeaderNav = (props) => {
  return (
    <nav className={props.className}>
      <ul className="flex ">
        <li className="m-2 hover:bg-color-[var(--color-primary)]">
          <Link href="#home">Home</Link>
        </li>
        <li className="m-2 hover:bg-color-[var(--color-primary)]">
          <Link href="#about">About</Link>
        </li>
        <li className="m-2 hover:bg-color-[var(--color-primary)]">
          <Link href="#enroll">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
