import { useState } from 'react';
import '../styling/navbar.css';
import Button from './button';

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
            <Button onClick={() => handleNavState(item.name)}>
              {item.name}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
