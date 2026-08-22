import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-hairline/80 bg-gradient-to-r from-navy-700/[0.04] via-white/80 to-orange-500/[0.05] backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 lg:px-10">
        <Link to="/" className="flex items-center shrink-0" aria-label="Naralith Studio, home">
          <img src="/imgs/logo.png" alt="Naralith Studio" className="h-9 w-auto sm:h-10" />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <NavLink
                to={link.href}
                end={link.href === "/"}
                className={({ isActive }) =>
                  `group relative inline-block py-1 text-sm font-medium transition-colors ${isActive ? "text-navy-900 font-semibold" : "text-body hover:text-navy-900"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {/* Active Route = scale-x-100 (Always Visible), Inactive = hover scale */}
                    <span
                      className={`absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-navy-700 to-orange-500 transition-transform duration-200 ease-out ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                    />
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="btn-primary rounded-full px-5 py-2 text-sm font-semibold"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-hairline md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1">
            <span className={`h-0.5 w-4 bg-ink transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`h-0.5 w-4 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-4 bg-ink transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="border-t border-hairline bg-white/95 px-6 py-4 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.href}
                  end={link.href === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors ${isActive ? "text-orange-600 font-bold" : "text-body hover:text-orange-600"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary inline-block rounded-full px-5 py-2.5 text-center text-sm font-semibold w-full"
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}