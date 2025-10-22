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
    // {
    //   text: "考场注意事项",
    //   icon: "book",
    //   prefix: "caution/",
    //   link: "caution/",
    //   children: "structure",
    //   collapsible: true,
    // },
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
