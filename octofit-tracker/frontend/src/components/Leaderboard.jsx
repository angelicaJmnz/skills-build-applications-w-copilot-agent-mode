import CollectionView from './CollectionView'

// Codespaces API: https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard
export default function Leaderboard() {
  return <CollectionView component="leaderboard" title="Leaderboard" description="The weekly race, ranked by points earned." columns={[{ key: 'rank', label: 'Rank' }, { key: 'username', label: 'Athlete' }, { key: 'points', label: 'Points' }, { key: 'period', label: 'Period' }]} />
}
