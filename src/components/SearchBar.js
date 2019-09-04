import React from 'react';

class SearchBar extends React.Component {

    state = { term: ''}

    onInputChange = (e) => {
        this.setState({ term: e.target.value })
        console.log(e.target.value);
    }

    onFormSubmit = async (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div style={{ marginTop: '20px' }}>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Search Pics</label>
                        <div className="ui fluid massive icon input">
                            <input type="text" placeholder="Search massive..."
                                onChange={this.onInputChange} value={this.state.term} />
                            <i className="search icon"></i>
                        </div>
                    </div>
                    <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default SearchBar;