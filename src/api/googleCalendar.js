const API_KEY = 'AIzaSyBGH-tOeSxR5NMcwRfPrVhXOUtXeyRhqJY'
const CALENDAR_ID = 'badrobigboss3@gmail.com'

export async function fetchEvents() {
  const url = new URL(
    `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events`
  )

  url.search = new URLSearchParams({
    key: API_KEY,
    singleEvents: true,
    orderBy: 'startTime',
    timeMin: new Date().toISOString()
  })

  const res = await fetch(url)
  if (!res.ok) throw new Error('Calendar unavailable')

  const data = await res.json()
  return data.items || []
}