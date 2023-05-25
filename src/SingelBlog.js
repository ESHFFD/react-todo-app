import { useParams } from "react-router-dom";

const SingelBlog = () => {
  const { id } = useParams();
  return (
    <div className="singel-blog">
      <h2>About blog - {id} </h2>
    </div>
  );
};

export default SingelBlog;
