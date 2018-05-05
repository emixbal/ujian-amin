import React, {Component} from 'react'
import { TouchableOpacity } from 'react-native';
import { Container, Content, Body, Text,Spinner, Thumbnail, SwipeRow, Card, Button, Icon, Fab } from 'native-base'
import { connect } from 'react-redux'
import {getProfiles} from '../actions'

class ListProfile extends Component{
	componentDidMount(){
    	this.props.dispatch(getProfiles())
  	}

  	handleDelete = (objectId) => {
		this.props.dispatch(deleteTesti(objectId)).then(()=> {
			this.props.dispatch(allTesti())
			alert('data berhasil di delete')
		})
	}

	render(){
		const uri = 'https://openclipart.org/image/2400px/svg_to_png/277084/Male-Avatar-3.png'
		return(
			<Container>
				<Content>
					<Text note>Swipe Right for view detail profile and swipe left for delete profile</Text>
					{
						this.props.profileReducer.isLoading ?

		              	(<Spinner color='red' />)

		              	:

		              	(
		              		this.props.profileReducer.profiles.map((items, index) => (
					            	<Card key={index}>
			 							<SwipeRow 
			 								leftOpenValue =	{60}
			 								rightOpenValue ={-60}
			 								left={
			 									<Button onPress={()=> this.props.navigation.navigate('ProfileList')}>
			 										<Icon active name="information-circle"/>
			 									</Button>
			 								}
			 								body={
			 									<TouchableOpacity key={index}>
				 									<Body>
				 										<Text>{items.name}</Text>
				 										<Text note>{items.position}</Text>
				 									</Body>
						 						</TouchableOpacity>
			 								}
			 								right={
			 									<Button danger onPress={()=> this.handleDelete(items.objectId)}>
			 										<Icon active name="trash" />
			 									</Button>
			 								}
			 							/>
			 						</Card>
					            ))
		              	)
					}
				</Content>
				<Fab>
 					<Icon name="add" />
 				</Fab>
			</Container>
		)
	}
} 

const mapStateToProps = (state) => ({
  profileReducer: state.profileReducer
});

export default connect(mapStateToProps)(ListProfile)