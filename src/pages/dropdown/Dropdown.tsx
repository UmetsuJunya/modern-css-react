/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

import "./dropdown.scss"

export const Dropdown = () => {
  return (
    <div id="dropdown-button">
      <button className="btn">
        <span>Account Settings</span>
        <FontAwesomeIcon icon={faEarthAmericas} />
        <ul className="dropdown">
          <li className="active">
            <a href="#">Profile Information</a>
          </li>
          <li>
            <a href="#">Change Password</a>
          </li>
          <li>
            <a href="#">
              Become <b>POR</b>
            </a>
          </li>
          <li>
            <a href="#">HELP</a>
          </li>
          <li>
            <a href="#">Log Out</a>
          </li>
        </ul>
      </button>
    </div>
  )
}
