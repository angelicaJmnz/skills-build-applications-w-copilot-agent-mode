import CollectionView from './CollectionView'

// Codespaces API: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users
export default function Users() {
  return <CollectionView component="users" title="Athletes" description="Everyone making progress in OctoFit." columns={[{ key: 'displayName', label: 'Name' }, { key: 'username', label: 'Username' }, { key: 'goal', label: 'Goal' }]} />
}
