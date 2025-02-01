import { Provider } from "@/components/ui/provider"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <Provider>
    <GoogleOAuthProvider clientId="674643545508-i0q2hia662m05m234oscgbf58ocg80mf.apps.googleusercontent.com"> <App />
    </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>,
)