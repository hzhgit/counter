import React from "react";
import Counter from "../Counter";
import store from "../../store"
import { sendAction } from "../../action"

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

    handleOnclock = () => {
        const action  = sendAction();
        // store.dispatch(action);
    }

    // componentDidMount(){
    //     store.subscribe(() => {
    //         console.log("subscribe:",store.getState())
    //         this.state({})
    //     })
    // }


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
                <button onClick={this.handleOnclock}>点我发送一个action</button>
                {/* <div>{store.getState().value}</div> */}
            </div>
        )
    }

}
export default GroupCounter