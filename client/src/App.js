import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header'
import UserList from './components/UserList/UserList';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div >
     <Header/>
     <UserList/>
     <Footer/>
    </div>
  );
}

export default App;
