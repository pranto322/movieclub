import AllRoutes from './routes/AllRoutes';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className='dark:bg-gray-700'>
      <Header/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
