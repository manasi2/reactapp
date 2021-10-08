import logo from './logo.svg';
import './App.css';
import { buildQueries } from '@testing-library/dom';

function App() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    const id=e.target.pid.value;
    const name=e.target.pname.value;sd
    const qtyPerUnit=e.target.pqtyPerUnit.value;
    const unitPrice=e.target.punitPrice.value;
    const unitInStock=e.target.punitInStock.value;
    const discontinued=e.target.pdiscontinued.value;
    const categoryId=e.target.pcategoryId.value;
    console.log("Product Id:"+id,"\n","Product Name:"+name,"\n","Product qtyPerUnit:"+qtyPerUnit,"\n","Product unitPrice:"+unitPrice,"\n","Product unitInStock:"+unitInStock,"\n","Product discontinued:"+discontinued,"\n","categoryId:"+categoryId,"\n")

  }
  return (
    <div>
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shop
        </a>
      </header>
    <form onSubmit={handleSubmit}>
      <input type="number" name="pid" placeholder="productId"/><br/><br/>
      <input type="text" name="pname" placeholder="productname"/><br/><br/>
      <input type="number" name="pqtyPerUnit" placeholder="qtyPerUnit"/><br/><br/>
      <input type="number" name="punitPrice" placeholder="product unitPrice"/><br/><br/>
      <input type="number" name="punitInStock" placeholder="product unitInStock"/><br/><br/>
      <input type="number" name="pdiscontinued" placeholder="productdiscontinued"/><br/><br/>
      <input type="number" name="pcategoryId" placeholder="productcategoryId"/><br/><br/>
      <button>Submit</button>
    </form>
    
    </div>
  );
}

export default App;
