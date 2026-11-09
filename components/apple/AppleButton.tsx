import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
}

interface LinkProps extends BaseProps, Omit<ComponentProps<typeof Link>, "children" | "className"> {
  href: string;
}

interface ButtonProps extends BaseProps, Omit<ComponentProps<"button">, "children" | "className"> {
  href?: undefined;
}

const variantClass: Record<Variant, string> = {
  primary: "apl-btn apl-btn-primary",
  secondary: "apl-btn apl-btn-secondary",
  ghost: "apl-btn apl-btn-ghost",
};

const sizeClass: Record<Size, string> = {
  sm: "apl-btn-sm",
  md: "",
  lg: "apl-btn-lg",
};

function compose(variant: Variant, size: Size, extra?: string) {
  return [variantClass[variant], sizeClass[size], extra].filter(Boolean).join(" ");
}

export function AppleButton(props: LinkProps | ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const cls = compose(variant, size, className);

  if ("href" in props && props.href) {
    const { href, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props;
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...rest } = props as ButtonProps;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
