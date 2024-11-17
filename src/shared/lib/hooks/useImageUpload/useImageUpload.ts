import { useContext } from 'react'

import storage from '@react-native-firebase/storage'

import { LoaderContext } from '@/app/context'

export const useImageUpload = () => {
  const { setLoading } = useContext(LoaderContext)

  const uploadImage = async (image: string) => {
    console.log('putFile-image', image)

    const filename = image?.split('/')?.[image?.split('/')?.length - 1]
    console.log('putFile-filename', filename)

    // return filename

    setLoading(true)

    try {
      const response = await storage().ref(filename).putFile(image)
      console.log('putFile-response', response)

      setLoading(false)

      return filename
    } catch (e) {
      console.log('putFile-e', e)

      setLoading(false)

      return null
    }
  }

  return { uploadImage }
}
