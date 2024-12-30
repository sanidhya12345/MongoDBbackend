/** @format */

import mongoose from "mongoose";
import Blog from "./models/Blog.js";

//build a connection with mongosb atlas

mongoose.connect(
  "mongodb+srv://varshneysanidhya:hCAJrdjzpLE3dMte@cluster0.txeiz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

// const article = new Blog({
//   title: "Awesome Post!",
//   slug: "awesome-post",
//   published: true,
//   content: "This is the best post ever",
//   tags: ["featured", "announcement"],
// });

// await article.save();

// const firstArticle = await Blog.findOne({});
// console.log(firstArticle);

const article = await Blog.create({
  title: "Awesome Post!",
  slug: "awesome-post",
  published: true,
  content: "This is the best post ever",
  tags: ["featured", "announcement"],
});
console.log(article);
