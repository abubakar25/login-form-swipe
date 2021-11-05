// import React from "react";
// import GoogleIcon from "@mui/icons-material/Google";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import Button from "@mui/material/Button";
// function LoginHooks(props) {
//   return (
//     <>
//       <div
//         style={{
//           background: "#f6f5f7",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//           fontFamily: '"Montserrat", sans-serif',
//           height: "100vh",
//           margin: "-20px 0 50px",
//         }}
//       >
//         <div
//           style={{
//             backgroundColor: "#ffffff",
//             borderRadius: "1px",
//             boxShadow:
//               "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
//             position: "relative",
//             overflow: "hidden",
//             width: "768px",
//             maxWidth: "100%",
//             minHeight: "480px",

//             marginTop: "30px",
//           }}
//           // id="container"
//         >
//           <div
//             style={{
//               position: "absolute",
//               top: "0",
//               height: "100%",
//               transition: "all 0.6s ease-in-out",
//               left: "0",
//               width: "50%",
//               // opacity: "0",
//               zIndex: "1",
//             }}
//           >
//             <form
//               style={{
//                 backgroundColor: "#ffffff",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexDirection: "column",
//                 padding: "0 50px",
//                 height: "100%",
//                 textAlign: "center",
//               }}
//             >
//               <h1
//                 style={{
//                   color: "#24C6DC",
//                   fontWeight: "bold",
//                   margin: "0",
//                 }}
//               >
//                 Sign Up
//               </h1>
//               <div
//                 style={{
//                   margin: "20px 0",
//                 }}
//               >
//                 <a
//                   href="#88"
//                   style={{
//                     border: "1px solid #dddddd",
//                     borderRadius: "50%",
//                     display: "inline-flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     margin: "0 5px",
//                     height: "40px",
//                     width: "40px",
//                     color: "#000",
//                   }}
//                 >
//                   <i class="fab fa-facebook-f">
//                     <FacebookIcon />
//                   </i>
//                 </a>
//                 <a
//                   href="#66"
//                   style={{
//                     border: "1px solid #dddddd",
//                     borderRadius: "50%",
//                     display: "inline-flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     margin: "0 5px",
//                     height: "40px",
//                     width: "40px",
//                     color: "#000",
//                   }}
//                 >
//                   <i class="fab fa-google-plus-g">
//                     <GoogleIcon />
//                   </i>
//                 </a>
//                 <a
//                   href="#66"
//                   // class="social"
//                   style={{
//                     border: "1px solid #dddddd",
//                     borderRadius: "50%",
//                     display: "inline-flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     margin: "0 5px",
//                     height: "40px",
//                     width: "40px",
//                     color: "#000",
//                   }}
//                 >
//                   <i class="fab fa-linkedin-in">
//                     <LinkedInIcon />
//                   </i>
//                 </a>
//               </div>
//               <span
//                 style={{
//                   fontSize: "12px",
//                 }}
//               >
//                 or use your email for registration
//               </span>
//               <input
//                 type="text"
//                 placeholder="Name"
//                 style={{
//                   backgroundColor: "#eee",
//                   border: "none",
//                   padding: "12px 15px",
//                   margin: "8px 0",
//                   width: "100%",
//                 }}
//               />
//               <input
//                 style={{
//                   backgroundColor: "#eee",
//                   border: "none",
//                   padding: "12px 15px",
//                   margin: "8px 0",
//                   width: "100%",
//                 }}
//                 type="email"
//                 placeholder="Email"
//               />
//               <input
//                 style={{
//                   backgroundColor: "#eee",
//                   border: "none",
//                   padding: "12px 15px",
//                   margin: "8px 0",
//                   width: "100%",
//                 }}
//                 type="password"
//                 placeholder="Password"
//               />
//               <button
//                 style={{
//                   borderRadius: "20px",
//                   border: "1px solid #ff4b2b",
//                   backgroundColor: "#ff4b2b",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "bold",
//                   padding: "12px 45px",
//                   letterSpacing: "1px",
//                   textTransform: "uppercase",
//                   transition: "transform 80ms ease-in",
//                 }}
//               >
//                 Sign Up
//               </button>
//             </form>
//           </div>

//           <div
//             style={{
//               position: "absolute",
//               top: "0",
//               height: "100%",
//               transition: "all 0.6s ease-in-out",
//               left: "0",
//               width: "50%",
//               zIndex: "2",
//             }}
//           >
//             <form
//               action="#66"
//               style={{
//                 backgroundColor: "#ffffff",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 flexDirection: "column",
//                 padding: "0 50px",
//                 height: "100%",
//                 textAlign: "center",
//               }}
//             >
//               <h1
//                 style={{
//                   color: "#24C6DC",
//                   fontWeight: "bold",
//                   margin: "0",
//                   // fontSize: "40px",
//                   padding: "10px",
//                 }}
//               >
//                 Sign In
//               </h1>
//               <div class="social-container">
//                 <a
//                   href="#66"
//                   // class="social"
//                   style={{
//                     border: "1px solid #dddddd",
//                     borderRadius: "50%",
//                     display: "inline-flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     margin: "0 5px",
//                     height: "40px",
//                     width: "40px",
//                     color: "#000",
//                   }}
//                 >
//                   <i class="fab fa-facebook-f">
//                     <FacebookIcon />
//                   </i>
//                 </a>
//                 <a
//                   href="#66"
//                   // class="social"
//                   style={{
//                     border: "1px solid #dddddd",
//                     borderRadius: "50%",
//                     display: "inline-flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     margin: "0 5px",
//                     height: "40px",
//                     width: "40px",
//                     color: "#000",
//                   }}
//                 >
//                   <i class="fab fa-google-plus-g">
//                     {" "}
//                     <GoogleIcon />
//                   </i>
//                 </a>
//                 <a
//                   href="#66"
//                   // class="social"
//                   style={{
//                     border: "1px solid #dddddd",
//                     borderRadius: "50%",
//                     display: "inline-flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     margin: "0 5px",
//                     height: "40px",
//                     width: "40px",
//                     color: "#000",
//                   }}
//                 >
//                   <i class="fab fa-linkedin-in">
//                     <LinkedInIcon />
//                   </i>
//                 </a>
//               </div>
//               <span
//                 style={{
//                   fontSize: "12px",
//                 }}
//               >
//                 or use your email account
//               </span>
//               <input
//                 style={{
//                   backgroundColor: "#eee",
//                   border: "none",
//                   padding: "12px 15px",
//                   margin: "8px 0",
//                   width: "100%",
//                 }}
//                 type="email"
//                 placeholder="Email"
//               />
//               <input
//                 style={{
//                   backgroundColor: "#eee",
//                   border: "none",
//                   padding: "12px 15px",
//                   margin: "8px 0",
//                   width: "100%",
//                 }}
//                 type="password"
//                 placeholder="Password"
//               />
//               <a
//                 href="#66"
//                 style={{
//                   color: "#514A9D",
//                   fontSize: "14px",
//                   textDecoration: "none",
//                   margin: "15px 0",
//                 }}
//               >
//                 Forgot your password?
//               </a>
//               <button
//                 style={{
//                   borderRadius: "20px",
//                   border: "1px solid #ff4b2b",
//                   backgroundColor: "#ff4b2b",
//                   color: "#ffffff",
//                   fontSize: "12px",
//                   fontWeight: "bold",
//                   padding: "12px 45px",
//                   letterSpacing: "1px",
//                   textTransform: "uppercase",
//                   transition: "transform 80ms ease-in",
//                 }}
//               >
//                 Sign In
//               </button>
//             </form>
//           </div>
//           <div
//             style={{
//               position: "absolute",
//               top: "0",
//               left: "50%",
//               width: "50%",
//               height: "100%",
//               overflow: "hidden",
//               transition: "transform 0.6s ease-in-out",
//               zIndex: "100",
//             }}
//           >
//             <div
//               // class="overlay"
//               style={{
//                 background: "#24C6DC  /* fallback for old browsers */",
//                 background:
//                   "-webkit-linear-gradient(to top, #514A9D, #24C6DC)  /* Chrome 10-25, Safari 5.1-6 */",
//                 background:
//                   "linear-gradient(to top, #514A9D, #24C6DC) /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */",
//                 backgroundRepeat: "no-repeat",
//                 backgroundSize: "cover",
//                 backgroundPosition: "0 0",
//                 color: "#ffffff",
//                 position: "relative",
//                 left: "-100%",
//                 height: "100%",
//                 width: "200%",
//                 transform: "translateX(0)",
//                 transition: "transform 0.6s ease-in-out",
//               }}
//             >
//               <div
//                 style={{
//                   position: "absolute",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   flexDirection: "column",
//                   padding: "0 40px",
//                   textAlign: "center",
//                   top: "0",
//                   height: "100%",
//                   width: "50%",
//                   transform: "translateX(0)",
//                   transition: "transform 0.6s ease-in-out",
//                   transform: "translateX(-20%)",
//                 }}
//               >
//                 <h1
//                   style={{
//                     color: "white",
//                   }}
//                 >
//                   Welcome Back!
//                 </h1>
//                 <p
//                   style={{
//                     fontSize: "14px",
//                     fontWeight: "100",
//                     lineHeight: "20px",
//                     letterSpacing: "0.5px",
//                     margin: "20px 0 30px",
//                   }}
//                 >
//                   To stay connected with us please login with your personal info
//                 </p>
//                 <button
//                   style={{
//                     borderRadius: "20px",
//                     border: "1px solid #ff4b2b",
//                     backgroundColor: "#ff4b2b",
//                     color: "#ffffff",
//                     fontSize: "12px",
//                     fontWeight: "bold",
//                     padding: "12px 45px",
//                     letterSpacing: "1px",
//                     textTransform: "uppercase",
//                     transition: "transform 80ms ease-in",
//                     //   backgroundColor: "transparent",
//                     //   borderColor: "#ffffff",
//                   }}
//                 >
//                   Sign In
//                 </button>
//               </div>
//               <div
//                 style={{
//                   position: "absolute",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   flexDirection: "column",
//                   padding: "0 40px",
//                   textAlign: "center",
//                   top: "0",
//                   height: "100%",
//                   width: "50%",
//                   transform: "translateX(0)",
//                   transition: "transform 0.6s ease-in-out",
//                   right: "0",
//                   transform: "translateX(0)",
//                 }}
//               >
//                 <h1
//                   style={{
//                     color: "#24C6DC",
//                     fontWeight: "bold",
//                     margin: "0",
//                   }}
//                 >
//                   Hello, Friend!
//                 </h1>
//                 <p
//                   style={{
//                     fontSize: "14px",
//                     fontWeight: "100",
//                     lineHeight: "20px",
//                     letterSpacing: "0.5px",
//                     margin: "20px 0 0 50px",
//                   }}
//                 >
//                   Enter personal details and start your journey with us{" "}
//                 </p>
//                 <button
//                   style={{
//                     marginTop: "20px",
//                     borderRadius: "20px",
//                     border: "1px solid #ff4b2b",
//                     //   backgroundColor: "#ff4b2b",
//                     color: "#ffffff",
//                     fontSize: "12px",
//                     fontWeight: "bold",
//                     padding: "12px 45px",
//                     letterSpacing: "1px",
//                     textTransform: "uppercase",
//                     transition: "transform 80ms ease-in",
//                     backgroundColor: "transparent",
//                     borderColor: "#ffffff",
//                   }}
//                 >
//                   Sign Up
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default LoginHooks;
