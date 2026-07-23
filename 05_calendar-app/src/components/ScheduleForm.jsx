import { useState } from 'react'

function ScheduleForm({ selectedDate, onAdd }) {
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!title) return

    onAdd({ date: selectedDate, title })
    setTitle('')
  }

  return (
    <form className="schedule-form" onSubmit={handleSubmit}>
      <span className="schedule-form__date">{selectedDate}</span>
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
