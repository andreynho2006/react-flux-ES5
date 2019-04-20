"use strict";

var React = require('react');

var Home = React.createClass({
    render: function() {
        return(
            <div className='jumbotron'>
                <h1>Pluralsite Administration</h1>
                <p>React, React Router and Flux for ultraresponsive webpahe</p>
            </div>
        );
    }
});

module.exports = Home;