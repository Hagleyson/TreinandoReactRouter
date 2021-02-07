import './App.css';
import Menu from "./componets/menu"
import { BrowserRouter as Routers } from "react-router-dom"
import Content from './componets/content';
import 'font-awesome/css/font-awesome.min.css';
function App() {
    return ( 
      <Routers  >
        <Menu/>
        <Content></Content>
      </Routers>
    );
}

export default App;