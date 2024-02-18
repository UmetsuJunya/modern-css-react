import { useState } from "react"
import "./add-tag.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

export const AddTag = () => {
  const [tags, setTags] = useState<string[]>([
    "optimus prime",
    "bumblebee",
    "megatron",
    "ironhide",
  ])
  const [newTag, setNewTag] = useState<string>("")

  const handleAddTag = () => {
    if (newTag.trim() === "") return
    setTags([...tags, newTag.trim()])
    setNewTag("")
  }

  const handleRemoveTag = (index: number) => {
    const updateTags = tags.filter((_, i) => i !== index)
    setTags(updateTags)
  }

  return (
    <section className="add-tag">
      <div className="add-tag-container">
        <label className="add-tag-label">
          add tag (press enter to add new tag)
        </label>
        <input
          type="text"
          className="add-tag-input"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") handleAddTag()
          }}
        />
        <ul className="add-tag-ul">
          {tags.map((tag, index) => (
            <li key={index} className="add-tag-li">
              {tag}
              <span
                onClick={() => handleRemoveTag(index)}
                className="add-tag-span"
              >
                <svg
                  onClick={() => handleRemoveTag(index)}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="add-tag-svg"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
