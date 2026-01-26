import { useState } from "react";

export default function Navbar() {
  const navLinks = [
    { label: "How it works", href: "#how-it-works" },
    { label: "About us", href: "#about" },
    { label: "Contact us", href: "#contact" },
  ];

  const [open, setOpen] = useState<boolean>(false);

  return (
    <header>
      <nav></nav>
    </header>
  );
}
