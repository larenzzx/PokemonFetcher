import React, { useState, useEffect } from "react";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res)
      .then((data) => {
        setPosts(data);
      });
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );


  //   ANSWER
  //   const [posts, setPosts] = useState([]);

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //       .then((res) => res.json())
  //       .then((data) => setPosts(data));
  //   }, []);

  //   return (
  //     <div>
  //       <h1>Posts</h1>
  //       {posts.map((post) => (
  //         <div className="px-12">
  //           <div className="border my-12" key={post.id}>
  //             <p>Title: {post.title}</p>
  //             <p>Body: {post.body}</p>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
}

export default PostList;
