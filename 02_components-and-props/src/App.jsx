import './App.css'
import ScheduleItem from './components/ScheduleItem'

const schedules = [
  { id: 1, date: '2026-07-20', title: 'Reactの環境構築を復習する' },
  { id: 2, date: '2026-07-21', title: 'コンポーネント分割の記事を書く' },
  { id: 3, date: '2026-07-22', title: 'propsの動きを検証する' },
]

function App() {
  return (
    <div className="app">
      <h1>予定管理アプリ</h1>
      <p>Ver.2：コンポーネント分割とpropsの練習</p>

      <ul className="schedule-list">
        {schedules.map((schedule) => (
          <ScheduleItem key={schedule.id} title={schedule.title} date={schedule.date} />
        ))}
      </ul>
    </div>
  )
}

export default App
