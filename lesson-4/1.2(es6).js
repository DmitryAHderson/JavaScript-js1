'use strict'


class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

const newPost = new Post('Dmitry', 'Lorem', new Date());
console.log(newPost);
newPost.edit('Lorem Lorem');
console.log(newPost);

class postAttached extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    highlightedText() {
        this.highlighted = true;
    }
}

const attached = new postAttached('Vera', 'LoremLorem', new Date());
console.log(attached);
attached.highlightedText();
attached.edit('Lorem Lorem');
console.log(attached);