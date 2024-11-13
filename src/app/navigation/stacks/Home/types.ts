import { THomeStackFiltersParams } from '@/screens/Home/Filters'
import { THomeStackFiltersResultParams } from '@/screens/Home/FiltersResult'
import { THomeStackMainParams } from '@/screens/Home/Main'
import { THomeStackSearchParams } from '@/screens/Home/Search'
import { TProfileStackGalleryParams } from '@/screens/Profile/Gallery'

import { EScreens } from '../../screens'
import { TNavigatorScreenParams } from '../../types'
import { TProfileStack } from '../Profile'

export type THomeStack = {
  [EScreens.HMain]: THomeStackMainParams
  [EScreens.HSearch]: THomeStackSearchParams
  [EScreens.HProfile]: TNavigatorScreenParams<TProfileStack>
  [EScreens.HFilters]: THomeStackFiltersParams
  [EScreens.HFiltersResult]: THomeStackFiltersResultParams
  [EScreens.PGallery]: TProfileStackGalleryParams
}
