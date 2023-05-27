import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Opps!</h2>
      <h2>this page not found</h2>
      <Link to={"/"}>Go to home page</Link>
    </div>
  );
};

export default NotFound;
