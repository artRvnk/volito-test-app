import React, { useRef } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { connectStorageEmulator } from '@react-native-firebase/storage'
import { format, parseISO } from 'date-fns'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { BottomSheet } from '@/widgets/bottomSheet'

import { EColors } from '@/shared/lib'
import { useImagePicker } from '@/shared/lib'
import { BottomBar, Image } from '@/shared/ui'
import { Background } from '@/shared/ui/background'
import { TBottomSheetModalRef } from '@/shared/ui/bottomSheet/Modal'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Divider, FlexWrapper } from '@/shared/ui/styled'

import { TCreateForm, TCreateProps } from './types'
import { createValidation } from './validation'

export const CreateForm = ({ onSubmit, note, image }: TCreateProps) => {
  const { t } = useTranslation()
  const { onShowAlert } = useImagePicker()

  const dateRef = useRef<TBottomSheetModalRef | null>(null)

  const {
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<TCreateForm>({
    resolver: zodResolver(createValidation(t)),
    defaultValues: {
      title: note?.title || '',
      description: note?.description || '',
      image: image || '',
      date: new Date(note?.date ?? new Date()).toISOString(),
    },
  })

  const selectImage = async () => {
    const res = await onShowAlert({})
    if (!res?.path) return

    setValue('image', res.path, { shouldValidate: true, shouldDirty: true })
  }

  const openDate = () => {
    console.log('openDate')
    dateRef.current?.open()
  }

  const _onSubmit = () => {
    const values = getValues()

    onSubmit(values)
  }

  return (
    <>
      <Background.KeyboardAware pHorizontal={8}>
        <Divider height={16} />

        <Controller
          control={control}
          name="image"
          render={({ field: { value } }) => (
            <FlexWrapper mBottom="28px">
              <Image
                image={value}
                isEditable
                size="large"
                onPress={selectImage}
              />
            </FlexWrapper>
          )}
        />

        <Controller
          control={control}
          name={'title'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input.FloatingText
              {...{ value, onChange }}
              label={t('create_note.enter_title')}
              error={error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name={'description'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input.FloatingText
              {...{ value, onChange }}
              label={t('create_note.enter_description')}
              error={error?.message}
              multiline
              maxCharacters={1000}
            />
          )}
        />

        <Controller
          control={control}
          name={'date'}
          render={({ field: { value, onChange } }) => (
            <>
              <Input.FloatingText
                value={
                  !!value
                    ? format(parseISO(value), 'dd MMMM, yyyy')
                    : format(new Date(), 'dd MMMM, yyyy')
                }
                label={t('create_note.enter_date')}
                onPress={openDate}
                icon={'ArrowRight'}
              />

              <BottomSheet.Date
                ref={dateRef}
                minimumDate={new Date()}
                title={t('create_note.enter_date')}
                {...{ value, onChange }}
              />
            </>
          )}
        />

        <BottomBar
          containerStyle={{
            marginTop: 'auto',
          }}>
          <Button.Standard
            disabled={!isValid || !isDirty}
            onPress={handleSubmit(_onSubmit)}
            color={EColors.primary_400}
            text={!!note ? t('edit_note.update') : t('create_note.create')}
          />
        </BottomBar>
      </Background.KeyboardAware>
    </>
  )
}
