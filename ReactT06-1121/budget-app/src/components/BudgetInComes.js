import Items from "./Items"


function BudgetInComes({ ListData }) {
    return (
        <>
            <div className="income">
                <h2 className="icome__title">Income</h2>
                <div className="income__list">
                    {
                        ListData.map(itemData => <Items key={itemData.id} data={itemData}/>)
                    }
                </div>
            </div>
        </>
    )
}


export default BudgetInComes