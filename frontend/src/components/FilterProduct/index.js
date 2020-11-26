import React, { useState } from 'react';

function FilterProduct({plural_name, singular_name, categories, functionFilter}) {
    const optionDefault =  { text: "Selecione uma "+singular_name, value: 0 }
    const [select, setSelect] = useState(optionDefault);

    var handleChange = (event) => {
        setSelect(event.target.value);
        functionFilter("category", event.target.value)
    }

    var text_label = () =>{
        return plural_name ? "Filtrar por "+(plural_name)+":" : "Filtrar"
    }

    return (<>
        <form>
            <div className="form-group">
                <br />
                <label> {text_label()} </label>
                <select className="form-control" id="FormControlSelect" value={select} onChange={handleChange}>
                <option value={optionDefault.value}>{optionDefault.text}</option>
                    {
                        categories.map((category, index) => {
                            return (
                                <option key={index} value={category} >{category}</option>
                            );
                        })
                    }
                </select>
                <br />
                <br />
            </div>
        </form>
    </>);
}
export default FilterProduct;