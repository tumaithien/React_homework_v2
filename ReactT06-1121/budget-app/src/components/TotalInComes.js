import { formatStringAmount } from "../store/helper"


function TotalInComes({ total, totalList }) {
    
    return (
        <>
            <div className="budget__income clearfix">
                <div className="budget__income--text">Income</div>
                <div className="right">
                    <div className="budget__income--value">{formatStringAmount(total)}</div>
                    <div className="budget__income--percentage">&nbsp;</div>
                </div>
            </div>
        </>
    )
}

export default TotalInComes