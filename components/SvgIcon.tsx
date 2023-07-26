import { ComponentProps, FC } from "react";

export const SvgIcon: FC<ComponentProps<"img">> = ({
  src,
  alt,
}) => {
  return (
    <img src={src} alt={alt} />
  );
};
