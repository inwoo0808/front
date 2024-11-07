import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "views/Authentication/SignIn";
import SignUp from "views/Authentication/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/auth">
        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
