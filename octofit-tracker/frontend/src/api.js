const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api`
  : 'http://localhost:8000/api'

export function getItems(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.data)) return payload.data
  if (Array.isArray(payload?.results)) return payload.results
  if (Array.isArray(payload?.items)) return payload.items
  return []
}

export function getPageInfo(payload) {
  return {
    page: payload?.page ?? payload?.currentPage ?? 1,
    pages: payload?.pages ?? payload?.totalPages ?? 1,
    total: payload?.total ?? payload?.count ?? getItems(payload).length,
  }
}

export async function fetchCollection(component) {
  const response = await fetch(`${apiBaseUrl}/${component}/`)
  if (!response.ok) throw new Error(`Unable to load ${component}`)
  const payload = await response.json()
  return { items: getItems(payload), pageInfo: getPageInfo(payload) }
}
