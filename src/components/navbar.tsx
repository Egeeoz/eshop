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

  const handleNavState = (name: string) => {
    setOpenSubNav(openSubNav === name ? null : name);
  };

  return (
    <nav>
      <h1>{title}</h1>
      <ul>
        {navItems.map((item) => (
          <li>
            <button onClick={() => handleNavState(item.name)}>
              {item.name}
            </button>
            {openSubNav === item.name && (
              <ul>
                {item.subnav.map((subItem) => (
                  <>
                    <br />
                    {/*This br adds extra margin between subnav buttons and nav buttons, fix this later  */}
                    <button>{subItem}</button>
                  </>
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
