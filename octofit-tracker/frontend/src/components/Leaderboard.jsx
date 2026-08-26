import CollectionView from './CollectionView'

export default function Leaderboard() {
  return <CollectionView component="leaderboard" title="Leaderboard" description="The weekly race, ranked by points earned." columns={[{ key: 'rank', label: 'Rank' }, { key: 'username', label: 'Athlete' }, { key: 'points', label: 'Points' }, { key: 'period', label: 'Period' }]} />
}
