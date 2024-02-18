import React from "react"
import "./lamp.css"
export const Lamp = () => {
  return (
    <section className="app-lamp">
      <input type="checkbox" className="switch" />
      <div className="lamp">
        <div className="light"></div>
      </div>
    </section>
  )
}
