import React, {useState}  from 'react';

const Form = (props) => {

    const [name, setName] = useState("");

    const handleRadioChange = (e) =>{
        console.log(e.target.value);
        props.dispatchFunction(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.filterFunction(name);
        setName("");

    }


    return (
        <form>

            <div className="sort-container center-text" onChange={e => handleRadioChange(e)}>
                <p className="center-text" style={{ fontSize:"30px", color:"white" }}>Sort By Age?(check box to sort)</p>
                <input  type="radio" value={"asc"} name="age"/> <span style={{ fontSize:"30px", color:"white" }}>Ascending</span>
                <input  type="radio" value={"desc"} name="age"/><span style={{ fontSize:"30px", color:"white" }}>Descending</span> 
            </div>

            <div className="filter-container">
                <div>
                <label htmlFor="name"><span style={{ fontSize:"30px", color:"white" }}>Enter the name to filter by:</span></label>
                <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} value={name} />
                <button className="btn" type="submit" onClick={e => handleSubmit(e)}>Submit</button> 
                </div>
            </div>
            
        </form>
    );
};

export default Form;