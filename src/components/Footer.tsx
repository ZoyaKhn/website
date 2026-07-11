import { personal } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-rose-light/30 bg-cream px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-navy/40 md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
        <p className="font-serif text-navy/30">Designed with care.</p>
      </div>
    </footer>
  );
}
