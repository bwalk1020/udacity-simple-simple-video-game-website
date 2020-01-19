import React, {Component} from 'react';

class ShowGamesButton extends Component {
	render() {
    	return (
        	<div>
          		{!this.props.showGamesButton.hidden && 
                 	<button 
                 			disabled={!this.props.usersLength} 
          					onClick={this.props.toggleShowGamesButton}>	
								{this.props.showGamesButton.text}
					</button>}
			</div>
        )
    }
}

export default ShowGamesButton;