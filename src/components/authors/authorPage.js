"use strict";

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./authorList');

var Authors = React.createClass({
    getInitialState: function() {
        return {
            authors: []
        };
    },

    componentDidMount: function() {
        if(this.isMounted() {
            this.setState({ authors: AuthorApi.getAllAuthors() });
        }
    },

    render: function() {
        return (
            <h1>Authors</h1>
            <AuthoList authors={this.state.authors} />
        );
    }
});

module.exports = Authors;