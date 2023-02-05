'use client'


import useNewSubForm from '@/app/hooks/useNewSubForm'
import { Sub } from '../../types'


interface FormProps {
    onNewSub: (newSub : Sub) => void
}

export default function Form ({ onNewSub }: FormProps) {

    const [inputValues , dispatch] = useNewSubForm()

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(inputValues)
        handleClear()
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name , value} = e.target
        dispatch({
            type: "change_value",
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    const handleClear = () => {
        dispatch({type:"clear"})

    }

    return(
        <form onSubmit={handleSubmit} className="w-screen flex flex-col gap-5 items-center">
            <input className="input input-bordered w-full max-w-xs" type="text" name='nick' placeholder="nick" onChange={handleChange} value={inputValues.nick}/>
            <input className="input input-bordered w-full max-w-xs" type="number" name='subMonths' placeholder="subMonths" onChange={handleChange} value={inputValues.subMonths}/>
            <input className="input input-bordered w-full max-w-xs" type="text" name='avatar' placeholder="avatar" onChange={handleChange} value={inputValues.avatar}/>
            <textarea className="textarea textarea-bordered" name='description' placeholder="description" onChange={handleChange} value={inputValues.description}/>
            <button className="btn btn-active btn-primary">Save new Sub!</button>
        </form>
    )
}