import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAurtor] = useState("mario");
  const [isPending, setIsPednding] = useState(false);
  const navigate = useNavigate();

  const handelSubmit = (e) => {
    e.preventDefault();
    const blog = {
      title,
      body,
      author,
    };
    setIsPednding(true);
    fetch("http://localhost:7000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    })
      .then(() => {
        console.log("new blog added");
        setIsPednding(false);
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
        setIsPednding(false);
      });
  };
  return (
    <div className="create">
      <h2>Add new Blog</h2>
      <form onSubmit={handelSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          type="text"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAurtor(e.target.value)}>
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button>Adding Blog...</button>}
        {/* <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p> */}
      </form>
    </div>
  );
};

export default Create;
