import { ComponentProps, FC } from "react";
import { classNames } from "../utils/class-names";
import styles from "./Navbar.module.css";

export const Nav: FC<ComponentProps<"nav">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <nav className={classNames(styles.nav, className)} {...props}>
      {children}
    </nav>
  );
};
