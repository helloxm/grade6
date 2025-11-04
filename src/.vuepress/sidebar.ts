import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/english/": [
    {
      text: "单词过关",
      icon: "folder",
      prefix: "dictionary/",
      link: "dictionary/",
      children: "structure",
      expanded: true,
    },
  ],
  "/math/": [
    {
      text: "错题集",
      icon: "folder",
      prefix: "errorfixed/",
      link: "errorfixed/",
      children: "structure",
      expanded: true,
    },
  ],
  // "/other/": [
  //   {
  //     text: "其他",
  //     icon: "folder",
  //     children: "structure",
  //     collapsible: true,
  //   },
  // ],
});
