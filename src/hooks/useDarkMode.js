import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
    //Normal useState hook, using useLocalStorage instead!
    const [value, setValue] = useLocalStorage(key, initialValue)
    //Return out values to be used in the App
    return [value, setValue]
}