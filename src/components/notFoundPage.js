"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Not found page</h1>
                <p>Woops!!! Sorry, there is nothing to see here.</p>
                <linik to="app">Back to home</linik>
            </div>
        );
    }
});

module.exports = NotFoundPage;