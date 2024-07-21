import { useState } from 'react'
import Title from './Title'
import data from './data'
import Menu from './Menu'
import Category from './Category'

const allCategories = () => {
  const categories = data.map((item) => item.category)
  const tempSet = new Set(categories)
  const tempItems = ['all', ...tempSet]
  return tempItems
}

const App = () => {
  const [menu, setMenu] = useState(data)
  const [categories, setCategories] = useState(allCategories)

  const filterMenu = (category) => {
    if (category === 'all') {
      setMenu(data)
      return
    }
    const newMenu = data.filter((item) => {
      return item.category === category
    })
    setMenu(newMenu)
  }
  return (
    <main>
      <section className="menu">
        <Title />
        <Category categories={categories} filterMenu={filterMenu} />
        <Menu menu={menu} />
      </section>
    </main>
  )
}
export default App
