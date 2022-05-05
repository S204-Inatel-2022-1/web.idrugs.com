import styles from "./EmpForm.module.css";

//FORM
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
//hooks
import { useState, useEffect } from "react";

function EmpForm({btnText, handleSubmit, empData}) {
    
    const [data, setData] = useState(empData || {})

    //GET request
    useEffect(() => {
        fetch('https://idrugs-app.herokuapp.com/idrugs-app/pharma/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((data) => {
                setData(data)
            })
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(data)
    }

    function handleChange(e) {
        setData({ ...data, [e.target.name]: e.target.value})
    }

    return (
        <form onSubmit={submit} className={styles.form} >
            <Input
                type="text" 
                text="Nome do Funcionario"
                name="name"
                placeholder="Digite nome do funcionário"
                handleOnChange={handleChange}
            />
            <Input
                type="text" 
                text="Ultimo Nome do Funcionario"
                name="last_name"
                placeholder="Digite último nome do funcionário"
                handleOnChange={handleChange}
            />
            <Input
                type="text" 
                text="Cargo"
                name="office"
                placeholder="Digite cargo do funcionário"
                handleOnChange={handleChange}
            />
            <Input
                type="text" 
                text="Link para foto"
                name="link_photo"
                placeholder="Digite link para foto"
                handleOnChange={handleChange}
            />
            <Input
                type="text"
                text="Email"
                name="email"
                placeholder="Digite email do funcionário" 
                handleOnChange={handleChange}
            />
            <Input
                type="password"
                text="Senha"
                name="password"
                placeholder="Digite senha do funcionário" 
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}

export default EmpForm;