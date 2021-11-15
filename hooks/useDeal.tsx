import useSWR from 'swr'
import { Deal } from '../models'

const fetcher = async (input: RequestInfo, init?: RequestInit | undefined) => {
  const res = await fetch(input, init)
  const data = await res.json()

  return data
}

export interface Results {
  results: Deal[]
}

interface Error {
  name: string
  message: string
  stack?: string
}

export interface State {
  deal?: Deal,
  error?: Error,
  loading?: boolean
}

export default function useDeal(id: string): State {
  if (!id) return {}

  const { data, error } = useSWR<Results>(
    `https://randomuser.me/api/?results=1&page=${id + 1}&inc=location&nat=us&noinfo&seed=123456`,
    fetcher
  )

  const deal: Deal | undefined = data?.results[0] ? ({
    ...data?.results[0],
    id,
    name: data?.results[0].location.street.name
  }) : undefined

  return {
    deal,
    error,
    loading: !error && !data,
  }
}
