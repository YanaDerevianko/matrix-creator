import TableGeneratorForm from "../TableGeneratorForm/TableGeneratorForm";
import Matrix from "../Matrix/Matrix";
import {Container, Title, SubTitle} from './App.styled';

function App() {
  return (
    <Container>
      <Title>Here you can create a magic matrix &#128525;</Title>
      <SubTitle>The magic table must have at least one row and column</SubTitle>
      <TableGeneratorForm />
      <Matrix />
    </Container>
  );
}

export default App;
