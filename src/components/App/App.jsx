import  TableGeneratorForm from '../TableGeneratorForm/TableGeneratorForm';
import Matrix from '../Matrix/Matrix';
import store from '../../redux/store';

function App() {
  return (
    <div className="App">
     
      <TableGeneratorForm store= {store} />
      <Matrix store= {store}/>

    </div>
  );
}

export default App;
