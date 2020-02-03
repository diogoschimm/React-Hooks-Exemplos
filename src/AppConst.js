import React, { useState } from 'react';
import Modal from './components/Modal';

const AppConst = () => {

    const [modalOpen, setModalOpen] = useState(false);

    function fecharModal() {
        setModalOpen(false);
    }

    return (
        <div>
            <h2>Modal open -> Componente Const</h2>
            <button onClick={() => setModalOpen(true)}>
                Exibir Modal
            </button>
            <button onClick={() => setModalOpen(false)}>
                Remover Modal
            </button>
            
            {modalOpen && <Modal fecharModal={fecharModal} />}
        </div>
    )
}

export default AppConst;