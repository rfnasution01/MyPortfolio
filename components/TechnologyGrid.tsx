import { FC } from "react";
import { classNames } from "../utils/class-names";
import styles from "./TechnologyGrid.module.css";
import { TechnologyGridItem } from "./TechnologyGridItem";

type TechnologyGridProps = {
  className: string;
};
export const TechnologyGrid: FC<TechnologyGridProps> = ({
  className,
}) => {
  return (
    <div className={classNames(styles.technologyGrid, className)}>
      <h1>Technology</h1>
    </div>
  );
};
