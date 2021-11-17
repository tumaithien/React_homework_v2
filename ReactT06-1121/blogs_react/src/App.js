import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className="wrapper-content">
      <Header />
      <HomePage />
      <div className ="spacing" />
      <Footer />
    </div>
  );
}

export default App;
