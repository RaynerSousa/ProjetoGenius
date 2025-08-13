import Image from "next/image";
interface NavBarProps {
  links: {
    label: string;
    href: string;
  }[];
}

export default function NavBar({ links }: NavBarProps) {
  return (
    <nav className="fixed w-full bg-amber-50 shadow-sm">
      <div className="lg:mx-15 mb:mx-20">
        <div className="flex sm:justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/genius.png" alt="logo genius" width={80} height={80} />
            <span className="hidden sm:inline text-lg">Genius</span>
          </div>

          {/* Links */}
          <div className="flex space-x-16">
            {links.map((link, indice) => (
              <a
                key={indice}
                href={link.href}
                className=" text-lg font-medium hover:text-indigo-600"
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
