import React from 'react'

const Category = ({ categories, filterMenu }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            key={category}
            type="button"
            className="btn"
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Category
