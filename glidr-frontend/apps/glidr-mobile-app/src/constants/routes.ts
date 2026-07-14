// const Routes = {
//   Splash: "/",
//   Welcome: "/welcome",
//   Login: "/login",
//   Register: "/register",
//   ForgotPassword: "/forgot-password",
//   OTP: "/otp",

//   Home: "/(tabs)/home",
// };

// export default Routes;


import type { Href } from "expo-router";

const Routes = {
  Splash: "/" as Href,
  Onboarding: "/onboarding" as Href,

  Welcome: "/welcome" as Href,
  
  Login: "/login" as Href,
  Register: "/register" as Href,
  Terms: "/terms" as Href,
  OTP: "/otp" as Href,

  ForgotPassword: "/forgot-password" as Href,

  Home: "/(tabs)/index" as Href,
};

export default Routes;
