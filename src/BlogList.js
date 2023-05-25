import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <span>{title}</span>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            {/* <button onClick={() => handelDelete(blog.id)}>Delete Blog</button> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
