import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import RoutesComponent from './Routes';
import './styles/main.css'


function App() {
  return (
    <Router>
      <div>
          <Header />
          <RoutesComponent />
      </div>
    </Router>
  );
}




export default App
