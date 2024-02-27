import { StrictMode } from "react";
import App from "./App";

// Here will be logic for rendering the app
export function Root(){
  return (
    <StrictMode>
      <App />
    </StrictMode>
  )
}