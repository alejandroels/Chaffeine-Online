export const GALLERY_BG = "#f2effa";

export type GalleryCircleTheme = {
  main: string;
  accent: string;
  subtle: string;
};

export const GALLERY_CIRCLE_THEMES = {
  smoothies: {
    main: "#7A5C96",
    accent: "#9B7BB5",
    subtle: "#C4A8D8",
  },
  detox: {
    main: "#6B7B52",
    accent: "#8A9A6E",
    subtle: "#A8B88E",
  },
  ensaladas: {
    main: "#6B7B52",
    accent: "#8A9A6E",
    subtle: "#A8B88E",
  },
} satisfies Record<string, GalleryCircleTheme>;
