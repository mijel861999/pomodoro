import React from 'react';

import { connect } from 'react-redux';
import { setImportant } from '../actions';

const TodosImportants = (props) => {
    const { title, description } = props;

    const handleSetImportant = () => {
        props.setImportant({
            title, description
        })
    }

    return(
        <React.Fragment>
            <button onClick={handleSetImportant}>Agregar a Importante</button>
        </React.Fragment>
    );
}

const mapDispatchToProps = {
    setImportant
}

export default connect(null, mapDispatchToProps)(TodosImportants);