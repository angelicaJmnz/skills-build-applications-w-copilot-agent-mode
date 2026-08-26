import CollectionView from './CollectionView'

// Codespaces API: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities
export default function Activities() {
  return <CollectionView component="activities" title="Activity log" description="Recent movement across your OctoFit teams." columns={[{ key: 'username', label: 'Athlete' }, { key: 'type', label: 'Activity' }, { key: 'durationMinutes', label: 'Minutes' }, { key: 'calories', label: 'Calories' }]} />
}
