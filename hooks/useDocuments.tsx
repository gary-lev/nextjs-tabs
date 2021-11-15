import { Document } from '../models'
import documents from './documents'

export interface Results {
  results: Document[]
}

interface Error {
  name: string
  message: string
  stack?: string
}

export interface State {
  documents?: Document[],
  error?: Error,
  loading?: boolean
}

export default function useDocuments(id: string): State {
  if (!id) return {}

  return {
    documents,
    error: undefined,
    loading: false
  }
}
