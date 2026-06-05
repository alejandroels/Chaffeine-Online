export type SocialLink = {
  href: string;
  label: string;
  network: "instagram" | "facebook" | "whatsapp";
};

export const socialLinks: SocialLink[] = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    network: "instagram",
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    network: "facebook",
  },
  {
    href: "https://wa.me/",
    label: "WhatsApp",
    network: "whatsapp",
  },
];
