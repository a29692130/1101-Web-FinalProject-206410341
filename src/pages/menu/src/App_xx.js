import Menu_xx from './components/Menu_xx';
import Category_xx from './components/Category_xx';
import items from './data';
import { useState } from 'react';
import './index.scss';

const allCategories = [`all`, ...new Set(items.map((item) => item.category))];
console.log('allCategories', allCategories);

function App_xx() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <div className="menu">
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Category_xx categories={categories} filterItems={filterItems} />
          <Menu_xx items={menuItems} />
        </section>
      </main>
    </div>
  );
}

export default App_xx;
