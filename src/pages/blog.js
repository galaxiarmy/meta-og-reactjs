
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [dataBlog, setDataBlog] = useState(null);

  const getDataBlogDetail = async () => {
    const baseURL = `https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20`;

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
    <div style={{ margin: 20 }}>
      <h1>Blog</h1>

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
               <Link to={{pathname: `/blog-detail`, 
              search: `?id=${capsule.id}`,
            }}>
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
