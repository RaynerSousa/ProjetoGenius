import Image from "next/image";
interface NavBarProps {
  links: {
    label: string;
    href: string;
  }[];
}

export default function NavBar({ links }: NavBarProps) {
  return (
    <nav className="fixed w-full bg-amber-50 shadow-sm  z-50">
      <div>
        <div className="flex sm:justify-between justify-center h-16 items-center">
          {/* Logo */}
          <div className="flex  items-center">
            <Image src="/genius.png" alt="logo genius" width={70} height={50} />
            <span className="hidden sm:inline text-lg">Genius</span>
          </div>

          {/* LINKS */}
          <div className="flex">
            {links.map((link, indice) => (
              <a
                key={indice}
                href={link.href}
                className="md:m-10 m-2 hover:text-indigo-600"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
