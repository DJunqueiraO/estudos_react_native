import { useState } from 'react'

export class UseStateObject {

    constructor(
        get = (or) => (null || or),
        set = () => {}
    ) {
        this.get = get
        this.set = set
    }
}

export const useStateAsObject = (initialState) => {
    const [value, set] = useState(initialState)
    const get = (or) => (value || or)
    return new UseStateObject(get, set)
}