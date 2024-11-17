import { EStoreReducer, TRootState } from '@/app/store'

export const getNoteSelector = (state: TRootState) => state[EStoreReducer.note]
