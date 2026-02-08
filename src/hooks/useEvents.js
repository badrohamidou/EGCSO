import { useEffect, useState } from 'react'
import { fetchEvents } from '../api/googleCalendar'

export function useEvents() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchEvents()
      .then(setEvents)
      .catch(() => setError('Unable to load calendar'))
      .finally(() => setLoading(false))
  }, [])

  return { events, loading, error }
}