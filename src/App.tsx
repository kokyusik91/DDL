import './App.css';
import Button from './Button';
import ButtonGroup from './ButtonGroups';
import Typo from './Typo';

function App() {
  return (
    <>
      <Button text="보튼" disabled={false} color="red" />
      <ButtonGroup gap="16px" direction="row">
        <Button text="보튼" disabled={false} color="red" />
        <Button text="보튼" disabled={false} color="green" />
      </ButtonGroup>

      <Typo type="h1">게시글</Typo>
    </>
  );
}

export default App;
