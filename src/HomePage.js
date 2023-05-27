// import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const HomePage = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:7000/blogs");
  //   const [name, setName] = useState("Mario");
  //   const [age, setAge] = useState(15);

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

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>...Is Loading...</div>}
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
