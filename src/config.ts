export const SITE = {
  website: "https://h-lucia-multiblog.vercel.app/", // replace this with your deployed domain
  author: "Lucia H",
  profile: "", // 没有就先写成 "" 或你的其它主页
  desc: "Journaling and documenting myself. Thoughts and ideas about life, language learning and AI learning",
  title: "FindingNorthStar",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: false,
    text: "Edit page",
    url: "",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // 中国大陆推荐用这个
} as const;
