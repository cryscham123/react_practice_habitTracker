import React, { PureComponent } from 'react';

class Inform extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();
    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    }
    render() {
        return (
            <form
                ref={this.formRef}
                className="inform"
                onSubmit={this.onSubmit}>
                <input
                    ref={this.inputRef}
                    className="inform__input"
                    type="text"
                    placeholder="Habit"></input>
                <button className="informBtn">Add</button>
            </form>
        );
    }
}

export default Inform;