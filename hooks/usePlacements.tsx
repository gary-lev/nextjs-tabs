import { Placement } from '../models'
import placements from './placements'

export interface Results {
  results: Placement[]
}

interface Error {
  name: string
  message: string
  stack?: string
}

export interface State {
  placements?: Placement[],
  error?: Error,
  loading?: boolean
}

export default function usePlacements(id: string): State {
  if (!id) return {}

  return {
    placements,
    error: undefined,
    loading: false
  }
}
