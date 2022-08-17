import { Routes, Route} from "react-router-dom"
import './App.css';
import Response from './components/Response'
import Create from './components/Create'
import Home from './components/Home'
import Header from './components/Header'
import Container from '@mui/material/Container';
import store from './store/store'
import {Provider} from 'react-redux';


function App() {
  return (
<div className="App">
<Container container justify = "center" fixed>
     
<Header />

 <br />
 <Provider store={store}>
<Routes>
     
<Route path="/" element={ <Home/> }  />
<Route path="new" element={ <Create/> } />
<Route path="response" element={ <Response/> } />      
   
    
</Routes>
 </Provider>
</Container>
</div>    
    

  );
}

export default App;



