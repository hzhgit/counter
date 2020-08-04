import React from 'react'

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            numberOfCounters: props.numberOfCounters
        }
    }

    increase  = () => {
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count)
        this.props.increase ()
    }

    reduce = () => {
        this.setState({ count: this.state.count - 1})
        this.props.reduce()
    }


    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.numberOfCounters !== nextProps.numberOfCounters) {
            return {
                count: 0,
                numberOfCounters: nextProps.numberOfCounters
            }
        }
        return null;
    }

    render() {
        return (
            <div>
                <button onClick={this.increase }>+</button>
                <mark>{this.state.count}</mark>
                <button onClick={this.reduce}>-</button>
            </div>
        )
    }

}

export default Counter