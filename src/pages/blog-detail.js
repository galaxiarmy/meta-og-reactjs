import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useParams } from "react-router-dom";

function BlogDetail() {
  const location = useLocation();
  const params = useParams();

  const postId = new URLSearchParams(location.search).get("id");

  console.log('test params', params)

  console.log('use params', params)
  console.log("test location state", location);

  const [dataBlog, setDataBlog] = useState(null);

  const getDataBlogDetail = async (id) => {
    const baseURL = `https://api.slingacademy.com/v1/sample-data/photos/${id}`;

    try {
      const response = await axios.get(baseURL);

      if (response.status === 200) {
        setDataBlog(response?.data?.photo);
      } else {
        setDataBlog(null);
      }
    } catch (error) {
      setDataBlog(null);
    }
  };

  useEffect(() => {
    getDataBlogDetail(params.id);
  }, []);

  return (
    <div>
      <Helmet htmlAttributess>
          <title>{dataBlog?.title}</title>
          <meta proerty="og:title" content={dataBlog?.title} />
          <meta property="og:description" content={dataBlog?.description} />
          <meta property="og:url" content={dataBlog?.url} />
          <meta property="og:image" content={dataBlog?.url} />
     </Helmet>

      <div>
        <img src={`${dataBlog?.url}`} width={100} height={100} alt="test" />
        <p>{dataBlog?.title}</p>
        <p>{dataBlog?.description}</p>
      </div>
    </div>
  );
}

export default BlogDetail;
