import './asset/style.css'
import BudgetHeader from './components/BudgetHeader';
import BudgetForm from './components/BudgetForm';
import BudgetList from './components/BudgetList';


function App() {
    return (
        <div className="App">
            <div>
                <BudgetHeader />
                <div className="bottom">
                    <BudgetForm />
                    <BudgetList />
                </div>
            </div>

        </div>
    );
}

export default App;
