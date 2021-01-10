import React, { Component } from 'react';
import Habit from "./habit";

class Habits extends Component {
    handleIncrement = habit => {
        this.props.onIncrement(habit)
    }
    handleDecrement = habit => {
        this.props.onDecrement(habit)
    }
    handleDelete = (habit) => {
        this.props.onDelete(habit)
    }
    handleAdd = () => {
        console.log("It work!");
    }
    render() {
        return (
            <div>
                <div className="habits">
                    {this.props.habits.map(habit => (
                        <Habit
                            key={habit.id}
                            habit={habit}
                            onIncrement={this.handleIncrement}
                            onDecrement={this.handleDecrement}
                            onDelete={this.handleDelete}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Habits;