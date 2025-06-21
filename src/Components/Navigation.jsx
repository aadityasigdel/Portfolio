import { useState, useEffect } from "react";

export default function TopNav() {
  const navItems = [
    { id: "about", label: "About" },
    { id: "skills-projects", label: "Skills & Projects" },
    { id: "certificates-references", label: "Certificates & References" },
  ];

  const [active, setActive] = useState("about");

  useEffect(() => {
    function onScroll() {
      const scrollPos = window.scrollY + 140;
      let current = active;

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= scrollPos) {
          current = item.id;
        }
      }
      setActive(current);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [active]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100 border-b border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap sm:flex-nowrap justify-center sm:justify-center items-center gap-4 sm:gap-10 overflow-x-auto py-3 text-sm sm:text-base font-semibold text-gray-700 no-scrollbar">
          {navItems.map(({ id, label }) => (
            <li key={id} className="relative group shrink-0">
              <a
                href={`#${id}`}
                className={`inline-block px-2 sm:px-3 py-2 transition-colors duration-300 rounded-sm
                  ${
                    active === id
                      ? "text-indigo-600 font-bold"
                      : "hover:text-indigo-500"
                  }
                `}
              >
                {label}
              </a>
              <span
                className={`absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600
                  transition-transform duration-300 origin-left
                  ${active === id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                `}
              />
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
