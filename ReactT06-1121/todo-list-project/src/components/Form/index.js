

function FormAdd() {
    return (
        <>
            <div className="row">
                <div className="col-md-offset-7 col-md-5">
                    <form action="true" method="POST" className="form-inline">
                        <div className="form-group">
                            <label className="sr-only" htmlFor="true">label</label>
                            <input type="text" className="form-control" placeholder="Task Name" />
                        </div>
                        <div className="form-group">
                            <label className="sr-only" htmlFor="true">label</label>
                            <select name="ds" id="inputDs" className="form-control" required="required">
                                Small
                                <option value={1}>Medium</option>
                                <option value={2}>High</option>
                            </select>
                        </div>
                        <button type="button" className="btn btn-primary">Submit</button>
                        <button type="button" className="btn btn-default">Cancel</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default FormAdd