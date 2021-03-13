import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { setTodos, deleteTodo } from '../actions';

// CSS
import './styles/Todos.css'


const Todos = ( props ) => {
    const { todos1 } = props;

    const [currentInput, setCurrentInput] = useState();
    

    const inputChanged = (event) =>{
        let todoInFunction=currentInput;
        todoInFunction = event.target.value;
        setCurrentInput(todoInFunction);
    }

    const addTodo = (event) => {
        event.preventDefault();
        props.setTodos(currentInput)
    }

    const handleDeleteTodo = (item,index) =>{
        props.deleteTodo(index);
        console.log(index)
    }


    return (
        <React.Fragment>
            <header>
                <h1>To do</h1>
            </header>
            <form className="form-container">
                <input 
                    type="text" 
                    className="todo-input"
                    value={currentInput}
                    onChange={inputChanged}
                />
                <button 
                    onClick={addTodo} 
                    className="todo-button" 
                    type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
            <div className="todo-container">
                <ul className="todo-list">
                    {
                        todos1.map((item, index)=>{
                            return(
                                <div className="todo">
                                    <li 
                                        key={index} 
                                        className="todo-item">
                                        {index+1}: {item}
                                    </li>
                                    <button className="complete-btn"></button>
                                    <button 
                                        className="trash-btn"
                                        onClick={()=> handleDeleteTodo(item,index)}
                                    ></button>
                                </div>
                            );
                        })
                    }
                </ul>
            </div>


        </React.Fragment>
    );
}

const mapDispatchToProps = {
    setTodos,
    deleteTodo,
}

// export default Todos;
export default connect(null, mapDispatchToProps)(Todos);