'use strict'

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

const newPost = new Post('Dmitry', 'lorem', new Date());
console.log = newPost;
newPost.edit('lorem lorem lorem');
console.log = newPost;


function postAttached(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

postAttached.prototype = Object.create(Post.prototype);
postAttached.prototype.constructor = postAttached;

postAttached.prototype.HighlightedText = function () {
    this.highlighted = true;
}

const attached = new postAttached('Vera', 'loremLorem', new Date());
console.log(attached);
attached.HighlightedText();
attached.edit('Lorem Lorem');
console.log(attached);
