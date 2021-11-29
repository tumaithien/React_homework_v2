import TotalAmount from "./TotalAmount"
import TotalExpenses from "./TotalExpenses"
import TotalInComes from "./TotalInComes"

function BudgetHeader(){
    return(
        <>
            <div className="top">
                <div className="budget">
                    <div className="budget__title">
                        Available Budget in <span className="budget__title--month">%Month%</span>:
                    </div>
                    <TotalAmount />
                    <TotalInComes />
                    <TotalExpenses />
                </div>
            </div>
        </>
    )
}


export default BudgetHeader