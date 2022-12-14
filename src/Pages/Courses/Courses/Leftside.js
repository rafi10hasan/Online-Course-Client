import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftside = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://course-hub-platform-server.vercel.app/courses-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h4>All Category: {categories.length}</h4>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link className="underline-hide" to={`/courses/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Leftside;
