![The AI Alliance banner](https://the-ai-alliance.github.io/assets/images/ai-alliance-logo-horiz-pos-blue-cmyk-trans.png)

# README for The AI Alliance Glossary

[Published Documentation](https://the-ai-alliance.github.io/glossary/)

This repo contains the GitHub Pages documentation for the AI Alliance Glossary, a shared resource across all our websites, providing definitions for common terms.

See the [repo README](https://github.com/The-AI-Alliance/glossary/) for additional details.

The rest of this README provides information for contributors, developers, and users of this project repo.

## Adding or Editing Terms

All the terms are defined in a giant YAML block at the beginning of `docs/index.markdown`. If you edit the terms defined there or add new ones, here are a few tips to work around problems parsing the definitions as YAML (also in a comment in that file). 

You may see obscure messages at the Jekyll console like this:

```text
YAML Exception reading /Users/deanwampler/ibm/ai-alliance/repos/others/glossary-git/docs/index4.markdown: (<unknown>): did not find expected key while parsing a block mapping at line 338 column 5
```

It could be one of several things on line 338 (in this example):

* A `:` was used at the end of a sentence (especially at the end of a paragraph). Sometimes the colons are interpreted as key-value YAML delimiters (but not always). Use `&colon;` instead (or a period).
* You have some leading tabs in front of the key-value definitions. It may actually be that you can use tabs _or_ spaces, not mix them, but I replace all tabs with spaces.
* You used a Markdown-style block quote (e.g., `> foo\n> bar`) in a definition. Replace it with an HTML blockquote. See an example in the definitions in the file.

Other tips:

* Put **two** blank lines between paragraphs. If you put just one, they will be joined into one paragraph when parsed by Jekyll's Liquid and/or Markdown engines. (I tried code hacks to fix this when loading, but nothing worked.) The single blank lines _between_ the YAML blocks (e.g., the one between "Vibe Engineering" and "Zero-Shot Prompt" at the end of the YAML block in `docs/index.markdown`) are purely for legibility and have no affect on rendering.

## Getting Involved

We welcome contributions as PRs. Please see our [Alliance community repo](https://github.com/The-AI-Alliance/community/) for general information about contributing to any of our projects. This section provides some specific details you need to know.

In particular, see the AI Alliance [CONTRIBUTING](https://github.com/The-AI-Alliance/community/blob/main/CONTRIBUTING.md) instructions. You will need to agree with the AI Alliance [Code of Conduct](https://github.com/The-AI-Alliance/community/blob/main/CODE_OF_CONDUCT.md).

The glossary is licensed under the [Creative Commons Attribution 4.0 International](https://github.com/The-AI-Alliance/community/blob/main/LICENSE.CC-BY-4.0) (which is also in this repo, [LICENSE.CC-BY-4.0](LICENSE.CC-BY-4.0)).


### Quick Tip - View the Website Locally

See [GITHUB_PAGES.md](GITHUB_PAGES.md) for information on viewing the site locally with `jekyll`.

### We use the "Developer Certificate of Origin" (DCO).

> [!WARNING]
> Before you make any git commits with changes, understand what's required for DCO.

See the Alliance contributing guide [section on DCO](https://github.com/The-AI-Alliance/community/blob/main/CONTRIBUTING.md#developer-certificate-of-origin) for details. In practical terms, supporting this requirement means you must use the `-s` flag with your `git commit` commands.

## About the GitHub Pages Website Published from this Repo

The website is published using [GitHub Pages](https://pages.github.com/), where the pages are written in Markdown and served using [Jekyll](https://github.com/jekyll/jekyll). We use the [Just the Docs](https://just-the-docs.github.io/just-the-docs/) Jekyll theme.

See [GITHUB_PAGES.md](GITHUB_PAGES.md) for more information.

> [!NOTE]
> As described above, all documentation is licensed under Creative Commons Attribution 4.0 International. See [LICENSE.CC-BY-4.0](LICENSE.CC-BY-4.0)).
