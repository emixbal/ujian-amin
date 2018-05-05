import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { connect } from 'react-redux';
import axios from 'axios';
import { allTesti, updateTesti } from '../actions';
import AddTesti from '../Component/FormAdd';

class FormAdd extends Component {

	handleSubmit = (value) => {
		this.props.dispatch(updateTesti(value)).then(() => {
			this.props.dispatch(allTesti())
			this.props.navigation.goBack()
		})
	}

	render(){
		return(
			<Container>
				<Content style={{padding: 10}}>
					<AddTesti {...this.props} onSubmit={this.handleSubmit} />
				</Content>
			</Container>
		)
	}
}

export default connect()(FormAdd)