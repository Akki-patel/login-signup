// import logo from './logo.svg';
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./mycomponents/accountbox";
const Appcontainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // top:0px;
  position: absolute;
  background-image: url(G:\web development\blog\blog-site\bg\mumbai.jpg);
`;
function App() {
  return (
    <Appcontainer>
      <AccountBox />
    </Appcontainer>
  );
}

export default App;
