var React = require('react');

var Repos = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    },
    render: function() {
        console.log('Repos', this.props.repos);
        return (
            <div>
                <p>REPOS</p>

            </div>
        )
    }
})

module.exports = Repos;
