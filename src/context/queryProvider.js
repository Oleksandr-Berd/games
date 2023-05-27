import { Component } from "react";
import queryContext from "./queryContext";

export default class QueryProvider extends Component{
    state = {
        query: null,
        search: (query) => {
            this.setState({ query: query });
        }
    }

    render() {
        return (
            <queryContext.Provider value={this.state}>
                {this.props.children}
            </queryContext.Provider>
        )
    }
}