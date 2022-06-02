import styles from "./Product.module.css";

function Product() {
    return(
        <div>
             <div className={styles.prod_card}>
                
                <button onClick={openEditModal}>
                    <BsPencil /> Editar
                </button>
                <Modal open={editModal} >
                    <div>
                        <ProdForm handleSubmit={handleEdit} btnText="Salvar" empData={product}/>
                        <button onClick={closeEditModal}>Cancelar</button>
                    </div>
                </Modal>

                
                <button onClick={openDeleteModal}>
                    <BsFillTrashFill /> Excluir
                </button>
                <Modal open={deleteModal} >
                    <div>
                        <p>Tem certeza que deseja excluir esse Produto ?</p>
                        <button onClick={closeDeleteModal}>Cancelar</button>
                        <button onClick={remove}>Excluir</button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Product;