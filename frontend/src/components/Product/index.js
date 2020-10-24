import React, {useContext} from "react";
import "./styles.css";
import ThemeContext from "../../context/ThemeContext"

function Product(props) {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="product"  style={{ background: theme.background }}>
            
            <h3>{props.nome}</h3>
            <ul>
                <li>{props.descricao}</li>
                <li>Preço: R$ {props.preco}</li>
            </ul>
            
            <div className="content"> 
                <button onClick={toggleTheme}>
                Toggle theme
                </button>
            </div>
        </div>
            
    )
       
};

export default Product;