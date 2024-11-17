import { useContext } from 'react'

import storage from '@react-native-firebase/storage'

import { LoaderContext } from '@/app/context'

export const useImageUpload = () => {
  const { setLoading } = useContext(LoaderContext)

  const uploadImage = async (image: string) => {
    const filename = image?.split('/')?.[image?.split('/')?.length - 1]

    setLoading(true)

    try {
      await storage().ref(filename).putFile(image)

      setLoading(false)

      return filename
    } catch (e) {
      setLoading(false)

      return null
    }
  }

  return { uploadImage }
}
