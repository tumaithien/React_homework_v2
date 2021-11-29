import Items from "./Items"


function BudgetExpenses({ListData}) {
    return (
        <>
            <div className="expenses">
                <h2 className="expenses__title">Expenses</h2>
                <div className="expenses__list">
                    {
                        ListData.map(itemData => <Items key={itemData.id} data={itemData}/>)
                    }
                </div>
            </div>
        </>
    )
}


export default BudgetExpenses