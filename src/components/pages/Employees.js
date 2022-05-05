//styles
import styles from "./Employees.module.css";

//employees
import EmpForm from "../employees/EmpForm";
import EmpCard from "../employees/EmpCard";

//layout
import Message from "../layout/Message";

//Hooks
import { useState, useEffect } from "react";

function Employees() {

    const [employees, setEmployees] = useState([])
    let messag = ''

    //method POST
    function create(emp) {
        fetch("https://idrugs-app.herokuapp.com/idrugs-app/pharma/user", {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(emp),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            messag = "Funcionário Adicionado com Sucesso!"
            console.log(messag)
        })
    }

    //GET all employees
    useEffect(() => {

        fetch('https://idrugs-app.herokuapp.com/idrugs-app/pharma/user', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setEmployees(data)
        })
        .catch((err) => console.log(err))

    }, [])

    return (
        <div className={styles.control}>
            <div className={styles.control_div_emp}>
                <h1 className={styles.title}>Todos os Funcionários</h1>
                { messag && <Message msg={messag} type="success" /> }

                <div className={styles.control_list}>
                     {employees.length > 0 && 
                        employees.map((emp) => (
                            <EmpCard 
                                id={emp._id.$oid}
                                name={emp.name}
                                last_name={emp.last_name}
                                office={emp.office}
                                link_photo="https://img.elo7.com.br/product/original/3EECB71/desenho-personalizado-para-usar-de-foto-de-perfil-e-etc-personalizado.jpg"
                                email={emp.email}
                                key={emp._id.$oid}
                            />
                        ))}
                </div>
            </div>

            <div className={styles.control_add}>
                <h2 className={styles.title}>Adicionar Novos Funcionários</h2>
                <EmpForm handleSubmit={create} btnText="Adicionar Funcionário"/>
            </div>        
        </div>
    )
}

export default Employees;