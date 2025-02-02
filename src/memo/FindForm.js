import React, { useState, useEffect, memo } from 'react'
import usePersist from '../Persist'

function FindForm(props){
    const [memo, setMemo] = usePersist("memo", [])
    const [fmemo, setFMemo] = usePersist("findMemo", [])
    const [message, setMessage] = useState('')
    const [mode, setMode] = useState('mode', 'find')

    const doChange =(e) => {
        setMessage(e.target.value)
    }

    const doAction = (e) => {
        if(message == ''){
            setMode('default')
            return
        }
        let res = memo.filter((item, key)=>{
            return item.message.includes(message)
        })
        setMemo(res)
        setMode('find')
        setMessage('')
    }

    return (
        <form onSubmit={doAction} action="">
            <div className="form-group row">
                <input type="text" onChange={doChange}
                value={message} className="form-control-sm col" />
                <input type="submit" value="Find"
                className="btn btn-primary btn-sm col-2" />
            </div>
        </form>
    )
}

export default FindForm;