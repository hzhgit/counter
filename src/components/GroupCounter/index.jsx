import React from "react";
import Counter from "../Counter";

class GroupCounter extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            numberOfCounters: 0,
            total: 0
        }
    }

    increase = () => {
        this.setState({ total: this.state.total + 1 })
    }

    reduce = () => {
        this.setState({ total: this.state.total - 1 })
    }

    UpdateNumberOfCounters = (e) => {
        this.setState({ numberOfCounters: e.target.value, total: 0 })
    }


    render() {
        return (
            <div>
                <p>Total: {this.state.total}</p>
                <p>Number of Counters: <input type="number" onChange={this.UpdateNumberOfCounters} /></p>
                <div>
                    {new Array(Number(this.state.numberOfCounters)).fill(0).map((item, index) => {
                        return <Counter key={index} increase={this.increase} reduce={this.reduce}
                            numberOfCounters={this.state.numberOfCounters} />
                    })}
                </div>
            </div>
        )
    }

}
export default GroupCounter