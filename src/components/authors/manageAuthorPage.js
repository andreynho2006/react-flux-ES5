"use strict";

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({

    render: function() {
        return (
            <h1>Manage Author</h1>
            <AuthorForm />
        );
    }
});

module.exports = ManageAuthorPage;