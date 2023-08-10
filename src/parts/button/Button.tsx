import { ComponentProps } from "react";
import { combineClassNames } from "@/helpers/combine-class-names";
import styles from "@/parts/button/Button.module.scss";

type Variant = "blue" | "default" | "green" | "transparent_blue";
type ButtonProps = ComponentProps<"button"> & { variant?: Variant };

export const Button = ({ className, type = "button", variant = "default", ...rest }: ButtonProps) => (
  <button {...rest} className={combineClassNames(styles[`button_${variant}`], className)} type={type} />
);
