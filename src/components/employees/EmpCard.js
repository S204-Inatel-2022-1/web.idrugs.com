import styles from "./EmpCard.module.css"

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function EmpCard({id, name, last_name, office, link_photo, email}) {
    return(
        <div className={styles.emp_card}>
            <img src={link_photo}/>
            <div>
                <h4>{name}</h4>
            </div>
            <div>
                <p>
                    <span>Email:</span> {email}
                </p>
            </div>
            <div>
                <p>
                    <span>Cargo:</span> {office}
                </p>
            </div>

            <div>
                <p>Editar</p>
                <p>Remover</p>
            </div>
        </div>
    )
}

export default EmpCard;