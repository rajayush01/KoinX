import './App.css';
import BitcoinDashboard from './components/BitcoinDashboard';
import Navbar from './components/Navbar';
import Section from './components/Section';
import YouMayAlsoLike from './components/YouMayAlsoLike';

function App() {
  return (
    <div className='bg-[#EFF2F5] h-screen'>
      <Navbar/>
      <Section/>
      <BitcoinDashboard/>
      <YouMayAlsoLike/>
    </div>
  );
}

export default App;
