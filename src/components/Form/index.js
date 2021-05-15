import React from 'react';

const Form = (props) => {
    const handleRadioChange = (e) =>{
        console.log(e.target.value);
        props.dispatchFunction(e.target.value);

    }



    return (
        <form>

            <div className="sort-container center-text" onChange={e => handleRadioChange(e)}>
                <p className="center-text" style={{ fontSize:"30px" }}>Sort By Age?(check box to sort)</p>
                <input  type="radio" value={"asc"} name="age"/> Ascending
                <input  type="radio" value={"desc"} name="age"/> Descending
            </div>
            
        </form>
    );
};

export default Form;