export type SocialLink = {
  href: string;
  label: string;
  network: "instagram" | "facebook" | "whatsapp";
  iconSrc: string;
};

export const socialLinks: SocialLink[] = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    network: "instagram",
    iconSrc: "/Images/social/instagram.png",
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    network: "facebook",
    iconSrc: "/Images/social/facebook.png",
  },
  {
    href: "https://wa.me/",
    label: "WhatsApp",
    network: "whatsapp",
    iconSrc: "/Images/social/whatsapp.png",
  },
];
