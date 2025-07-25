export function getWedding() {
  const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8888'
  return fetch(`${BASE_URL}/wedding`)
}
