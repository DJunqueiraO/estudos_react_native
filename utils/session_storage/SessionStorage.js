import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect } from "react"

export class SessionStorage {

  constructor(key = '') {
    this.key = key
  }

  get = (then = value => {}) => {
    useEffect(
      () => {
        AsyncStorage.getItem(this.key).then(then)
      },
      []
    )
  }
  
  remove = () => {
    AsyncStorage.removeItem(this.key)
  }
  
  next = (then = value => {}) => {
    useEffect(
      () => {
        AsyncStorage.getItem(this.key).then(then)
        AsyncStorage.removeItem(this.key)
      },
      []
    )
  }

  set = (value) => {
    AsyncStorage.setItem(this.key, value)
  }
}