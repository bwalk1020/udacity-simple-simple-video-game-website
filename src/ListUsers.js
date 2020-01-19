import React, {Component} from 'react';

class ListUsers extends Component {
	render() {
    	return (
        	<ol>
			{
              this.props.users.map( 
                  usr => {
             		if(this.props.showNumberOfGamesPlayed) {
                    	return (
                          <li key={usr.userName}>{usr.userName} played {usr.numberOfGamePlayed} games</li>
                      )
                    } else {
                    	return (
                          <li key={usr.userName}>{usr.userName}</li>
                      )
                    }
                      
                  }
				)
			}
		</ol>
        )
    }
}

export default ListUsers;