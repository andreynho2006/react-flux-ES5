"use strict"

var React = require('react');

var About = React.createClass({
    render: function() {
        return (
            <div>
                <h1>About</h1>
                <p>This application use the following technologies:
                    <ul>
                        <li>React</li>
                        <li>react Router</li>
                        <li>Flux</li>
                        <li>Node</li>
                        <li>Gulp</li>
                        <li>Browserify</li>
                        <li>Bootstrap</li>
                    </ul>
                </p>
            </div>
        );
    }
});

module.exports = About;