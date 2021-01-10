import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav__icon">
                    <i className="fas fa-leaf"></i>
                </div>
                <span className="title">Habit Tracker</span>
                <p className="nav__count">{this.props.count}</p>
            </div>
        );
    }
}

export default Nav;