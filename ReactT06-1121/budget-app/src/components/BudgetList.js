import BudgetInComes from "./BudgetInComes"
import BudgetExpenses from "./BudgetExpenses"
import { useSelector } from 'react-redux'
import { selectListIcomes } from "../store/selector"


function BudgetList() {
    const listData = useSelector(selectListIcomes)
    const ListDataIncomes = listData.filter(dataItem => dataItem.amount > 0)
    const ListDataExpenses = listData.filter(dataItem => dataItem.amount < 0)

    return (
        <>
            <div className="container clearfix">
                <BudgetInComes ListData={ListDataIncomes} />
                <BudgetExpenses ListData={ListDataExpenses} />
            </div>
        </>
    )
}


export default BudgetList