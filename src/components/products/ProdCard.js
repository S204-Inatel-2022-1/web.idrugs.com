import { Link } from 'react-router-dom';
//styles
import styles from "./ProdCard.module.css"
//Product form
//import ProdForm from "./ProdForm";
// icons
//import { BsPencil, BsFillTrashFill } from "react-icons/bs";
//hooks
//import { useState } from "react";
//LAYOUT
//import Modal from "../layout/Modal";

function ProdCard({ product }) {

  //var id = product._id.$oid
  var name = product.name
  var brand = product.brand
  var price = product.price
  //var type = product.type
  //var prescription = product.prescription
  //var description = product.description
  var phot = product.photo
  //var leaflet = product.leaflet

  function photo(phot) {
    if (phot !== "photo") {
      console.log(phot)
      return phot
    }
    return "https://cityhighschool.org/files/nophoto.png"
  }

  return (
    <>
      <div className={styles.emp_card}>
        <div className={styles.emp_card_height}>
          <Link to={`/Product/${name}`}> <img src={photo(phot)} alt="" /> </Link>
        </div>

        <Link to={`/Product/${name}`}> <h4>{name}</h4> </Link>

        <p> <span>Marca:</span> {brand}     </p>

        <p> <span>Valor:</span> {price}    </p>
      </div>
    </>
  )
}

export default ProdCard;