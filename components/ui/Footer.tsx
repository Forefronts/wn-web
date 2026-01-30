export default function Footer() {
  return (
    <footer className="text-xs text-white/40 max-w-6xl px-6 md:text-left text-center   ">
      <span>© {new Date().getFullYear()} whosnext? — All rights reserved</span>
      <span className="hidden sm:inline"> </span>
    </footer>
  );
}
