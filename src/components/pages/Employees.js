//styles
import styles from "./Employees.module.css";

//employees
import EmpForm from "../employees/EmpForm";
import EmpCard from "../employees/EmpCard";

//layout
import Message from "../layout/Message";
import Loading  from "../layout/Loading";

//Hooks
import { useState, useEffect } from "react";

function Employees() {

    const [employees, setEmployees] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [deleteMessage, setDeleteMessage] = useState('')
    const [addEmployee, setAddEmployee] = useState('')

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
            setAddEmployee("Funcionário Adicionado com Sucesso!")
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
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))

    }, [])


    //DELETE Employee
    function removeEmployee(id) {
        fetch("https://idrugs-app.herokuapp.com/idrugs-app/pharma/user", {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({_id: `${id}`}),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setEmployees(employees.filter((employee) => employee._id.$oid !== id))
            setDeleteMessage('Funcionário Removido com Sucesso!')
        }).catch((err) => console.log(err))
    }
    return (
        <div className={styles.control}>
            <div className={styles.control_div_emp}>
                <h1 className={styles.title}>Todos os Funcionários</h1>
                {addEmployee && <Message msg={addEmployee} type="success" /> }
                {deleteMessage && <Message type={"error"} msg={deleteMessage}/>}
                <div className={styles.control_list}>
                     {employees.length > 0 && 
                        employees.map((emp) => (
                            <EmpCard 
                                id={emp._id.$oid}
                                name={emp.name}
                                last_name={emp.last_name}
                                office={emp.office}
                                link_photo={emp.link_photo}
                                email={emp.email}
                                key={emp._id.$oid}
                                handleRemove={removeEmployee}
                            />
                        ))}
                        {!removeLoading && <Loading />}

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