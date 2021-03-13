// React
import React from 'react';
import { connect } from 'react-redux';

// Components
import Counter from '../components/Counter';
import Todos from '../components/Todos'

const Pomodoro = ({todos}) => {

    const escribir = () =>{
        console.log(todos);
    }
    
    return(
        <React.Fragment>
            <Todos todos1={todos}>
                    
            </Todos>
            <Counter>
            </Counter>
            
        </React.Fragment>
    );
}

const mapStateToProps = state => {
    return {
        todos : state.todos,
    }
}

// export default Pomodoro;
export default connect(mapStateToProps, null)(Pomodoro);