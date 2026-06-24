import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://156349.xyz/",
    title: "远在天边,好东西在眼前.",
    description: "远在天边,好东西在眼前.",
    author: "远远",
    profile: "https://156349.xyz",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/satnaing/astro-paper/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://156349.xyz/" },
    { name: "x",        url: "https://156349.xyz/" },
    { name: "linkedin", url: "https://156349.xyz/" },
    { name: "mail",     url: "https://156349.xyz/" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://156349.xyz/" },
    { name: "facebook", url: "https://156349.xyz/" },
    { name: "x",        url: "https://156349.xyz/" },
    { name: "telegram", url: "https://156349.xyz/" },
    { name: "pinterest", url: "https://156349.xyz/" },
    { name: "mail",     url: "https://156349.xyz/" },
  ],
});
