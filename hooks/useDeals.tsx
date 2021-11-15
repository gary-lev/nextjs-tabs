import { useMemo } from 'react'
import useSWR from 'swr'
import { Deal } from '../models'

const fetcher = async (input: RequestInfo, init?: RequestInit | undefined) => {
  const res = await fetch(input, init)
  const data = await res.json()

  return data
}

const url = `https://randomuser.me/api/?inc=location&nat=us&results=10&noinfo&seed=123456`

export interface Results {
  results: Deal[]
}

interface Error {
  name: string
  message: string
  stack?: string
}

export interface State {
  deals?: Deal[],
  error?: Error,
  loading: boolean
}

export default function useDeals(): State {
  const { data, error } = useSWR<Results>(url, fetcher)

  const deals = useMemo<Deal[]>(() => {
    const deals = data?.results

    return deals ? (deals.map((deal, i) => ({
      ...deal,
      id: i.toString(),
      name: deal.location.street.name
    }))) : []
  }, [data])


  return {
    deals,
    error,
    loading: !error && !data,
  }
}
