# Book Builder
This is a light framework to help you get started writing a book, and is designed to let you version control your documents.

It is a *free* and open source book writing tool.

We supply the basic book anatomy, means to convert your pages into a book, and a method to convert it into publisher friendly formats.

# Why write books in Markdown and then store in Git?
* Markdown is easy to transpile into many types of publisher compatible formats
* Easy to update
* Easy to "branch off" into new ideas
* Easy to see the changes in each version
* Easy to collaborate with others
* Backups are distributed
* If you are using a private Git repo, you can easily have secure access to your work across the internet

# Anatomy of a Book Builder book

## Chapters
* [chapter.01](text/chapter.01.md)
* chapter.02
* chapter.03
* ... etc.

## Appendices
* [appendix.a](appendices/appendix.a.md)
* appendix.b
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
* [special-thanks](sections/special-thanks.md)

## Platforms / Technologies
* [Node.js](http://nodejs.org/) - TBD
* [Markdown](https://en.wikipedia.org/wiki/Markdown)

Dependencies: Node.js 10+, npm, grunt
>       $ npm install grunt-cli -g

Install dependencies
>       $ npm install

Build
>       $ grunt

## Current Release v1.0.0

### Roadmap

v1.0.0
* basic book anatomy

v1.1.0
* script to generate a basic book from the markdown files

v1.1.0
* script to generate a table of contents from the markdown files

v1.2.0
* script to generate an index and glossary from the markdown files

v2.0.0
* script to generate an approved book format for the final document
