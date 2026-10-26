import { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage.js'
import { buildShoppingList } from '../lib/shopping.js'
import { addDays, formatDay, isoDate, parseIsoDate, startOfWeek } from '../lib/dates.js'

// Three steps, one saved object:
//   null                         -> Generate: pick a week, build the list
//   { stage: 'review', ... }     -> Review: untick what you already have
//   { stage: 'shopping', ... }   -> Shopping: tick things off in the shop
export default function ShopPage({ menu, plans }) {
  const [list, setList] = useLocalStorage('daytoday.shoppingList', null)

  // Flip one true/false field on one item. A function update, as in App.jsx.
  function toggle(key, field) {
    setList(prev => ({
      ...prev,
      items: prev.items.map(i => (i.key === key ? { ...i, [field]: !i[field] } : i)),
    }))
  }

  // Early returns pick which screen to show, like a switch statement.
  if (!list) return <Generate menu={menu} plans={plans} onCreate={setList} />
  if (list.stage === 'review') return <Review list={list} setList={setList} toggle={toggle} />
  return <Shopping list={list} setList={setList} toggle={toggle} />
}

function Generate({ menu, plans, onCreate }) {
  const [weekOffset, setWeekOffset] = useState(0)
  const monday = startOfWeek(addDays(new Date(), weekOffset * 7))
  const weekPlan = plans[isoDate(monday)] ?? {}
  const dinners = Object.values(weekPlan)

  function generate() {
    onCreate({ stage: 'review', week: isoDate(monday), items: buildShoppingList(menu, weekPlan) })
  }

  return (
    <>
      <header>
        <h1>Shopping</h1>
        <p className="tagline">Make a list from the week’s dinners.</p>
        <div className="bucket-picker">
          {['This week', 'Next week'].map((label, i) => (
            <button key={label} className={weekOffset === i ? 'active' : ''} onClick={() => setWeekOffset(i)}>
              {label}
            </button>
          ))}
        </div>
      </header>

      <section className="card shop-dinners">
        {dinners.length === 0 ? (
          <p className="empty">No dinners planned for this week yet. Plan them in the Week tab.</p>
        ) : (
          <ul>
            {dinners.map(name => <li key={name}>{name}</li>)}
          </ul>
        )}
      </section>

      <button className="primary wide" disabled={dinners.length === 0} onClick={generate}>
        🛒 Generate shopping list
      </button>
    </>
  )
}

function Review({ list, setList, toggle }) {
  const kept = list.items.filter(i => i.keep).length

  function save() {
    setList({ ...list, stage: 'shopping', items: list.items.filter(i => i.keep) })
  }

  return (
    <>
      <header>
        <h1>Check the list</h1>
        <p className="tagline">Untick anything you already have.</p>
      </header>

      <div className="shop-actions">
        <button onClick={() => setList(null)}>Cancel</button>
        <button className="primary" onClick={save}>Save list ({kept})</button>
      </div>

      <ul className="shop-list">
        {list.items.map(item => (
          <ShopItem key={item.key} item={item} checked={item.keep} onToggle={() => toggle(item.key, 'keep')} showMeals />
        ))}
      </ul>
    </>
  )
}

function Shopping({ list, setList, toggle }) {
  const toGet = list.items.filter(i => !i.got)
  const got = list.items.filter(i => i.got)

  function startOver() {
    if (window.confirm('Start a new list? This one will be deleted.')) setList(null)
  }

  return (
    <>
      <header>
        <h1>Shopping</h1>
        <p className="tagline">
          {toGet.length === 0 ? 'All done 🎉' : `${toGet.length} to get`} · week of{' '}
          {formatDay(parseIsoDate(list.week), { day: 'numeric', month: 'short' })}
        </p>
      </header>

      <ul className="shop-list">
        {/* Still to get first, then what's already in the basket. */}
        {[...toGet, ...got].map(item => (
          <ShopItem key={item.key} item={item} checked={item.got} onToggle={() => toggle(item.key, 'got')} done={item.got} />
        ))}
      </ul>

      <button className="wide" onClick={startOver}>New list</button>
    </>
  )
}

// `done` dims and strikes through an item; `showMeals` lists which dinners need it.
function ShopItem({ item, checked, onToggle, done = false, showMeals = false }) {
  const dimmed = done || (showMeals && !checked)
  return (
    <li className={dimmed ? 'off' : ''}>
      <label>
        <input type="checkbox" checked={checked} onChange={onToggle} />
        <span className="shop-name">
          <span className={done ? 'struck' : ''}>{item.name}</span>
          {showMeals && <small>{item.meals.join(' · ')}</small>}
        </span>
        <span className="qty">{item.amount}</span>
      </label>
    </li>
  )
}
