import React from "react";
import LoginForm from "./LoginForm";
import LoginHooks from "./LoginHooks";
import Login from "./Login";
import SignUp from "./SignUp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { motion } from "framer-motion";

import { AnimatePresence } from "framer-motion";
import LoginCodePen from "./LoginCodePen";

function App() {
  const location = useLocation();
  return (
    <>
      {/* <LoginHooks /> */}
      {/* <LoginCodePen /> */}
      {/* <LoginForm /> */}
      <Login />
      {/* <SignUp /> */}
    </>
    // <motion.div>
    //   <AnimatePresence>
    //     <Switch location={location} key={location.key}>
    //       <Route path="/login">
    //         <Login />
    //       </Route>
    //       <Route path="/signup">
    //         <SignUp />
    //       </Route>
    //       <Route path="/">
    //         <LoginHooks />
    //       </Route>
    //     </Switch>
    //   </AnimatePresence>
    // </motion.div>
  );
}

export default App;
