import CollectionView from './CollectionView'

export default function Teams() {
  return <CollectionView component="teams" title="Teams" description="Shared goals make consistency easier." columns={[{ key: 'name', label: 'Team' }, { key: 'members', label: 'Members' }, { key: 'weeklyGoalMinutes', label: 'Weekly goal' }]} />
}
