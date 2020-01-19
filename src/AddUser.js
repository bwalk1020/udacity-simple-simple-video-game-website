import React, {Component} from 'react';

class AddUser extends Component {
  	render() {
    	return (
      		<form id="add-user-form">
			<input 
    			type="text" 
    			name="firstName"
    			placeholder="First Name" 
    			value={this.props.firstName} 
				onChange={this.props.handleInputChange} />
			<input 
    			type="text" 
    			name="lastName"
    			placeholder="Last Name" 
    			value={this.props.lastName} 
				onChange={this.props.handleInputChange} />
			<input 
    			type="text" 
    			name="userName"
    			placeholder="userName" 
    			value={this.props.userName} 
				onChange={this.props.handleInputChange} />
			<button disabled={this.props.validInputs()} onClick={this.props.addUser}>Add User</button>
		</form>
      	)
    }
}

export default AddUser;