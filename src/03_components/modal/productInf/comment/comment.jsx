import React from "react";
import "./comment.scss"



function Comment(props) {
  console.log(props.el);
  return (
    <div className="comment">
      <div className="commentColumn">
        <div className="commentRow">
          <div className="commentImg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgxfDAMqK3mhyikTk6uhY8Bn3HdpjkMvuzLQ&usqp=CAU" alt="ss" />
          </div>
        </div>
        <div className="commentRow">
        <div className="commentName">{props.inf.email}</div>
        <div className="commentBody">{props.inf.body}</div>
        </div>
      </div>
    </div>
  );
}

export default Comment;