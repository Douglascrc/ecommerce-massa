import './App.css';
import { Content } from './Content';

function App() {
  return (
    <div className="App">
      <Content />
      <header className="App-header">
        <div className='elementH'>
          Home
        </div>
        <div className='elementH'>
          Bonés
        </div>
        <div className='elementH'>
          Camisas
        </div>
        <div className='elementH'>
          Calças
        </div>
        <div className='elementH'>
          Sapatos
        </div>
      </header>
      <body className='container'>
        <div>
          Produto
        </div>
        <div>
          <img />
        </div>
      </body>
    </div>
  );
}

export default App;
