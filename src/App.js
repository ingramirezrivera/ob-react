import logo from './logo.svg';
import './App.css';
import Example from '../src/hooks/Example.jsx'
import { Expample2 } from './hooks/Expample2';
import { MiComponenteConContexto } from './hooks/Example3';
import { Example4 } from './hooks/Example4';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Example /> */}
        <h1>------------------------------------------</h1>
        {/* <Expample2 /> */}
        {/* <MiComponenteConContexto /> */}
        <Example4 name={ "Martín" }>
          {/* Todo lo que hay aqui dentro es tratado como props.children en cualquier componente */}
          <h3>
            Contenido del props.children
            Este ejemplo es con destructuración
          </h3>
        </Example4>
      </header>
    </div>
  );
}

export default App;
