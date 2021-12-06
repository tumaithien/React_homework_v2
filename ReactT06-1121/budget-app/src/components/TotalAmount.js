import { calTotalMonth } from "../store/helper"


function TotalAmount({
    totalIncomes,
    totalExpenses
}){
    return(
        <>
            <div className="budget__value">{ calTotalMonth(totalIncomes, totalExpenses) }</div>
        </>
    )
}

export default TotalAmount