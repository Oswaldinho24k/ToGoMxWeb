import React from 'react';
import '../common/DropDown'
import DropDown from "../common/DropDown";

const AddNewItem = (props) => {

    const changeCategoria = (event, index, value) => {
        props.onChange(event,index,value,'categoria');
    };

    const changeSubcategoria = (event, index, value) => {
        props.onChange(event,index,value,'subcategoria');
    };

    const changeSubsubcategoria = (event, index, value) => {
        props.onChange(event,index,value,'subsubcategoria');
    };

    return (
        <div style={styles.addnewitem}>
            <DropDown
                label="Categorias"
                value={props.categoria}
                data={props.categorias}
                onChange={changeCategoria}
                style={styles.dropdown}
            />
            <DropDown
                label="Subcategoria"
                value={props.subcategoria}
                data={props.subcategorias}
                onChange={changeSubcategoria}
                style={styles.dropdown}
            />
            <DropDown
                label="Subsubcategoria"
                value={props.subsubcategoria}
                data={props.subsubcategorias}
                onChange={changeSubsubcategoria}
                style={styles.dropdown}
            />
        </div>
    );
};

const styles = {
    addnewitem:{
        display: 'flex'
    },
    dropdown: {
        margin: 20
    }
};

export default AddNewItem;