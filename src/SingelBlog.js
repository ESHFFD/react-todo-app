import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const SingelBlog = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:7000/blogs/" + id);
  const navigate = useNavigate();

  const handelDelete = () => {
    fetch(
      "http://localhost:7000/blogs/" + blog.id /*or we can use {id} as param */,
      {
        method: "DELETE",
      }
    ).then(navigate("/"));
  };

  return (
    <div className="singel-blog">
      {isPending && <div>Is Loading ....</div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handelDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default SingelBlog;
