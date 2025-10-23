import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import { watermarkPlugin } from "@vuepress/plugin-watermark";
import { shikiPlugin } from "@vuepress/plugin-shiki";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/grade6/",

  lang: "zh-CN",
  title: "兴隆实小",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
