import { NavLink } from "../nav-link";

type NavMenuProps = React.HTMLAttributes<HTMLElement>;

export const NavMenu = ({ className = "", ...props }: NavMenuProps) => {
  return (
    <nav
      className={`flex items-center space-x-4 lg:space-x-12 ${className}`}
      {...props}
    >
      <NavLink href={"/#top"}>Início</NavLink>
      <NavLink href={"/#quem-somos"}>Quem somos</NavLink>
      <NavLink href={"/#catalago"}>Catálago</NavLink>
      <NavLink href={"/#equipe"}>Equipe</NavLink>
    </nav>
  );
};
