//styles
import styles from "./Products.module.css";

//layout
import Message from "../layout/Message";
import Loading  from "../layout/Loading";

//products
import ProdCard from "../products/ProdCard";

//Hooks
import { useState, useEffect } from "react";

function Products () {

    //products's data
    const [products, setProducts] = useState([])
    //symbol loading page
    const [removeLoading, setRemoveLoading] = useState(false)

    //Messages
    const [deleteMessage, setDeleteMessage] = useState('')
    const [addMessage, setAddMessage] = useState('')

    //GET all employees
    useEffect(() => {

        fetch('https://idrugs-app.herokuapp.com/idrugs-app/pharma/product', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => res.json())
        .then((data) => {
            setProducts(data)
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))

    }, [])

    //CREATE - method POST
    function createProduct(prod) {
        fetch("https://idrugs-app.herokuapp.com/idrugs-app/pharma/product", {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(prod),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setAddMessage("Produto Adicionado com Sucesso!")
        })
    }

    //UPDATE (PUT) Product
    function updateProduct(prod) {
        fetch("https://idrugs-app.herokuapp.com/idrugs-app/pharma/product", {
            method: 'PUT',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(prod),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            //setEmployees(employees.filter((employee) => employee._id.$oid !== id))
            //setDeleteMessage('Funcionário Removido com Sucesso!')
        }).catch((err) => console.log(err))
    }

    //DELETE Employee
    function removeProduct(id) {
        fetch("https://idrugs-app.herokuapp.com/idrugs-app/pharma/product", {
            method: 'DELETE',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify({_id: `${id}`}),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setProducts(products.filter((product) => product._id.$oid !== id))
            setDeleteMessage('Produto Removido com Sucesso!')
        }).catch((err) => console.log(err))
    }

    return (
        <div className={styles.control}>
            <div className={styles.control_div_emp}>
                <h1 className={styles.title}>Todos os Produtos</h1>

                {addMessage && <Message msg={addMessage} type={"success"} /> }
                {deleteMessage && <Message type={"error"} msg={deleteMessage}/>}

                <div className={styles.control_list}>
                     {products.length > 0 && 
                        products.map((prod) => (
                            <ProdCard 
                                product={prod}
                                handleRemove={removeProduct}
                                handleEdit={updateProduct}
                                key={prod._id.$oid}
                            />
                        ))}
                        {!removeLoading && <Loading />}
                </div>
            </div>    
        </div>
    )
}

export default Products;