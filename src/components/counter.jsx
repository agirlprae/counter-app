import React, { Component } from 'react';

class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        // console.log('prevProps', prevProps);
        // console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax Call and get new data from server
        }
    }

    componentWillUnmount() {
        console.log('Counter - Unmount');
    }
    
    render() { 
        console.log('Counter - Rendered');
        // console.log('props', this.props);
        return (
            <div>
                {/* {this.state.tags.length === 0 && "Please create a new tag!"}
                {this.renderTags()} */}
                {/* <h4>{this.props.id}</h4> */}
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={ () => this.props.onIncrement(this.props.counter)}
                    className='btn btn-secondary btn-sm'
                >
                    Increment
                </button>

                <button onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger btn-sm m2"
                >
                    Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const count = this.props.counter.value;
        return count === 0 ? "Zero" : count;
    }
    
}

 
export default Counter;