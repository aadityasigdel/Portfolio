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
  }, [active, navItems]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-100 border-b border-gray-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <ul className="flex space-x-10 overflow-x-auto whitespace-nowrap font-semibold text-gray-700 text-sm md:text-base py-4 no-scrollbar justify-center">
          {navItems.map(({ id, label }) => (
            <li key={id} className="relative group">
              <a
                href={`#${id}`}
                className={`inline-block px-2 md:px-3 py-2 transition-colors duration-300 rounded-sm
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
