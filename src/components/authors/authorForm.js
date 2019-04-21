"use strict";

var React = require('react');

var AuthorForm = React.createClass({

    render: function() {
        return (
            <form>
                <h1>Manage Author</h1>
                <label htmlfor="firstName">First Name</label>
                <input type="text"
                        name="firstName"
                        className="form-control"
                        placeholder="First name"
                        ref="FirstName"
                        value="" />
                <br />

                <label htmlfor="lastName">Last Name</label>
                <input type="text"
                        name="lastName"
                        className="form-control"
                        placeholder="Lastt name"
                        ref="LastName"
                        value="" />
                <br />

                <input type="submit" value="Save" className="btn btn-defaut" />
            </form>
        );
    }
});

module.exports = AuthorForm;