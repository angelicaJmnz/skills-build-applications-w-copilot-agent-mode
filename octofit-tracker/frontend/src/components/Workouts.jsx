import CollectionView from './CollectionView'

export default function Workouts() {
  return <CollectionView component="workouts" title="Workouts" description="A focused library for your next session." columns={[{ key: 'title', label: 'Workout' }, { key: 'category', label: 'Category' }, { key: 'difficulty', label: 'Level' }, { key: 'durationMinutes', label: 'Minutes' }]} />
}
