import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './AddUser';
import ListUsers from './ListUsers';
import ShowGamesButton from './ShowGamesButton';
import Error from './Error';

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  state = {
    firstName: '',
    lastName: '',
    userName: '',
    numberOfGamePlayed: 0,
    users: [],
    error: '',
    showNumberOfGamesPlayed: true,
    showGamesButton: {
    	text: 'Hide the Number of Games Played',
      	hidden: true
    }
  };

  handleInputChange(event) {
    event.persist();
    this.setState((currentState) => {
      return {
      	[event.target.name]: event.target.value
      }
    });
  }

  validInputs = () => {
   	return (!this.state.firstName || !this.state.lastName || !this.state.userName) ? true : false;
  }

  toggleShowGamesButton = () => {
  	this.setState((currentState) => {
    	return {
        	showNumberOfGamesPlayed: !currentState.showNumberOfGamesPlayed,
            showGamesButton: {
                text: !currentState.showNumberOfGamesPlayed ? 'Hide Number of Games Played' : 'Show Number of Games Played',
                hidden: currentState.showGamesButton.hidden
            }
        }
    });
  };

  displayShowGamesButton = () => {
  	this.setState(currentState => {
      	if(currentState.users.length > 0) {
        	return {
        		showGamesButton : {
                    text: currentState.showGamesButton.text,
                	hidden: false
                }
        	}
        } else {
        	return {
        		showGamesButton : {
                    text: currentState.showGamesButton.text,
                	hidden: true
                }
        	}
        }
      
    });
  };

  addUser = (event) => {
    event.preventDefault();
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    const userName = this.state.userName;
  	const users = this.state.users;
    const user = users.filter( usr => {
    	return (this.state.userName === usr.userName);
    });
    
    if(!user.length) {
    	this.setState(currentState => {
        	return {
              firstName: '',
              lastName: '',
              userName: '',
              error: "",
            	users: [...currentState.users, {
                	firstName: firstName,
                  	lastName: lastName,
                  	userName: userName,
                    numberOfGamePlayed: 0
                }],
            }
        });
    } else {
    	this.setState(currentState => {
        	return {
            	error: `This userName, ${currentState.userName} is already taken. Please choose a Different One`
            }
        });
    }
 	
    this.displayShowGamesButton();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<Error error={this.state.error} />
		<AddUser firstName={this.state.firstName}
				 lastName={this.state.lastName}
				 userName={this.state.userName}
				 handleInputChange={this.handleInputChange}
				 validInputs={this.validInputs}
				 addUser={this.addUser}
		/>
		<ListUsers 
			showNumberOfGamesPlayed={this.state.showNumberOfGamesPlayed}
			users={this.state.users}
		/>
		<ShowGamesButton showGamesButton={this.state.showGamesButton}
						 usersLength={this.state.users.length}
						toggleShowGamesButton={this.toggleShowGamesButton}
		/>
      </div>
    );
  }
}

export default App;
