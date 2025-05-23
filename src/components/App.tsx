import "../css/app.css";
import NavBar from "./layout/NavBar";
import Footer from "./layout/Footer";
import Home from "./pages/Guest/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Login from "./pages/Guest/Login";
import Register from "./pages/Guest/Register";
import About from "./pages/Guest/About";
import Dashboard from "./pages/User/Dashboard";
import { AuthProvider } from "../context/AuthContext";
import RequireAuth from "./RequireAuth";
import UserCategories from "./pages/User/UserCategories";
import UserItems from "./pages/User/UserItems";
import PersistLogin from "./PersistLogin";
import UserProfile from "./pages/User/UserProfile";
import { UserRedirect } from "./UserRedirect";

function App() {
  //maybe guest, user, admin should have a separate navbar in their respective routes
  //maybe make a layout element to add a container class for default main content styling
  return (
    <>
      <AuthProvider>
        <NavBar />
        <main id="main-content">
          <Routes>
            <Route element={<PersistLogin />}>
              <Route element={<UserRedirect />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>
              <Route element={<RequireAuth allowedRoles={["user"]} />}>
                <Route path="/dashboard" index element={<Dashboard />} />
                <Route path="/categories" element={<UserCategories />} />
                <Route path="/items" element={<UserItems />} />
                <Route path="/profile" element={<UserProfile />} />
              </Route>

              <Route element={<RequireAuth allowedRoles={["admin"]} />}>
                <Route path="admin" index element={<Dashboard />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
