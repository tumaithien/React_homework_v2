import Items from "./Items"


function BudgetExpenses({ListData, total }) {
    return (
        <>
            <div className="expenses">
                <h2 className="expenses__title">Expenses</h2>
                <div className="expenses__list">
                    {
                        ListData.map(itemData => <Items key={itemData.id} total={total} data={itemData}/>)
                    }
                </div>
            </div>
        </>
    )
}


export default BudgetExpenses