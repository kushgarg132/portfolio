export const EMAIL = "gargkush2003@gmail.com";
export const RESUME = "/KushGarg_Resume.pdf";

export const socials = [
  { label: "GitHub", href: "https://github.com/kushgarg132" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kush-garg-809617208/" },
  { label: "Email", href: `mailto:${EMAIL}` },
];

/** Where a link goes, shown before you click: "https://github.com/x/" -> "github.com/x" */
export const dest = (url: string) => url.replace(/^(https?:\/\/|mailto:)/, "").replace(/\/$/, "");
