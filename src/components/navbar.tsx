import { useState } from 'react';

interface NavItem {
  name: string;
  subnav: string[];
}

interface navbarProps {
  title: string;
  navItems: NavItem[];
}

const Navbar = ({ title, navItems }: navbarProps) => {
  const [openSubNav, setOpenSubNav] = useState<string | null>(null);

  // const navCheckOpen = (item) => {
  //   setOpenSubNav(openSubNav === item.name ? null : item.name)
  // }

  return (
    <nav>
      <h1>{title}</h1>
      <ul>
        {navItems.map((item) => (
          <li key={item.name}>
            <button
              onClick={() =>
                setOpenSubNav(openSubNav === item.name ? null : item.name)
              }
            >
              {item.name}
            </button>
            {openSubNav === item.name && item.subnav && (
              <ul>
                {item.subnav.map((subItem) => (
                  <li key={subItem}>
                    <a href="">{subItem}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
