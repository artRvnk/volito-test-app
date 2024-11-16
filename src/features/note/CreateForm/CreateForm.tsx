import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { EColors } from '@/shared/lib'
import { useImagePicker } from '@/shared/lib'
import { BottomBar, Image } from '@/shared/ui'
import { Background } from '@/shared/ui/background'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Divider, FlexWrapper } from '@/shared/ui/styled'

import { TCreateForm, TCreateProps } from './types'
import { createValidation } from './validation'

export const CreateForm = ({ onSubmit }: TCreateProps) => {
  const { t } = useTranslation()
  const { onShowAlert } = useImagePicker()

  const {
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { isValid },
  } = useForm<TCreateForm>({
    resolver: zodResolver(createValidation(t)),
    defaultValues: {
      title: '',
      description: '',
      image: '',
    },
  })

  const selectImage = async () => {
    const res = await onShowAlert({})
    if (!res?.path) return

    setValue('image', res.path, { shouldValidate: true })
    // onSavePhoto(res.path)
  }

  const _onSubmit = () => {
    const values = getValues()
    onSubmit(values)
    // onSubmit()
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
              maxCharacters={500}
            />
          )}
        />
      </Background.KeyboardAware>

      <BottomBar>
        <Button.Standard
          disabled={!isValid}
          onPress={handleSubmit(_onSubmit)}
          // onPress={_onSubmit}
          color={EColors.primary_400}
          text={t('create_note.create')}
        />
      </BottomBar>
    </>
  )
}
