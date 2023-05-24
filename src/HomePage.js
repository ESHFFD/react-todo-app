import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const HomePage = () => {
  //   const [name, setName] = useState("Mario");
  //   const [age, setAge] = useState(15);
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPednding] = useState(true);
  //   const handelClick = () => {
  //     setName("Ehsan");
  //     setAge(27);
  //   };
  //   const handelClickedAgain = (name) => {
  //     console.log("hello" + name);
  //   }

  // const handelDelete = (id) => {
  //   const newBlog = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlog);
  // };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setIsPednding(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {isPending && <h2>...Is Loading...</h2>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs!"
      /> */}
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
