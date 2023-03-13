
export const Select = (props) => {


    return (
        <div className = 'Selector'>
        <select className="form-select" aria-label="Default select example">
            {/* <option selected>Select model</option> */}
            <option>Select model</option>
            {/* <option onPointerDown={props.one_event} value="1">One</option> */}
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>
        </div>
    )
}