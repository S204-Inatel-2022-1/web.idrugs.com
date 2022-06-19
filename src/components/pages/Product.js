import styles from "./Product.module.css";
//layout
import Message from "../layout/Message";
import Loading from "../layout/Loading";

//Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Product() {

  const { name } = useParams()

  //product's data
  const [product, setProduct] = useState([])
  //symbol loading page
  const [removeLoading, setRemoveLoading] = useState(false)
  //Messages
  const [deleteMessage, setDeleteMessage] = useState('')
  const [addMessage, setAddMessage] = useState('')

  //GET product with 'name'
  useEffect(() => {
    fetch('https://idrugs-app.herokuapp.com/idrugs-app/pharma/product', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "name": name }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProduct(data)
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err))

  }, [])

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
        setAddMessage('Funcionário Modificado com Sucesso!')
      }).catch((err) => console.log(err))
  }

  //DELETE Employee
  function removeProduct(id) {
    fetch("https://idrugs-app.herokuapp.com/idrugs-app/pharma/product", {
      method: 'DELETE',
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({ _id: `${id}` }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setDeleteMessage('Produto Removido com Sucesso!')
      }).catch((err) => console.log(err))
  }

  return (
    <div>
      <div className={styles.control}>

        {addMessage && <Message msg={addMessage} type={"success"} />}
        {deleteMessage && <Message type={"error"} msg={deleteMessage} />}

        <div className={styles.control}>
          <div>
            <p> <span>Nome:</span> {name} </p>
            <p> <span>Marca:</span> {product.brand}     </p>

            <p> <span>Valor:</span> {product.price}    </p>
          </div>

          {!removeLoading && <Loading />}
        </div>
      </div>
    </div>
  )
}

export default Product;