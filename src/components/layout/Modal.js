import React from "react";
import ReactDom from "react-dom";

import styles from "./Modal.module.css";

function Modal({open, children, onClose, action, confirm, notConfirm}) {

    if(!open) return null


    return ReactDom.createPortal(
        <>
            <div className={styles.overlay}/>
            <div className={styles.control_modal}>
                {children}
                <div >
                    <button onClick={onClose}>{notConfirm}</button>
                    <button onClick={action}>{confirm}</button>
                </div>
                
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal;