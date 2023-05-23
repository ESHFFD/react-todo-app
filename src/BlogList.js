const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <span>{title}</span>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>{blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
