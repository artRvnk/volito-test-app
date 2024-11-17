import React, { useEffect } from 'react'
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  RefreshControl,
} from 'react-native'

import { useTranslation } from 'react-i18next'

import { useTypedSelector } from '@/app/store'

import { NoteFeature } from '@/features/note'

import { NoteEntity, TNote, useGetNotes } from '@/entities/note'
import { getUserSelector } from '@/entities/user'

import { EColors } from '@/shared/lib'
import { TAB_HEIGHT } from '@/shared/lib/hooks/tab'
import { Icon } from '@/shared/ui'
import { Divider, FlexWrapper, Typography } from '@/shared/ui/styled'

import { EmptyWrapper, styles } from './styles'

export const List = () => {
  const { t } = useTranslation()

  const { user } = useTypedSelector(getUserSelector)

  // console.log('getNotes-user', user)

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
  } = useGetNotes({ owner: user?._id })

  useEffect(() => {
    getFirstPage?.()
    console.log('getNotes-getFirstPage')
  }, [])

  const onGetMore = () => {
    // console.log('getNotes-canGetMoreItems', canGetMoreItems)
    // console.log('getNotes-totalCount', totalCount)

    if (canGetMoreItems && !!getMore) {
      console.log('getNotes-getMore!!', totalCount)
      getMore()
    }
  }

  const renderItem: ListRenderItem<TNote> = ({ item }) => {
    return (
      <NoteFeature.Delete
        item={item}
        entity={<NoteEntity.Card item={item} />}
      />
    )
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

    return (
      <EmptyWrapper>
        <ActivityIndicator size={'large'} color={EColors.primary_300} />
      </EmptyWrapper>
    )
  }

  return (
    <>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item._id}
        onEndReached={onGetMore}
        onEndReachedThreshold={0.8}
        ListEmptyComponent={renderEmpty}
        ListFooterComponent={renderLoader}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Divider height={12} />}
        contentContainerStyle={styles.list}
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
