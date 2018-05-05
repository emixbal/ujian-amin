import React, { Component } from 'react';
import { StyleSheet} from 'react-native'
import {Container, Content, Body, Text, Button} from 'native-base';

export default class IndexProfile extends Component {

	handlePress(){
		this.props.navigation.navigate('ProfileListNoRedux')
	}

	handlePressRedux(){
		this.props.navigation.navigate('ListProfile')
	}

	render(){
		return(
			<Container style={{backgroundColor: '#1abc9c'}}>
				<Content>
					<Button info full style={styles.btnSans} onPress={() => this.handlePress()}>
						<Text>Profile Without Redux</Text>
					</Button>
					<Button info full style={styles.btnSans} onPress={() => this.handlePressRedux()}>
						<Text>Profile With Redux</Text>
					</Button>
					<Text></Text>
				</Content>
			</Container>
		)
	}
}

const styles = StyleSheet.create({
	btnSans: {
		marginTop: 20,
		alignItems: 'center'
	},
})