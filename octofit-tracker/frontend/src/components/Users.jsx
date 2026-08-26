import CollectionView from './CollectionView'

export default function Users() {
  return <CollectionView component="users" title="Athletes" description="Everyone making progress in OctoFit." columns={[{ key: 'displayName', label: 'Name' }, { key: 'username', label: 'Username' }, { key: 'goal', label: 'Goal' }]} />
}
