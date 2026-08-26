import CollectionView from './CollectionView'

// Codespaces API: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams
export default function Teams() {
  return <CollectionView component="teams" title="Teams" description="Shared goals make consistency easier." columns={[{ key: 'name', label: 'Team' }, { key: 'members', label: 'Members' }, { key: 'weeklyGoalMinutes', label: 'Weekly goal' }]} />
}
