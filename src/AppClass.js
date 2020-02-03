import React from 'react';
import './App.css';
import Modal from './components/Modal';

class AppClass extends React.Component { 
  state = {
    modalOpen: false 
  }

  fecharModal = () => {
      this.setState({modalOpen: false});
  }

  render() {
      return (
          <div>
              <h2>Modal open -> Componente Class</h2>
              <button onClick={() => this.setState({modalOpen: true})}>
                  Exibir Modal
              </button>
              <button onClick={() => this.setState({modalOpen: false})}>
                  Remover Modal
              </button>
              
              {this.state.modalOpen && <Modal fecharModal={this.fecharModal} />}
          </div>
      );
  }
}

export default AppClass;
