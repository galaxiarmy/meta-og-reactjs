const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const PORT = process.env.PORT || 3000;
const indexPath = path.resolve(__dirname, "..", "build", "index.html");

// static resources should just be served as they are
app.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);
// here we serve the index.html page
app.get("/blog-detail", async (req, res, next) => {

  const postId = req.query.id;

  console.log('test req query', req)

  console.log('test postId', postId)

  const post = await fetch(
    `https://api.slingacademy.com/v1/sample-data/photos/${postId}`
  )
    .then((response) => response.json())
    .then((data) => {

      return data.photo;
    })
    .catch((error) => console.error("Error:", error));


  fs.readFile(indexPath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("Error during file reading", err);
      return res.status(404).end();
    }
    // get post info


    console.log("test post external", post);
    // const post = getPostById(postId);
    // if(!post) return res.status(404).send("Post not found");

    // inject meta tags
    htmlData = htmlData
      .replace("<title>React App</title>", `<title>${post?.title}</title>`)
      .replace("__META_OG_TITLE__", post?.title)
      .replace("__META_OG_DESCRIPTION__", post?.description)
      .replace("__META_OG_URL__", `https://api.slingacademy.com/public/sample-photos/${post?.id}.jpeg`)
      .replace("__META_DESCRIPTION__", post?.description)
      .replace("__META_OG_IMAGE__", post?.url);
    return res.send(htmlData);
  });
});

app.get("/blog", async (_, res, next) => {

    const post = await fetch(
        `https://api.slingacademy.com/v1/sample-data/photos/2`
      )
        .then((response) => response.json())
        .then((data) => {    
          return data.photo;
        })
        .catch((error) => console.error("Error:", error));
  
    fs.readFile(indexPath, "utf8", (err, htmlData) => {
      if (err) {
        console.error("Error during file reading", err);
        return res.status(404).end();
      }
      // get post info  
  
      // const post = getPostById(postId);
      // if(!post) return res.status(404).send("Post not found");
  
      // inject meta tags
      htmlData = htmlData
      .replace("<title>React App</title>", `<title>Test Blog Hanif</title>`)
      .replace("__META_OG_TITLE__", post?.title)
      .replace("__META_OG_DESCRIPTION__", post?.description)
      .replace("__META_DESCRIPTION__", post?.description)
      .replace("__META_OG_IMAGE__", post?.url);
      return res.send(htmlData);
    });
  });
// listening...
app.listen(PORT, (error) => {
  if (error) {
    return console.log("Error during app startup", error);
  }
});
