import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Blog = () => {
  const [dataBlog, setDataBlog] = useState(null);

  const getDataBlogDetail = async () => {
    const baseURL = `https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=40`;

    try {
      const response = await axios.get(baseURL);

      if (response.status === 200) {
        setDataBlog(response?.data?.photos);
      } else {
        setDataBlog(null);
      }
    } catch (error) {
      setDataBlog(null);
    }
  };

  useEffect(() => {
    getDataBlogDetail();
  }, []);

  return (
    <div style={{ padding: 20 }}>
        <Helmet htmlAttributess>
          <title>Blog Detail</title>
          <meta property="og:title" content="Blog Detail Title" />
          <meta property="og:description" content="Blog Detail Description" />
          <meta property="og:url" content={"https://master--precious-dasik-288c64.netlify.app/blog"} />
          <meta property="og:image" content={"https://api.slingacademy.com/public/sample-photos/6.jpeg"} />
        </Helmet>
        {/* <Seo 
          title={"Blog Detail Title"}
          description={"Blog Detail Description"}
          url={"https://master--precious-dasik-288c64.netlify.app/blog"}
          image={"https://api.slingacademy.com/public/sample-photos/6.jpeg"}
        /> */}

      <h1>Blog Helmet Normalize</h1>

      {dataBlog ? (
        <ul>
          {dataBlog.map((capsule, index) => (
            <div style={{ marginTop: 10 }} key={capsule.id}>
              <img
                alt={capsule.id}
                src={capsule.url}
                width={100}
                height={100}
              />
              <Link to={{ pathname: `/blog-detail/${capsule.id}` }}>
                <p style={{ fontWeight: "bold" }}>
                  {index + 1}. {capsule.title} (Click Details)
                </p>
              </Link>
              <p>{capsule.description}</p>
            </div>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Blog;
