import { useState } from "react";
import BlogList from "./BlogList";
const HomePage = () => {
  //   const [name, setName] = useState("Mario");
  //   const [age, setAge] = useState(15);
  const [blogs, setBlogs] = useState([
    { title: "First blog", author: "Author 1", id: 1 },
    { title: "Second blog", author: "Author 2", id: 2 },
    { title: "Third blog", author: "Author 3", id: 3 },
  ]);
  //   const handelClick = () => {
  //     setName("Ehsan");
  //     setAge(27);
  //   };
  //   const handelClickedAgain = (name) => {
  //     console.log("hello" + name);
  //   };
  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      {/* <p>
        {name} is {age} years old{" "}
      </p>
      <button onClick={handelClick}>click me</button> */}
      {/* <button onClick={() => handelClickedAgain("ehsan")}>
        click me again
      </button> */}
    </div>
  );
};

export default HomePage;
