import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h2>404 Not Found</h2>
      <Link to="/main">Back to main page</Link>
      <Link to="/login">Back to login page</Link>
    </div>
  );
}
