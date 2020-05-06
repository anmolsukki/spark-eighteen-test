import React, { Component } from 'react';

class Home extends Component {

    state = {
        portugal: {},
        nicaragua: {},
        islands: {}
    }

    handlePortugalChange = (e) => {
        const { portugal } = this.state;
        portugal[e.target.name] = e.target.checked;
        if(!portugal[e.target.name]) delete portugal[e.target.name]
        this.setState({
            portugal: portugal
        });
    }

    handleNicaraguaChange = (e) => {
        const { nicaragua } = this.state;
        nicaragua[e.target.name] = e.target.checked;
        if(!nicaragua[e.target.name]) delete nicaragua[e.target.name]
        this.setState({
            nicaragua: nicaragua
        });
    }

    handleIslandsChange = (e) => {
        const { islands } = this.state;
        islands[e.target.name] = e.target.checked;
        if(!islands[e.target.name]) delete islands[e.target.name]
        this.setState({
            islands: islands
        });
    }

    render() {
        const renderPortugal = Object.keys(this.state.portugal)
        const renderNicaragua = Object.keys(this.state.nicaragua)
        const renderIslands = Object.keys(this.state.islands)
        
        return (
            <div className="card-center">
                <div id="box-1" className="box">
                    <h4 className="check-heading">Portugal</h4>
                    <label className="customcheck">Aasiya Jayavant
                        <input type="checkbox" id="1" name="Aasiya Jayavant" onChange={this.handlePortugalChange} />
                        <span htmlFor="1" className="checkmark"></span>
                    </label>
                    <label className="customcheck">Luvleen Lawrence
                        <input type="checkbox" id="2" name="Luvleen Lawrence" onChange={this.handlePortugalChange} />
                        <span htmlFor="2" className="checkmark"></span>
                    </label>
                    <label className="customcheck">Rey Mibourne
                        <input type="checkbox" id="3" name="Rey Mibourne" onChange={this.handlePortugalChange} />
                        <span htmlFor="3" className="checkmark"></span>
                    </label>
                    <label className="customcheck">Cayla Brister
                        <input type="checkbox" id="4" name="Cayla Brister" onChange={this.handlePortugalChange} />
                        <span htmlFor="4" className="checkmark"></span>
                    </label>

                    <h4 className="check-heading">Nicaragua</h4>
                    <label className="customcheck">Daveedaas Nandi
                        <input type="checkbox" id="5" name="Daveedaas Nandi" onChange={this.handleNicaraguaChange} />
                        <span htmlFor="5" className="checkmark"></span>
                    </label>
                    <label className="customcheck">Obasey Chidy
                        <input type="checkbox" id="6" name="Obasey Chidy" onChange={this.handleNicaraguaChange} />
                        <span htmlFor="6" className="checkmark"></span>
                    </label>
                    <label className="customcheck">Xenie Dolezelova
                        <input type="checkbox" id="7" name="Xenie Dolezelova" onChange={this.handleNicaraguaChange} />
                        <span htmlFor="7" className="checkmark"></span>
                    </label>
                    <label className="customcheck">Ezequlel Dengra
                        <input type="checkbox" id="8" name="Ezequlel Dengra" onChange={this.handleNicaraguaChange} />
                        <span htmlFor="8" className="checkmark"></span>
                    </label>

                    <h4 className="check-heading">Marshall Islands</h4>
                    <label className="customcheck">Aaron Almaraz
                        <input type="checkbox" id="9" name="Aaron Almaraz" onChange={this.handleIslandsChange} />
                        <span htmlFor="9" className="checkmark"></span>
                    </label>
                    <label className="customcheck">Jelena Denesova
                        <input type="checkbox" id="10" name="Jelena Denesova" onChange={this.handleIslandsChange} />
                        <span htmlFor="10" className="checkmark"></span>
                    </label>
                </div>
                <div id="box-2" className="box">
                    {renderPortugal.length > 0 ? <h4 className="check-heading">Portugal</h4> : null}
                    {renderPortugal.map((data, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className="data-list">
                                <span className="text">{data}</span>
                                    <span className="cross">x</span>
                                </div>
                            </React.Fragment>
                        )
                    })}
                    {renderNicaragua.length > 0 ? <h4 className="check-heading">Nicaragua</h4> : null}
                    {renderNicaragua.map((data, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className="data-list">
                                    <span className="text">{data}</span>
                                    <span className="cross">x</span>
                                </div>
                            </React.Fragment>
                        )
                    })}
                    {renderIslands.length > 0 ? <h4 className="check-heading">Marshall Islands</h4> : null}
                    {renderIslands.map((data, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className="data-list">
                                    <span className="text">{data}</span>
                                    <span className="cross">x</span>
                                </div>
                            </React.Fragment>
                        )
                    })}
                    {renderPortugal.length === 0 && renderNicaragua.length === 0 && renderIslands.length === 0 ? <h4 className="no-value">No Value Selected</h4> : null}
                </div>
            </div>
        )
    }
}

export default Home;
