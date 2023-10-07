import logo from './logo.svg';
import './App.css';

import Header from './components/Header'

function App() {

  const imgStyle = {
    height: "128px",
    width : "128px"
  }
  return (
    <>
    <img src={logo} style={imgStyle} ></img>
    <Header/>
    </>
  );
}

export default App;
