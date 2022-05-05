import { Link } from "react-router-dom";
import styles from "./EmpCard.module.css"

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function EmpCard({id, name, last_name, office, link_photo, email}) {
    return(
        <div className={styles.emp_card}>
            <img src={link_photo} alt=""/>

            <h4>{name} {last_name}</h4>

            <p> <span>Email:</span> {email}     </p>

            <p> <span>Cargo:</span> {office}    </p>

            <div className={styles.emp_card_actions}>
                <Link to="/">
                    <BsPencil /> Editar
                </Link>
                
                <button>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default EmpCard;