import './App.css';
import {Routes,Route} from 'react-router-dom'
import {BookingForm} from './Components/BookingForm'
import { Profile } from './Components/Profile';
import { Header } from './Components/Header';
function App() {
  return (
    <div className="App">
    <Header/>

    <Profile/>
    <BookingForm/>
    <Routes>
      <Route path='/'component={<Profile/>}/>
      <Route path='/'component={<BookingForm/>}/>

      
    </Routes>

    
    </div>
  );
}

export default App;
