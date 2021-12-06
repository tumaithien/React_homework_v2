import { formatPercentAmount, formatStringAmount } from "../store/helper"


function TotalExpenses({ total, totalIncomes }) {
    return (
        <>
            <div className="budget__expenses clearfix">
                <div className="budget__expenses--text">Expenses</div>
                <div className="right clearfix">
                    <div className="budget__expenses--value">{formatStringAmount(total)}</div>
                    {
                        total < 0 && 
                        <div className="budget__expenses--percentage">
                            {formatPercentAmount(total, totalIncomes)}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default TotalExpenses