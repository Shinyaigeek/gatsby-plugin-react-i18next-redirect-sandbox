module.exports = {
  pathPrefix: "gatsby-plugin-react-i18next-redirect-sandbox",
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/locales`,
        name: "locale",
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: "locale",
        languages: ["ja", "en"],
        defaultLanguage: "ja",
        siteUrl: "https://pages.github.com/Shinyaigeek/gatsby-plugin-react-i18next-redirect-sandbox",
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false
        },
        pages: [
          {
            matchPath: "/:lang/",
            getLanguageFromPath: true,
          },
          {
            matchPath: "/:lang/hoge/",
            getLanguageFromPath: true,
          },
          {
            matchPath: "/:lang/bar/huga/",
            getLanguageFromPath: true,
          },
        ],
      },
    },
  ],
};
