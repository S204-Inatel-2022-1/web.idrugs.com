import React, { useState, useEffect} from "react";

function Employees() {

    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [data, setData] = useState([{}])

    //POST request
    useEffect(() => {
        if(!inputEmail || !inputName || !inputPassword) {
            console.log("Invalid input value, returning early")
            return
        }

        fetch("/user", {
            method: 'POST',
            body: JSON.stringify({
                name: inputName,
                email: inputEmail,
                password: inputPassword
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => {
                return response.json()
            })
        .then(emp => {
                const newEmp = data.concat(emp)
                setData(newEmp)

                //clean input
                setInputEmail('')
                setInputName('')
                setInputPassword('')
                return console.log(emp)
            });
    })

    //GET request
    useEffect(() => {
        fetch("/user").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    const Change = (evt) => {
        evt.preventDefault()
        setInputName(evt.target.elements.nome.value)
        setInputEmail(evt.target.elements.email.value)
        setInputPassword(evt.target.elements.senha.value)
    }

    return (
        <div>
            <div>
                <form onSubmit={Change}>
                    <div>
                        <input 
                            type="text" 
                            name="nome"
                            placeholder="Digite nome"/>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="email"
                            placeholder="Digite email"/>
                    </div>
                    <div>
                        <input 
                            type="text" 
                            name="senha"
                            placeholder="Digite senha"/>
                    </div>
                    <div>
                        <button>Adicionar</button>
                    </div>
                </form>
            </div>

            <div>
                {data.map((item) => (
                    <ul>
                        <li key={item.id}>
                            nome:{item.name}
                        </li>

                        <li key={item.id}>
                            email:{item.email}
                        </li>

                    </ul>

                ))}
            </div>
        </div>
    )
}

export default Employees;