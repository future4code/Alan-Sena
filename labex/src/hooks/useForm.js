import { useState } from "react"

export const useForm = (inicialState) => {
    const [form, setForm] = useState(inicialState)

    const onChange = (e) => {
        const newVallue = e.target.value
        const fieldName = e.target.name

        setForm({...form, [fieldName]: newVallue})
    }

    return [form, onChange]
}