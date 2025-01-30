import React, { useState } from 'react'

function usePersist(ky, initVal){
    const key = "hooks:" + ky
    const value = () => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initVal
        } catch(err){
            consoke.log(err)
            return initVal
        }
    }
    const [savedValue, setSavedValue] = useState(value)

    return [savedValue, setValue]
}

export default usePersist;