import { Link } from "react-router-dom";
import styles from "./EmpCard.module.css"

import { BsPencil, BsFillTrashFill } from "react-icons/bs";
//hooks
import { useState } from "react";
//LAYOUT
import Modal from "../layout/Modal";

function EmpCard({id, name, last_name, office, photo_link, email, handleRemove}) {

    function photo(photo_link) {
        if(photo_link){
            console.log(photo_link)
            return photo_link
        }
        console.log(photo_link)
        return "https://cityhighschool.org/files/nophoto.png"
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function openModal() {
        setModalIsOpen(true);
    }

    function closeModal() {
        setModalIsOpen(false);
    }

    const remove = (e) => {
        e.preventDefault()
        console.log(id)
        handleRemove(id)
    }

    return(
        <>
            <div className={styles.emp_card}>
                <div className={styles.emp_card_height}>
                    <img src={photo(photo_link)} alt=""/>
                </div>

                <h4>{name} {last_name}</h4>

                <p> <span>Email:</span> {email}     </p>

                <p> <span>Cargo:</span> {office}    </p>

                <div className={styles.emp_card_actions}>
                    <Link to="/">
                        <BsPencil /> Editar
                    </Link>

                    <button onClick={openModal}>
                        <BsFillTrashFill /> Excluir
                    </button>

                    <Modal
                        open={modalIsOpen} 
                        action={remove}
                        onClose={closeModal} 
                        confirm='Excluir' 
                        notConfirm='Cancelar'
                    >
                        <p>Tem certeza que deseja excluir esse funcionário ?</p>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default EmpCard;