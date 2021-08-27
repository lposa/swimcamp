import React, { useState, useEffect } from "react";
import MediaCard from "./MediaCard";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Blog() {
  const [blog, setBlog] = useState([]);

  const blogPosts = [
    {
      title: "First Camp",
      text: "Proleter has organised its first ever Swim Camp, with Leonard Posa, Nikola Acin, Vladimir Petar and Marko Vujin serving as coaches",
      img: "../images/grbVeliki.jpg",
    },
    {
      title: "Second Camp",
      text: "Proleter will be organizing a second Swim Camp. The dates will be announced shortly.",
      img: "../images/grbVeliki.jpg",
    },
  ];

  useEffect(() => {
    blogPosts.map((post) => {
      setBlog(post);
    });
  }, []);

  return (
    <>
      <Navbar />

      <h1
        className="font-weight-light"
        style={{ textAlign: "center", textDecoration: "underline" }}
      >
        BLOG
      </h1>
      <div className="container py-3">
        <div className="row">
          {blogPosts.map((blogs) => {
            return (
              <div className="col">
                <MediaCard
                  blogTitle={blogs.title}
                  blogText={blogs.text}
                  blogPic={blogs.img}
                />
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Blog;
