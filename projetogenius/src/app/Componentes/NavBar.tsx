import Image from "next/image";
interface NavBarProps {
  links: {
    label: string;
    href: string;
  }[];
}

export default function NavBar({ links }: NavBarProps) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-amber-50 shadow-sm z-50">
      <div className="container mx-auto">
        <div className="flex sm:justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Image src="/genius.png" alt="logo genius" width={80} height={80} />
            <span className="text-lg">Genius</span>
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            {links.map((link, indice) => (
              <a
                key={indice}
                href={link.href}
                className=" text-lg
                                    font-medium
                                    hover:text-indigo-600"
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
