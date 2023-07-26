import { ComponentProps, FC } from "react";
import { classNames } from "../utils/class-names";
import styles from "./Figure.module.css";

export const Figure: FC<ComponentProps<"figure">> = ({
  className,
  children,
  ...props
}) => {
  return (
    <figure className={classNames(styles.figure, className)} {...props}>
      {children}
    </figure>
  );
};
