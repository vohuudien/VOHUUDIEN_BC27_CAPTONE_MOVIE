import {lazy, Suspense} from "react"
import {Route, Routes} from "react-router-dom"
import CheckoutRoute from "routes/CheckoutRoute"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

// import Home from "./modules/Home/pages/Home";
// import Movie from "modules/Movie/pages/Movie";
// import Login from "modules/Authentication/pages/Login";
// import Register from "modules/Authentication/pages/Register";

const Home = lazy(()=> import("./modules/Home/pages/Home"))
const Movie = lazy(()=> import("modules/Movie/pages/Movie"))
const Login = lazy(()=> import("modules/Authentication/pages/Login"))
const Register = lazy(()=> import("modules/Authentication/pages/Register"))



function App() {
  return (
    <>
    <Suspense fallback={<h1>...Loading</h1>}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      {/* dynamic url */}
      <Route path="/movie/:movieId" element={<Movie/>}/>
      <Route path="checkout/:checkoutId" element={<CheckoutRoute><h1>Check Out Component</h1></CheckoutRoute>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </Suspense>
    </>
  );
}


export default App;
