import { useState } from 'react'

function ScheduleForm({ onAdd }) {
  const [date, setDate] = useState('')
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!date || !title) return

    onAdd({ date, title })

    setDate('')
    setTitle('')
  }

  return (
    <form className="schedule-form" onSubmit={handleSubmit}>
      <input
        type="date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
        className="schedule-form__date"
        required
      />
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="予定のタイトル"
        className="schedule-form__title"
        required
      />
      <button type="submit" className="schedule-form__submit">
        追加
      </button>
    </form>
  )
}

export default ScheduleForm