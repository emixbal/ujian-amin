import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base'



export default class notificationDetail extends Component{

	render(){

		const { title } = this.props.navigation.state.params.item
		return(
			<Container>
				<Content>
					<Text>{title}</Text>		
				</Content>
			</Container>
		)
	}
}