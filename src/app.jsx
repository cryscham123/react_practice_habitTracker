import './app.css';
import Habits from './components/habits'
import Nav from './components/nav'
import Inform from './components/inform'
import { Component } from 'react';

class App extends Component{
  state = {
    habits : [
        {
            id: 1,
            name: "Reading",
            count: 0,
        },
        {
            id: 2,
            name: "Running",
            count: 0,
        },
        {
            id: 3,
            name: "Coding",
            count: 0,
        },
    ]
  }
  handleIncrement= habit => {
    const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        habits[index].count++;
        this.setState({habits});
  }
  handleDecrement= habit => {
    const habits = [...this.state.habits];
        const index = habits.indexOf(habit);
        const count = habits[index].count - 1;
        habits[index].count = count < 0 ? 0 : count;
        this.setState({habits});
  }
  handleDelete= habit => {
    const habits = this.state.habits.filter(item => item.id !== habit.id);
        this.setState({habits});
  }
  handleAdd = name => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  }
  render() {
    return (
      <>
        < Nav
          count={this.state.habits.filter(item => item.count > 0).length}
        />
        <Inform
          onAdd={this.handleAdd}
            />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        </>
    );
  }
}

export default App;
