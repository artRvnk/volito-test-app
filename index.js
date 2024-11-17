import { AppRegistry } from 'react-native'

import '@/app/i18n'

import { SENTRY_DNS } from '@env'
import * as Sentry from '@sentry/react-native'

import App from '@/app/App'

import { name as appName } from './app.json'

Sentry.init({
  dsn: SENTRY_DNS,
  tracesSampleRate: 1.0,
})

AppRegistry.registerComponent(appName, () => App)
