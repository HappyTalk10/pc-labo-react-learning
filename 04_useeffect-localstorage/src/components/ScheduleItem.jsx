function ScheduleItem({ title, date, onDelete }) {
  return (
    <li className="schedule-item">
      <span className="schedule-item__date">{date}</span>
      <span className="schedule-item__title">{title}</span>
      <button type="button" className="schedule-item__delete" onClick={onDelete}>
        削除
      </button>
    </li>
  )
}

export default ScheduleItem
