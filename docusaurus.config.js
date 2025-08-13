// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
//const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const darkCodeTheme = require('prism-react-renderer/themes/palenight');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yves Fiumefreddo',
  // tagline: 'Senior Software Architect | C++ Open Source Developer | Creator of the xtd Framework | Passionate about new technologies and computer science.',
  favicon: 'pictures/yfi.ico',

  // Set the production url of your site here
  url: 'https://yfiumefreddo.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yfiumefreddo', // Usually your GitHub org/user name.
  projectName: 'yfiumefreddo', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: false,
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Yves Fiumefreddo',
        logo: {
          alt: 'My Site Logo',
          src: 'pictures/yfi.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'experiences/README',
            position: 'left',
            label: 'Experiences',
          },
          {
            type: 'doc',
            docId: 'education/README',
            position: 'left',
            label: 'Education',
          },
          {
            type: 'doc',
            docId: 'skills/README',
            position: 'left',
            label: 'Skills',
          },
          {
            href: 'https://github.com/yfiumefreddo',
            label: 'Sources',
            position: 'left',
          },
          {
            href: 'https://sourceforge.net/u/gammasoft71/profile/',
            label: 'Projects',
            position: 'left',
          },
          {
            href: 'mailto:y.fiumefreddo@gmail.com',
            label: 'Contact',
            position: 'left',
          },
          {
            href: 'https://gammasoft71.github.io/',
            label: 'Gammasoft',
            position: 'left',
            target: '_self',
            rel: null,
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            html: `
              <div style="display: flex; justify-content: center; gap: 1rem; align-items: center;">
                <a href="https://yfiumefreddo.github.io"><img src="https://yfiumefreddo.github.io/pictures/yfi32.png" alt="yfi" /></a>
                <a href="https://github.com/yfiumefreddo"><img src="https://yfiumefreddo.github.io/pictures/github32.png" alt="GitHub" /></a>
                <a href="https://sourceforge.net/u/gammasoft71/profile"><img src="https://yfiumefreddo.github.io/pictures/sourceforge32.png" alt="SourceForge" /></a>
                <a href="https://www.facebook.com/yves.fiumefreddo/"><img src="https://yfiumefreddo.github.io/pictures/facebook32.png" alt="Facebook" /></a>
                <a href="https://x.com/yfi1971"><img src="https://yfiumefreddo.github.io/pictures/x32.png" alt="Twitter" /></a>
                <a href="https://www.linkedin.com/in/yves-fiumefreddo-0430441a/"><img src="https://yfiumefreddo.github.io/pictures/linkedin32.png" alt="LinkedIn" /></a>
                <a href="https://discordapp.com/users/gammasoft#9288"><img src="https://yfiumefreddo.github.io/pictures/discord32.png" alt="Discord" /></a>
                <a href="mailto:y.fiumefreddo@gmail.com"><img src="https://yfiumefreddo.github.io/pictures/mail32.png" alt="Mail" /></a>
              </div>
            `,
          },
        ],
        copyright: `© ${new Date().getFullYear()} Gammasoft.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
