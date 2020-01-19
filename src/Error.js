import React, {Component} from 'react';

class Error extends Component {
	render() {
    	return (
        	<p className="error">{this.props.error}</p>
        );
    }
}

export default Error;