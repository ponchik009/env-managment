import React from "react";

import { TextVariantType } from "types";

interface ITypogaphyProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariantType;
}

function wrapWithTag(
  variant: TextVariantType,
  children: React.ReactNode,
  props: React.HTMLAttributes<HTMLElement>
): JSX.Element {
  switch (variant) {
    case "h1":
      return <h1 {...props}>{children}</h1>;
    case "h2":
      return <h2 {...props}>{children}</h2>;
    case "h3":
      return <h3 {...props}>{children}</h3>;
    case "h4":
      return <h4 {...props}>{children}</h4>;
    case "h5":
      return <h5 {...props}>{children}</h5>;
    case "h6":
      return <h6 {...props}>{children}</h6>;
    case "p":
      return <p {...props}>{children}</p>;
    case "span":
      return <span {...props}>{children}</span>;
    default:
      return <p {...props}>{children}</p>;
  }
}

export const Typography: React.FC<ITypogaphyProps> = ({
  variant = "p",
  children,
  ...rest
}) => {
  return wrapWithTag(variant, children, rest);
};
