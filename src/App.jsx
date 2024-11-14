//2nd Main File

//import useSelector to know the isLogin state
import { useSelector } from "react-redux";

import Counter from "./components/Counter";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";

const App = () => {
  const isLogin = useSelector((state) => state.authentication.isLogin);
  return (
    <>
      <Navbar />
      {!isLogin && <Welcome />}
      {isLogin && <Counter />}
    </>
  );
};

export default App;
