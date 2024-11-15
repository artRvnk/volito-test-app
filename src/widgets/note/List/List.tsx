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
  } = useGetNotes()

  //   useEffect(() => {
  //     if (isFocused) {
  //       getFirstPage?.()
  //     }
  //   }, [isFocused])

  useEffect(() => {
    getFirstPage?.()
  }, [])

  const onGetMore = () => {
    if (canGetMoreItems && !!getMore) {
      getMore()
    }
  }

  const renderItem: ListRenderItem<TNote> = ({ item }) => {
    return <NoteEntity.Card item={item} />
  }

  const renderLoader = () => {
    if (loadMoreLoading && canGetMoreItems) {
      return (
        <FlexWrapper style={styles.loader}>
          <ActivityIndicator size={'small'} color={EColors.primary_300} />
        </FlexWrapper>
      )
    }

    return <Divider height={TAB_HEIGHT / 2} />
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
        onEndReachedThreshold={0.5}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderLoader}
        showsVerticalScrollIndicator={false}
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
