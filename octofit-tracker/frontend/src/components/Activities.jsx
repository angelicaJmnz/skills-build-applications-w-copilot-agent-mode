import CollectionView from './CollectionView'

export default function Activities() {
  return <CollectionView component="activities" title="Activity log" description="Recent movement across your OctoFit teams." columns={[{ key: 'username', label: 'Athlete' }, { key: 'type', label: 'Activity' }, { key: 'durationMinutes', label: 'Minutes' }, { key: 'calories', label: 'Calories' }]} />
}
