import TotalAmount from "./TotalAmount"
import TotalExpenses from "./TotalExpenses"
import TotalInComes from "./TotalInComes"
import { useSelector } from 'react-redux'
import { selectListIcomes } from "../store/selector"
import { calTotalAmount } from "../store/helper"

function BudgetHeader(){

    const listData = useSelector(selectListIcomes)

    const totalIncomesHeader = listData.filter(dataTotal => dataTotal.amount > 0)
    const totalExpensesHeader = listData.filter(dataTotal => dataTotal.amount < 0)

    const totalAmountIcomes_Header = calTotalAmount(totalIncomesHeader)
    const totalAmountExpenses_Header = calTotalAmount(totalExpensesHeader)

    return(
        <>
            <div className="top">
                <div className="budget">
                    <div className="budget__title">
                        Available Budget in <span className="budget__title--month">%Month%</span>:
                    </div>
                    <TotalAmount totalIncomes={totalAmountIcomes_Header} totalExpenses={totalAmountExpenses_Header} />
                    <TotalInComes totalList={totalIncomesHeader} total={totalAmountIcomes_Header} />
                    <TotalExpenses totalList={totalExpensesHeader} totalIncomes={totalAmountIcomes_Header} total={totalAmountExpenses_Header} />
                </div>
            </div>
        </>
    )
}


export default BudgetHeader