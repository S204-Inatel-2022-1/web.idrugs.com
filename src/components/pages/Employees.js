import React, { useState, useEffect} from "react";

function Employees() {

    const [data, setData] = useState([{}])

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

    return (
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
    )
}

export default Employees;