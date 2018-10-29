const json = require("../pages.json");
const footer = require("../footer-nav.json");

module.exports = {
  title: "StarlingX",
  description: "StarlingX",
  themeConfig: {
    docsDir: "site",
    nav: json.nav,
    footer: footer
  }
};
