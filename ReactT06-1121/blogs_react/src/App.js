import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import DemoButton from './demo/DemoButton'
import DemoMainTitle from './demo/DemoMainTitle'
import DemoInput from './demo/DemoInput'

function App() {
  return (
    <div className="wrapper-content">
      <Header />
      <DemoMainTitle />
      <DemoButton />
      <DemoInput />
      <HomePage />
      <div className ="spacing" />
      <Footer />
    </div>
  );
}

export default App;
