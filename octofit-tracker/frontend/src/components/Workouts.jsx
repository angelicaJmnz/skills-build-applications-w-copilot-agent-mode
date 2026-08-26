import CollectionView from './CollectionView'

// Codespaces API: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/workouts
export default function Workouts() {
  return <CollectionView component="workouts" title="Workouts" description="A focused library for your next session." columns={[{ key: 'title', label: 'Workout' }, { key: 'category', label: 'Category' }, { key: 'difficulty', label: 'Level' }, { key: 'durationMinutes', label: 'Minutes' }]} />
}
