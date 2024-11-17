import React from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { EColors } from '@/shared/lib'
import { BottomBar } from '@/shared/ui'
import { Background } from '@/shared/ui/background'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Divider } from '@/shared/ui/styled'

import { TSignUpForm, TSignUpProps } from './types'
import { signUpValidation } from './validation'

export const SignUpForm = ({ data, onSubmit }: TSignUpProps) => {
  const { t } = useTranslation()

  const {
    control,
    getValues,
    handleSubmit,
    formState: { isValid },
  } = useForm<TSignUpForm>({
    resolver: zodResolver(signUpValidation(t)),
    defaultValues: {
      name: data?.name || '',
      surname: data?.surname || '',
      email: data?.email || '',
    },
  })

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
          name={'name'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input.FloatingText
              {...{ value, onChange }}
              label={t('sign_up.name')}
              error={error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name={'surname'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input.FloatingText
              {...{ value, onChange }}
              label={t('sign_up.surname')}
              error={error?.message}
            />
          )}
        />

        <Controller
          control={control}
          name={'email'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <Input.FloatingText
              {...{ value, onChange }}
              label={t('sign_up.email')}
              error={error?.message}
              inputProps={{
                autoCapitalize: 'none',
                keyboardType: 'email-address',
                textContentType: 'oneTimeCode',
              }}
            />
          )}
        />
      </Background.KeyboardAware>

      <BottomBar>
        <Button.Standard
          disabled={!isValid}
          onPress={handleSubmit(_onSubmit)}
          color={EColors.primary_400}
          text={t('sign_up.create_account')}
        />
      </BottomBar>
    </>
  )
}
