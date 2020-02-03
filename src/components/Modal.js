import React from 'react';
import { Container } from './Modal.Styles';

class Modal extends React.Component {
    render() {
        return (
            <Container>
                Modal do Sistema
                <button onClick={() => this.props.fecharModal()}>Fechar</button>
            </Container>
        )
    }
}

export default Modal;