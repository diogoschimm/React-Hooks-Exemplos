import React, { useState }  from 'react';
import './App.css';
import Modal from './components/Modal';

function AppHooks() {

    const [ modalOpen, setModalOpen ] = useState(false);

    function fecharModal(){
        setModalOpen(false);
    }
 
    return (
        <div>
            <h2>Modal open -> Componente function</h2>
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
export default AppHooks;