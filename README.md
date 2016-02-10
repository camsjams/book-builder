# Book Builder
This is a lightweight tool to help you get started writing a book, and is designed to let you version control your documents.

It is a *free* and open source book writing tool.

**We** supply the basic book anatomy, means to convert your pages into a book, and a method to convert it into publisher friendly formats.

**You** supply the awesome book content and git repository - if you need help with this, check out the [wiki](https://github.com/camsjams/book-builder/wiki).

# Why write books in Markdown?
* Markdown is easy to transpile into many types of publisher compatible formats
* Markdown is easy to update and understand
* Easy to see the changes in each version
* Format not tied to any one particular software

# Why store book drafts in Git?
* Easy to update
* Easy to "branch off" into new ideas
* Easy to collaborate with others
* Backups are distributed
* Easy to see the changes in each version
* If you are using a private Git repo, you can easily have secure access to your work across the internet

# Anatomy of a Book Builder book

## Chapters
* [chapter.01](text/chapter.01.md)
* [chapter.02](text/chapter.02.md)
* chapter.03
* ... etc.

## Appendices
* [appendix.a](appendices/appendix.a.md)
* [appendix.b](appendices/appendix.b.md)
* appendix.c
* ... etc.

## Sections
* [acknowledgements](sections/acknowledgements.md)
* [afterword](sections/afterword.md)
* [bibliography](sections/bibliography.md)
* [biography](sections/biography.md)
* [dedication](sections/dedication.md)
* [foreword](sections/foreword.md)
* [glossary](sections/glossary.md)
* [index](sections/index.md)
* [preface](sections/preface.md)
* [other-books](sections/other-books.md)
* [special-thanks](sections/special-thanks.md)
* [title](sections/title.md)

## Book Builder setup
* Fork or `git clone` the book builder repo
* update the [package.json](package.json) to use your repo names
* update the [package.json:bookTitle](package.json#L3) to the name of your book

Dependencies: Node.js 10+, npm, grunt
>       $ npm install grunt-cli -g

Install dependencies
>       $ npm install

Build a book
>       $ grunt

## Platforms / Technologies
* [Node.js](http://nodejs.org/)
* [Grunt](http://gruntjs.com/)
* [Markdown](https://en.wikipedia.org/wiki/Markdown)

## Current Release v1.1.2

### Roadmap

v1.0.0 :white_check_mark:
* basic book anatomy

v1.1.0 :white_check_mark:
* script to generate a basic book from the markdown files

v1.2.0
* add ability to show page numbers on each page

v1.3.0
* generate a table of contents from the markdown files

v1.4.0
* add support for charts, maps, image files

v1.5.0
* assist in creation of the index page numbers by scanning the markdown files

v1.6.0
* add ability to show header and footer on each page

v1.7.0
* add support for Markdown styling via CSS or something similar

v2.0.0
* generate into book containers for the final document
 * epub
 * kindle/html
 * word doc

v2.1.0+
 * generate into additional file formats for the final document
