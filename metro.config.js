const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config')

const { withSentryConfig } = require('@sentry/react-native/metro')

const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config')

const defaultConfig = getDefaultConfig(__dirname)
const { assetExts, sourceExts } = defaultConfig.resolver

const config = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
}

module.exports = withSentryConfig(
  wrapWithReanimatedMetroConfig(
    mergeConfig(getDefaultConfig(__dirname), config),
  ),
)
