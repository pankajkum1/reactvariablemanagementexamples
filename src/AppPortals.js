import React from 'react';
import ReactDOM from 'react-dom';

const GifPortal = (props) => {
  return ReactDOM.createPortal(
    <img src={ props.gifPath } alt="Gif Portal" width="200" height="200" />,
    document.querySelector('#portal')
  );
};

const App = (props) => {
  return <GifPortal gifPath={ props.gifPath }/>;
};

export default App;


/*
import React from 'react';
import ReactDOM from 'react-dom';

const ModalPortal = (props) => {
  return ReactDOM.createPortal(
    <div
      style={{
        background: 'rgba(0,0,0,0.7)',
        height: '100vh',
        left: 0,
        position: 'fixed',
        top: 0,
        width: '100vw',
      }}
    >
      <div style={{ background: 'white', margin: 16, padding: 16 }}>
        {props.children}
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export default class App extends React.Component {

  state = {
    modalIsOpen: false,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };


  render() {
    return (
      <div>
        <h1>Portals in React</h1>
        <button onClick={this.openModal}>Open Modal</button>
        {this.state.modalIsOpen && (
          <ModalPortal>
            <p>This text is opened in a Portal.</p>
            <button onClick={this.closeModal}>Close Modal</button>
          </ModalPortal>
        )}
      </div>
    );
  }
}


*/