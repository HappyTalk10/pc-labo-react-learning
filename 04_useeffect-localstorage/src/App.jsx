import { useEffect, useState } from 'react'
import './App.css'
import ScheduleItem from './components/ScheduleItem'
import ScheduleForm from './components/ScheduleForm'

const STORAGE_KEY = 'pc-labo-schedules'

const initialSchedules = [
  { id: 1, date: '2026-07-20', title: 'Reactの環境構築を復習する' },
  { id: 2, date: '2026-07-21', title: 'コンポーネント分割の記事を書く' },
  { id: 3, date: '2026-07-22', title: 'propsの動きを検証する' },
]

let nextId = initialSchedules.length + 1

function loadSchedules() {
  const saved = localStorage.getItem(STORAGE_KEY)

  if (!saved) return initialSchedules

  try {
    return JSON.parse(saved)
  } catch {
    return initialSchedules
  }
}

function App() {
  const [schedules, setSchedules] = useState(loadSchedules)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(schedules))
  }, [schedules])

  const handleAdd = ({ date, title }) => {
    const newSchedule = { id: nextId, date, title }
    nextId += 1
    setSchedules((prev) => [...prev, newSchedule])
  }

  const handleDelete = (id) => {
    setSchedules((prev) => prev.filter((schedule) => schedule.id !== id))
  }

  return (
    <div className="app">
      <h1>予定管理アプリ</h1>
      <p>Ver.4：useEffect + localStorageによるデータ永続化</p>

      <ScheduleForm onAdd={handleAdd} />

      {schedules.length === 0 ? (
        <p className="schedule-empty">予定はまだ登録されていない。</p>
      ) : (
        <ul className="schedule-list">
          {schedules.map((schedule) => (
            <ScheduleItem
              key={schedule.id}
              title={schedule.title}
              date={schedule.date}
              onDelete={() => handleDelete(schedule.id)}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
