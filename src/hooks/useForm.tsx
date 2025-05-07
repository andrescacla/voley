import { useState } from "react"


export const useForm = <T extends object>(initialState: T) => {
    const [formState, setFormState] = useState<T>(initialState)

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const onResetForm = () => {
        setFormState(initialState)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}