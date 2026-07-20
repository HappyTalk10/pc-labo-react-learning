function ScheduleItem({ title, date }) {
  return (
    <li className="schedule-item">
      <span className="schedule-item__date">{date}</span>
      <span className="schedule-item__title">{title}</span>
    </li>
  )
}

export default ScheduleItem
