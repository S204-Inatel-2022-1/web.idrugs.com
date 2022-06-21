//layout
import Message from "../layout/Message";
import Loading  from "../layout/Loading";
//Hooks
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Department() {

  //department name
  const { name } = useParams()

  // all products from department 
  const [data, setData] = useState({})
  //symbol loading page
  const [removeLoading, setRemoveLoading] = useState(false)

  //GET all employees
  useEffect(() => {

    fetch('https://idrugs-app.herokuapp.com/idrugs-app/pharma/product', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "type": name }),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setRemoveLoading(true)
      })
      .catch((err) => console.log(err))

  }, [])

  return (
    <div>
      <div>
        <div>
          {data.length > 0 &&
            data.map((prod) => (
              <div key={prod._id.$oid}>
                <p> <span>Nome:</span> {prod.name} </p>
                <p> <span>Marca:</span> {prod.brand}     </p>

                <p> <span>Valor:</span> {prod.price}    </p>
              </div>
            ))}
        </div>

        {!removeLoading && <Loading />}
      </div>
    </div>
  )
}

export default Department;