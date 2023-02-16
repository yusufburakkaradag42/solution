
import '../src/App.scss';
import Header from './companents/Header/Header';
import Main from './companents/Main/Main';
import Navbar from './companents/Navbar/Navbar';

const App = ()=>{
  return (
    <div  className="App">
    <Navbar/>
    <Header/>
    <Main/>
    </div>
  )
}

export default App;
