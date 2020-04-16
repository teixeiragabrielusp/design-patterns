const Invoker = require("./Invoker");
const Db = require("./Database");
const Post = require("./Post");
const Update = require("./Update");
const View = require("./View");

const Blog = new Invoker(Db);

Blog.execute(
    new Post("My first post", "Hello everyone, this is my first post!")
);

Blog.execute(
    new Post("My second post", "Hello everyone, this is my second post!")
);

// Blog.undo();
Blog.execute(new Update("My first post", "Just update my first post!"));
Blog.undo();
Blog.execute(new View());