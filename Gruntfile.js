module.exports = function(grunt) {
    var pkg = grunt.file.readJSON('package.json');
    require('load-grunt-tasks')(grunt);

    function getBookConfig() {
        var files = {files: {}};
        var bookName = 'dist/' + pkg.bookTitle + '.md';
        files.files[bookName] = [
            'sections/title.md',
            // Copyright and ISBN page
            'sections/other-books.md',
            'sections/dedication.md',
            'sections/acknowledgements.md',
            // table of contents
            // charts/maps
            'sections/foreword.md',
            'sections/preface.md',
            'text/chapter.*.md',
            'sections/afterword.md',
            'appendices/appendix.*.md',
            'sections/glossary.md',
            'sections/index.md',
            'sections/biography.md',
            'sections/special-thanks.md'
        ];

        return files;
    }

    grunt.initConfig({
        concat: {
            markdownBook: getBookConfig()
        }
    });

    grunt.registerTask('default', ['concat']);


};
