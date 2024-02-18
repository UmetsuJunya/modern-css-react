/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import "./App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAddressCard,
  faBars,
  faFolderOpen,
  faHouse,
  faList,
} from "@fortawesome/free-solid-svg-icons"

interface ListItemProps {
  index: number
  icon: React.ReactNode
  link: string
  children: React.ReactNode
}

const ListItem: React.FC<ListItemProps> = ({ index, icon, link, children }) => {
  const listItemStyle: React.CSSProperties = {
    "--i": index.toString(),
  } as React.CSSProperties

  return (
    <li style={listItemStyle} className="app-box-li">
      <span className="app-box-span">{icon}</span>
      <a href={link} className="app-box-a">
        {children}
      </a>
    </li>
  )
}

const YourComponent: React.FC = () => {
  return (
    <div>
      <section className="app-section">
        <div>
          <ul className="app-box-ul">
            <ListItem
              index={6}
              icon={<FontAwesomeIcon icon={faHouse} />}
              link={"/"}
            >
              Home
            </ListItem>
            <ListItem
              index={5}
              icon={<FontAwesomeIcon icon={faBars} />}
              link={"/menu-indicator"}
            >
              Menu Indicator
            </ListItem>
            <ListItem
              index={4}
              icon={<FontAwesomeIcon icon={faList} />}
              link={"/add-tag"}
            >
              ADD Tag
            </ListItem>
            <ListItem
              index={3}
              icon={<FontAwesomeIcon icon={faFolderOpen} />}
              link={"/Lamp"}
            >
              Lamp
            </ListItem>
            <ListItem
              index={2}
              icon={<FontAwesomeIcon icon={faHouse} />}
              link={"/box-animation"}
            >
              Box Animation
            </ListItem>
            <ListItem
              index={1}
              icon={<FontAwesomeIcon icon={faHouse} />}
              link={"/dropdown"}
            >
              Dropdown
            </ListItem>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default YourComponent
