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

export const STEP = 10

export const usePagination = ({
  getAction,
  loading,
  items = [],
  totalCount,
}: TUsePagination): TPaginationReturn => {
  const length = useMemo(() => items.length ?? 0, [items.length])

  const [steps, setSteps] = useState(STEP)

  const [refreshing, setRefreshing] = useState(false)

  const canGetMoreItems = useMemo(
    () =>
      items.length < totalCount &&
      !!items.length &&
      totalCount > steps &&
      !loading,
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

    setSteps(prev => prev + STEP)

    getAction(steps + STEP)
  }, [loading, canGetMoreItems, getAction, steps])

  // Get first page
  const getFirstPage = useCallback(
    (activeGlobalLoader?: boolean) => {
      getAction(STEP, activeGlobalLoader)
    },
    [getAction],
  )

  // Refresh
  const refresh = useCallback(() => {
    setRefreshing(true)

    setSteps(STEP)

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
