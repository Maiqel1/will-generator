import { createContext, useState } from "react";

const WillContext = createContext()

export const WillProvider = ({children}) => {
    const [beneficiaries, setBeneficiaries] = useState([
    
    ])

    const [posessions, setPosessions] = useState([])

    const [nameAndDate, setNameAndDate] = useState({
        fullname : "",
        date: ""

    })

    const handleAddBeneficiaries = () =>{
        const ben = [...beneficiaries, []]
        setBeneficiaries(ben)
    }

    const handleAddPosessions = () =>{
        const pos = [...posessions, []]
        setPosessions(pos)
    }

    const handleChange = (onChangeValue, i) => {
        const inputData = [...beneficiaries]
        inputData[i] = onChangeValue.target.value;
        setBeneficiaries(inputData)
    }

    const handleChangePosessions = (onChangeValue, i) => {
        const inputData = [...posessions]
        inputData[i] = onChangeValue.target.value;
        setPosessions(inputData)
    }

    const handleNameAndDateChange = (e) => {
        setNameAndDate({
            ...nameAndDate, 
            [e.target.name] : e.target.value
        })
    }


    return <WillContext.Provider value={{
        beneficiaries,
        posessions,
        handleAddBeneficiaries,
        handleChange,
        handleChangePosessions,
        handleNameAndDateChange,
        handleAddPosessions,
        nameAndDate
    }}>
        {children}
    </WillContext.Provider>
}

export default WillContext