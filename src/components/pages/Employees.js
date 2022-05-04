//styles
import styles from "./Employees.module.css";

//employees
import EmpForm from "../employees/EmpForm";

function Employees() {

    function create(emp) {
        fetch("http://localhost:8080/user", {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(emp),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    }

    return (
        <div className={styles.control}>
            <div>
                <h2>Adicionar Novos Funcionários</h2>
                <EmpForm handleSubmit={create} btnText="Adicionar Funcionário"/>
            </div>        
        </div>
    )
}

export default Employees;