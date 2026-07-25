import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://156349.xyz/",
    title: "远在天边,好东西在眼前.",
    description: "记录 AI 实践、思考与创作的个人主页。",
    author: "远远",
    profile: "https://156349.xyz",
    ogImage: "default-og.jpg",
    lang: "zh-cn",
    timezone: "Asia/Dubai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
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
