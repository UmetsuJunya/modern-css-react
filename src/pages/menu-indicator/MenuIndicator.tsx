/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  faCamera,
  faComment,
  faGear,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { HTMLElementEvent } from "../../types"
import "./menu-indicator.css"

function MainIndicator() {
  const handleItemClick = (event: HTMLElementEvent<HTMLInputElement>) => {
    const $list = document.querySelectorAll("li")
    $list.forEach(($li) => {
      $li.classList.remove("active")
    })
    const target = event.currentTarget as HTMLLIElement
    target.classList.add("active")
  }
  useEffect(() => {
    const $list = document.querySelectorAll("li")

    $list.forEach(($li) => {
      $li.addEventListener("click", { handleEvent: handleItemClick })
    })
    return () => {
      $list.forEach(($li) => {
        $li.removeEventListener("click", handleItemClick as EventListener)
      })
    }
  }, [])
  return (
    <section className="menu-indicator">
      <div className="navigation">
        <ul className="menu-indicator-ul">
          <li className="menu-indicator-li">
            <a href="/" className="menu-indicator-a">
              <span className="menu-indicator-icon">
                <FontAwesomeIcon icon={faHouse} />
              </span>
              <span className="menu-indicator-text">Home</span>
            </a>
          </li>
          <li className="menu-indicator-li">
            <a href="#" className="menu-indicator-a">
              <span className="menu-indicator-icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span className="menu-indicator-text">Profile</span>
            </a>
          </li>
          <li className="menu-indicator-li active">
            <a href="#" className="menu-indicator-a">
              <span className="menu-indicator-icon">
                <FontAwesomeIcon icon={faComment} />
              </span>
              <span className="menu-indicator-text">Message</span>
            </a>
          </li>
          <li className="menu-indicator-li">
            <a href="#" className="menu-indicator-a">
              <span className="menu-indicator-icon">
                <FontAwesomeIcon icon={faCamera} />
              </span>
              <span className="menu-indicator-text">Photos</span>
            </a>
          </li>
          <li className="menu-indicator-li">
            <a href="#" className="menu-indicator-a">
              <span className="menu-indicator-icon">
                <FontAwesomeIcon icon={faGear} />
              </span>
              <span className="menu-indicator-text">Settings</span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </section>
  )
}

export default MainIndicator
