import { useSelector } from "react-redux";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";

export default function AdminRoute({ children }) {
  const { role } = useSelector((state) => state);

  if (role !== "admin") {
    return <HomePage></HomePage>;
  }
  return <AdminPage></AdminPage>;
}
