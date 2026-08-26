import { useEffect, useState } from 'react'
import { fetchCollection } from '../api'

function formatValue(value) {
  if (value === null || value === undefined) return '—'
  if (Array.isArray(value)) return value.join(', ')
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

export default function CollectionView({ component, title, description, columns }) {
  const [state, setState] = useState({ items: [], pageInfo: null, loading: true, error: '' })

  useEffect(() => {
    let active = true
    fetchCollection(component)
      .then((result) => active && setState({ ...result, loading: false, error: '' }))
      .catch((error) => active && setState({ items: [], pageInfo: null, loading: false, error: error.message }))
    return () => { active = false }
  }, [component])

  return (
    <section className="content-section">
      <div className="section-heading">
        <div>
          <p className="eyebrow">OctoFit data</p>
          <h1>{title}</h1>
          <p className="section-description">{description}</p>
        </div>
        {state.pageInfo && <span className="record-count">{state.pageInfo.total} records</span>}
      </div>
      {state.loading && <div className="status-panel">Loading {title.toLowerCase()}...</div>}
      {state.error && <div className="status-panel status-error">{state.error}. Check that the API is running.</div>}
      {!state.loading && !state.error && (
        <div className="table-wrap">
          <table className="table align-middle mb-0">
            <thead><tr>{columns.map((column) => <th key={column.key}>{column.label}</th>)}</tr></thead>
            <tbody>
              {state.items.map((item, index) => (
                <tr key={item._id ?? index}>{columns.map((column) => <td key={column.key}>{formatValue(item[column.key])}</td>)}</tr>
              ))}
            </tbody>
          </table>
          {state.items.length === 0 && <div className="empty-state">No {title.toLowerCase()} found.</div>}
        </div>
      )}
    </section>
  )
}
