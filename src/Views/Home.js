import React, { Component } from 'react';
import Data from "./data.json";

class Home extends Component {

    state = {
        data: Data
    }

    checkChange = (id, checked) => {
        const jsonData = this.state.data;
        const checkID = id;
        const isChecked = checked
        for(let key in jsonData) {
            jsonData[key].map(data => {
                if(data.id === checkID){
                    data.isChecked = !isChecked;
                    return data
                }
                else {
                    return data
                }
            })
            this.setState({
                jsonData
            })
        }
    }

    render() {
        const groupingArr = [];
        const value = this.state.data;
        if (value) {
            for (let key in value) {
                let first = (
                    <main>
                        <h4 className="check-heading">{key}</h4>
                        {value[key].map((check, index) => {
                            return(
                                <label className="customcheck" key={index}>{check.name}
                                    <input type="checkbox" id={check.id} checked={check.isChecked} onChange={() => this.checkChange(check.id, check.isChecked)} />
                                    <span htmlFor={check.id} className="checkmark"></span>
                                </label>
                            )
                        })}
                    </main>
                )
                groupingArr.push(first);
            }
        }

        const outputArr = []
        if(value) {
            for(let key in value) {
                let output = (
                    <main>
                        <h4 className="check-heading">{key}</h4>
                        {value[key].map((val, index) => {
                            if(val.isChecked){
                                return (
                                    <React.Fragment key={index}>
                                        <div className="data-list">
                                            <span className="text">{val.name}</span>
                                            <span className="cross" onClick={() => this.checkChange(val.id, val.isChecked)}>x</span>
                                        </div>
                                    </React.Fragment>
                                )
                            }
                        })}
                    </main>
                )
                outputArr.push(output)
            }
        }

        return (
            <div className="card-center">
                <div id="box-1" className="box">
                    {groupingArr.map((el, index) => {
                        return (
                            <div key={index}>{el}</div>
                        )
                    })}
                </div>
                <div id="box-2" className="box">
                    {outputArr.map((data, index) => {
                        return (
                            <div key={index}>{data}</div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Home;
