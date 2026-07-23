import { useEffect, useState } from 'react'
import './App.css'
import Calendar from './components/Calendar'
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

function todayString() {
  const now = new Date()
  const mm = String(now.getMonth() + 1).padStart(2, '0')
  const dd = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${mm}-${dd}`
}

function App() {
  const [schedules, setSchedules] = useState(loadSchedules)
  const [viewDate, setViewDate] = useState(() => new Date())
  const [selectedDate, setSelectedDate] = useState(todayString)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(schedules))
  }, [schedules])

  const year = viewDate.getFullYear()
  const month = viewDate.getMonth()

  const handlePrevMonth = () => {
    setViewDate(new Date(year, month - 1, 1))
  }

  const handleNextMonth = () => {
    setViewDate(new Date(year, month + 1, 1))
  }

  const handleAdd = ({ date, title }) => {
    const newSchedule = { id: nextId, date, title }
    nextId += 1
    setSchedules((prev) => [...prev, newSchedule])
  }

  const handleDelete = (id) => {
    setSchedules((prev) => prev.filter((schedule) => schedule.id !== id))
  }

  const schedulesForSelectedDate = schedules.filter(
    (schedule) => schedule.date === selectedDate
  )

  return (
    <div className="app">
      <h1>予定管理アプリ</h1>
      <p>Ver.5：月表示カレンダーの実装</p>

      <Calendar
        year={year}
        month={month}
        schedules={schedules}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />

      <h2 className="selected-date-heading">{selectedDate} の予定</h2>

      <ScheduleForm selectedDate={selectedDate} onAdd={handleAdd} />

      {schedulesForSelectedDate.length === 0 ? (
        <p className="schedule-empty">この日の予定はまだ登録されていない。</p>
      ) : (
        <ul className="schedule-list">
          {schedulesForSelectedDate.map((schedule) => (
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
