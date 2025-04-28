import React, { useState, useEffect } from "react";

function Comments() {
  // ug: Initial comments is undefined, so .map throws error.
  const [comments, setComments] = useState();

  // ans
  //   const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <h1>Comments</h1>
      {comments.map((comment) => (
        <p key={comment.id}>
          {comment.id} - {comment.name}
        </p>
      ))}
    </div>
  );
}

export default Comments;
