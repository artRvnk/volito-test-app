import React, { useEffect } from 'react'
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  RefreshControl,
} from 'react-native'

import { useIsFocused } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'

import { NoteEntity, TNote } from '@/entities/note'

import { useGetNotes } from '@/entities/note/hooks'

import { EColors } from '@/shared/lib'
import { TAB_HEIGHT } from '@/shared/lib/hooks/tab'
import { Icon } from '@/shared/ui'
import { Divider, FlexWrapper, Typography } from '@/shared/ui/styled'

import { EmptyWrapper, styles } from './styles'

export const List = () => {
  const { t } = useTranslation()

  const isFocused = useIsFocused()

  const {
    data = [],
    isFirstLoad = false,
    getMore,
    canGetMoreItems,
    loadMoreLoading,
    refresh,
    refreshing,
    getFirstPage,
    totalCount,
  } = useGetNotes()

  console.log('List', data)

  //   useEffect(() => {
  //     if (isFocused) {
  //       getFirstPage?.()
  //     }
  //   }, [isFocused])

  useEffect(() => {
    console.log('getNotes-getFirstPage')

    getFirstPage?.()
  }, [])

  const onGetMore = () => {
    console.log('getNotes-canGetMoreItems', canGetMoreItems)
    console.log('getNotes-totalCount', totalCount)

    if (canGetMoreItems && !!getMore) {
      console.log('getNotes-d-getMore', totalCount)
      getMore()
    }
  }

  const renderItem: ListRenderItem<TNote> = ({ item, index }) => {
    return <NoteEntity.Card item={item} index={index} />
  }

  const renderLoader = () => {
    if (loadMoreLoading && canGetMoreItems) {
      return (
        <FlexWrapper style={styles.loader}>
          <ActivityIndicator size={'small'} color={EColors.primary_300} />
        </FlexWrapper>
      )
    }

    return <Divider height={TAB_HEIGHT * 1.25} />
  }

  const renderEmpty = () => {
    if (!isFirstLoad)
      return (
        <EmptyWrapper>
          <FlexWrapper flexDirection="column">
            <Icon name="StickyNote" size={100} />

            <Typography.Body1R mTop="24px" align="center" color={EColors.gray}>
              {t('notes.empty_list')}
            </Typography.Body1R>
          </FlexWrapper>
        </EmptyWrapper>
      )

    return <ActivityIndicator size={'large'} color={EColors.primary_300} />
  }

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={onGetMore}
        onEndReachedThreshold={0.8}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderLoader}
        showsVerticalScrollIndicator={false}
        style={styles.list}
        refreshControl={
          <RefreshControl
            onRefresh={refresh}
            refreshing={!!refreshing}
            tintColor={EColors.primary_300}
          />
        }
      />
    </>
  )
}
