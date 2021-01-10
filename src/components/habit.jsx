import React, { Component } from 'react';

function Habit(props) {
    const handleIncrement = () => {
        props.onIncrement(props.habit);
    }
    const handleDecrement = () => {
        props.onDecrement(props.habit)
    }
    const handleDelete = () => {
        props.onDelete(props.habit)
    }
    const {name, count} = props.habit
        return <div className="habits__habit">
                <div className="habitState">
                    <span className="habitName">{ name }</span>
                <p className="nav__count">{count}</p>
                </div>
                <div className="habitBtn">
                    <button className="controlBtn" onClick={handleIncrement}>
                        <i className="fas fa-plus"></i>
                    </button>
                    <button className="controlBtn" onClick={handleDecrement}>
                        <i className="fas fa-minus"></i>
                    </button>
                    <button className="trashBtn" onClick={handleDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
                </div>;
}

export default Habit;