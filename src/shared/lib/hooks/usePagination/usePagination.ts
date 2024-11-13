import { useCallback, useEffect, useMemo, useState } from 'react'

export type TPaginationGetAction = (
  skip: number,
  activeGlobalLoader?: boolean,
) => Promise<void> | void

export type TPaginationReturn = {
  getMore?: () => void
  getFirstPage?: (activeGlobalLoader?: boolean | undefined) => void
  canGetMoreItems?: boolean
  loadMoreLoading?: boolean
  isFirstLoad?: boolean
  refreshing?: boolean
  refresh?: () => void
}

type TUsePagination = {
  getAction: TPaginationGetAction
  loading: boolean
  items: Array<unknown>
  totalCount: number
}

export const usePagination = ({
  getAction,
  loading,
  items = [],
  totalCount,
}: TUsePagination): TPaginationReturn => {
  const length = useMemo(() => items.length ?? 0, [items.length])

  const [refreshing, setRefreshing] = useState(false)

  const canGetMoreItems = useMemo(
    () => items.length < totalCount && !!items.length,
    [items.length, totalCount],
  )

  const loadMoreLoading = useMemo(
    () => !!canGetMoreItems && !!loading && !refreshing,
    [canGetMoreItems, loading, refreshing],
  )

  const isFirstLoad = useMemo(
    () => !!loading && !refreshing && !items?.length,
    [loading, refreshing, items?.length],
  )

  // Get more method
  const getMore = useCallback(() => {
    if (loading || !canGetMoreItems) return
    getAction(length)
  }, [loading, canGetMoreItems, getAction, length])

  // Get first page
  const getFirstPage = useCallback(
    (activeGlobalLoader?: boolean) => {
      getAction(0, activeGlobalLoader)
    },
    [getAction],
  )

  // Refresh
  const refresh = useCallback(() => {
    setRefreshing(true)
    getFirstPage()
  }, [getFirstPage])

  // Effect for listen end of loading
  useEffect(() => {
    if (!loading) {
      setRefreshing(false)
    }
  }, [loading])

  return {
    getMore,
    getFirstPage,
    isFirstLoad,
    canGetMoreItems,
    loadMoreLoading,
    refreshing,
    refresh,
  }
}
