import { useState } from 'react'
import { useEvents } from './hooks/useEvents'
import CalendarView from './components/CalendarView'
import EventModal from './components/EventModal'

export default function App() {
  const { events, loading, error } = useEvents()
  const [selected, setSelected] = useState(null)

  if (loading) return <p className="p-10">Loading…</p>
  if (error) return <p className="p-10">{error}</p>

  return (
    <div className="p-4">
      <CalendarView events={events} onEventClick={setSelected} />
      <EventModal event={selected} onClose={() => setSelected(null)} />
    </div>
  )
}