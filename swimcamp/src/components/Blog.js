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
      img: "https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.6435-9/235764233_4554359181254586_6677528694205136459_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=f-LYPZVC0DcAX-DhIAE&_nc_ht=scontent.fbeg5-1.fna&oh=ff4424447e4d8174b63bc5f1f05a6103&oe=6157CB92",
    },
    {
      title: "Second Camp",
      text: "Proleter will be organizing a second Swim Camp. The dates will be announced shortly.",
      img: "https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.18169-9/19731992_1609721875718346_7174057455303577350_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=5MZGySQ9jjgAX9Gn1wi&_nc_ht=scontent.fbeg5-1.fna&oh=31f3f102b46d67cc28282d113e44acb4&oe=6157E661",
    },
  ];

  useEffect(() => {
    blogPosts.map((post) => {
      setBlog(post);
      return blog;
    });
  });

  return (
    <>
      <Navbar />

      <div className="container py-3 team-container">
        <div className="row blog-mobile">
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
