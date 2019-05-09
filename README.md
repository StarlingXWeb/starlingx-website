# StarlingX website

This is the public repo to mantain the StarlingX website at [starlingx.io](https://starlingx.io).

## Overview

Starlingx.io is based on Vuepress + Netlify CMS.

Vuepress is a minimalistic Vue-powered static site generator. Netlify CMS is unique type of CMS that edits site content as static markdown files via git, but using a friendly and familair CMS interface. (CMS users do not have to use or understand git directly.) Bulma is used for CSS, extended with Buefy for lightweight UI components.

- [Vuepress](https://vuepress.vuejs.org/)
- [Netlify CMS](https://www.netlifycms.org)
- [Bulma](https://bulma.io)
- [Buefy](https://buefy.github.io)

To request changes, [submit an issue](https://github.com/StarlingXWeb/starlingx-website/issues) or [submit a pull request](https://github.com/StarlingXWeb/starlingx-website/pulls).

If you need to escalate a pull request, email [jimmy@openstack.org](mailto:jimmy@openstack.org) or [ildiko@openstack.org](mailto:ildiko@openstack.org).

## Install locally

### Prerequesites

Node

### Install vuepress globally

```
$ npm install -g vuepress
```

### Install npm packages

```
$ npm install
```

### Access locally

```
$ vuepress dev site
```

## File guidance

- Most pages can be found in `/site/` under their corresponding folder name. You can make changes to the `.md` file using markdown or html. The frontmatter must be YAML.
- Home page content can be found in `/index.md`, with the majority being editable in the frontmatter.
- Blog posts can be created by adding a markdown file to `/site/blog/`. Don't forget the frontmatter, including the title, author, date and category. For now, authors must match filenames under `/site/authors/`. For example `author: first-last` assumiing the filename is `first-last.md`.
- HTML for each templates can be found in `/site/.vuepress/components/` as `.vue` files.
- All CSS and Sass files are in `/site/.vuepress/theme/`
- Public images should be placed in `/site/.vuepress/public/images/` and can be referenced as `/images/filename`
- Header and footer navigation are stored in JSON. Header nav can be found at `/site/pages.json` and footer nav is at `/site/footer-nav.json`.
- We are storing public facing documents such as collateral and slide templates in `/site/.vuepress/public/` in the `collateral` and `templates` folders, respectively.
