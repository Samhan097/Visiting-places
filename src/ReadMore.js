import { React, useState } from "react";

function ReadMore({ children }) {
  const [isReadMore, setReadMore] = useState(false);
  const toggleBtn = () => {
    setReadMore((prev) => !prev);
  };
  return (
    <div>
      {isReadMore ? children : children.substr(0, 200)}
      <button className="btn-read-more" onClick={toggleBtn}>
        {isReadMore ? "Read Less" : "...Read More"}
      </button>
    </div>
  );
}

export default ReadMore;
