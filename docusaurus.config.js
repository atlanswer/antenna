// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const TITLE = "Antenna";
const GH_URL = "https://github.com/atlanswer/antenna";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: TITLE,
  tagline: "Thinking about antennas",
  url: "https://antenna.waferlab.dev",
  baseUrl: "/",
  organizationName: "atlanswer", // Usually your GitHub org/user name.
  projectName: TITLE.toLowerCase(), // Usually your repo name.
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onDuplicateRoutes: "warn",
  favicon: "img/favicon.ico",
  staticDirectories: ["static"],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: `${GH_URL}/edit/main`,
          remarkPlugins: [],
          rehypePlugins: [],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: `${GH_URL}/edit/main`,
          remarkPlugins: [],
          rehypePlugins: [],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: "https://unpkg.com/katex@0.16.0/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC",
      crossorigin: "anonymous",
    },
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        indexPages: true,
        hashed: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: TITLE,
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            label: "Tutorial",
            position: "left",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: GH_URL,
            label: "GitHub",
            position: "right",
          },
          { type: "search", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "EM Journey",
                href: "https://gitee.com/kai-lu/EM_Journey",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: GH_URL,
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} Atlanswer. Built with Docusaurus.`,
      },
      prism: {},
    }),

  plugins: [],
};

async function createConfig() {
  const math = require("remark-math");
  const katex = (await import("rehype-katex")).default;
  const mdxMermaid = [
    require("mdx-mermaid"),
    { theme: { light: "base", dark: "forest" } },
  ];
  const lightCodeTheme = require("prism-react-renderer/themes/github");
  const darkCodeTheme = require("prism-react-renderer/themes/dracula");
  config.presets[0][1].docs.remarkPlugins.push(math, mdxMermaid);
  config.presets[0][1].docs.rehypePlugins.push(katex);
  config.presets[0][1].blog.remarkPlugins.push(math, mdxMermaid);
  config.presets[0][1].blog.rehypePlugins.push(katex); // @ts-expect-error
  config.themeConfig.prism.theme = lightCodeTheme; // @ts-expect-error
  config.themeConfig.prism.darkTheme = darkCodeTheme;
  return config;
}

module.exports = createConfig;
