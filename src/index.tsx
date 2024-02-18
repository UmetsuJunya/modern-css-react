import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MenuIndicator from "./pages/menu-indicator/MenuIndicator"
import { AddTag } from "./pages/add-tag/AddTag"
import { Lamp } from "./pages/lamp/Lamp"
import { BoxAnimation } from "./pages/box-animation/BoxAnimation"
import { Dropdown } from "./pages/dropdown/Dropdown"

library.add(fas)

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/menu-indicator" element={<MenuIndicator />} />
        <Route path="/add-tag" element={<AddTag />} />
        <Route path="/lamp" element={<Lamp />} />
        <Route path="/box-animation" element={<BoxAnimation />} />
        <Route path="/dropdown" element={<Dropdown />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
