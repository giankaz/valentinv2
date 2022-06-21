import './App.css';
import FirstHome from './components/FirstHome';
import Footer from './components/Footer';
import SecondHome from './components/SecondHome';
import Global from './styles/global';

function App() {
  return (
    <div className="App">
        <Global/>
        <FirstHome/>
        <SecondHome/>
        <Footer/>
    </div>
  );
}

export default App;
