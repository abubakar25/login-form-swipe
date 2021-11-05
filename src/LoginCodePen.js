// import React from "react";
// import "./LoginCodePen.css";

// function LoginCodePen(props) {
//   const container = React.createRef();
//   function handleSignUp() {
//     container.current.classList.add("right-panel-active");
//   }
//   function handleSignIn() {
//     container.current.classList.remove("right-panel-active");
//   }
//   return (
//     <div>
//       <div className="container" id="container" ref={container}>
//         <div className="form-container sign-up-container">
//           <form action="#3">
//             <h1>Sign Up</h1>
//             <div className="social-container">
//               <a href="#3" className="social">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="#3" className="social">
//                 <i className="fab fa-google-plus-g"></i>
//               </a>
//               <a href="#3" className="social">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//             <span>or use your email for registration</span>
//             <input type="text" placeholder="Name" />
//             <input type="email" placeholder="Email" />
//             <input type="password" placeholder="Password" />
//             <button>Sign Up</button>
//           </form>
//         </div>
//         <div className="form-container sign-in-container">
//           <form action="#">
//             <h1>Sign In</h1>
//             <div className="social-container">
//               <a href="#3" className="social">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="#3" className="social">
//                 <i className="fab fa-google-plus-g"></i>
//               </a>
//               <a href="#3" className="social">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//             <span>or use your email account</span>
//             <input type="email" placeholder="Email" />
//             <input type="password" placeholder="Password" />
//             <a href="#3">Forgot your password?</a>
//             <button>Sign In</button>
//           </form>
//         </div>
//         <div className="overlay-container">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">
//               <h1>Welcome Back!</h1>
//               <p>
//                 To stay connected with us please login with your personal info
//               </p>
//               <button className="ghost" id="SignIn" onClick={handleSignIn}>
//                 Sign In
//               </button>
//             </div>
//             <div className="overlay-panel overlay-right">
//               <h1>Hello, Friend!</h1>
//               <p>Enter your personal details and start your journey with us </p>
//               <button className="ghost" id="SignUp" onClick={handleSignUp}>
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div id="info">
//         Design inspired by{" "}
//         <a href="https://dribbble.com/shots/5311359-Diprella-Login">
//           Diprella by SELECTO{" "}
//         </a>
//       </div>
//     </div>
//   );
// }

// export default LoginCodePen;
