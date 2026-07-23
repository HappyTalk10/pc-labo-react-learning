const WEEKDAYS = ['日', '月', '火', '水', '木', '金', '土']

function formatDate(year, month, day) {
  const mm = String(month + 1).padStart(2, '0')
  const dd = String(day).padStart(2, '0')
  return `${year}-${mm}-${dd}`
}

function buildCalendarCells(year, month) {
  const firstDay = new Date(year, month, 1).getDay()
  const lastDate = new Date(year, month + 1, 0).getDate()

  const cells = []

  // 月初までの空白セル
  for (let i = 0; i < firstDay; i += 1) {
    cells.push(null)
  }

  // その月の日付セル
  for (let day = 1; day <= lastDate; day += 1) {
    cells.push(day)
  }

  return cells
}

function Calendar({ year, month, schedules, selectedDate, onSelectDate, onPrevMonth, onNextMonth }) {
  const cells = buildCalendarCells(year, month)

  const scheduleCountByDate = schedules.reduce((acc, schedule) => {
    acc[schedule.date] = (acc[schedule.date] || 0) + 1
    return acc
  }, {})

  return (
    <div className="calendar">
      <div className="calendar__header">
        <button type="button" onClick={onPrevMonth}>
          ＜
        </button>
        <span className="calendar__title">
          {year}年 {month + 1}月
        </span>
        <button type="button" onClick={onNextMonth}>
          ＞
        </button>
      </div>

      <div className="calendar__grid">
        {WEEKDAYS.map((weekday) => (
          <div key={weekday} className="calendar__weekday">
            {weekday}
          </div>
        ))}

        {cells.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="calendar__cell calendar__cell--empty" />
          }

          const dateStr = formatDate(year, month, day)
          const count = scheduleCountByDate[dateStr] || 0
          const isSelected = dateStr === selectedDate

          return (
            <button
              type="button"
              key={dateStr}
              className={`calendar__cell${isSelected ? ' calendar__cell--selected' : ''}`}
              onClick={() => onSelectDate(dateStr)}
            >
              <span className="calendar__day">{day}</span>
              {count > 0 && <span className="calendar__dot">●{count}</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Calendar
