import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import ButtonWA from "../components/button-wa";
import { Helmet } from "react-helmet";

function BlogDetail() {
  const location = useLocation();
  const params = useParams();

  const postId = new URLSearchParams(location.search).get("id");

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
    <div style={{padding: 20}}>
      {/* <Seo
       title={dataBlog?.title}
       description={dataBlog?.description}
       url={`https://master--precious-dasik-288c64.netlify.app/blog-detail/${dataBlog?.id}`}
       image={dataBlog?.url}
       /> */}
      <Helmet htmlAttributess>
          <title>{dataBlog?.title}</title>
          <meta property="og:title" content={dataBlog?.title} />
          <meta property="og:description" content={dataBlog?.description} />
          <meta property="og:url" content={`https://master--precious-dasik-288c64.netlify.app/blog-detail/${dataBlog?.id}`} />
          <meta property="og:image" content={`https://fastly.picsum.photos/id/173/240/328.jpg?hmac=O1XZmVXsDpHymNfs7JUKj0GLMJEFT5ITzsoItrucg8E`} />
     </Helmet>

      <div>
        <img src={`${dataBlog?.url}`} width={100} height={100} alt="test" />
        <p>{dataBlog?.title}</p>
        <p>{dataBlog?.description}</p>
        <ButtonWA blogs={dataBlog} />
      </div>
    </div>
  );
}

export default BlogDetail;
