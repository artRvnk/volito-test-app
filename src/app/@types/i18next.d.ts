import { ru, en } from '@/app/i18n'
import { defaultNS } from '@/app/i18n/i18n'

const resources = {
  ru,
  en,
} as const

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: typeof resources
  }
}
