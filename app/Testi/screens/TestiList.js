import React, { Component } from 'react';
import {
	Container, Content, Card, CardItem,
	List, ListItem, Text, Left, Right,
	Body, Spinner, Fab, Icon, SwipeRow, Button
} from 'native-base';

import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { allTesti, deleteTesti } from '../actions';


class TestiList extends Component {

	componentDidMount(){
		this.props.dispatch(allTesti());
	}

	handleDelete = (objectId) => {
		this.props.dispatch(deleteTesti(objectId)).then(()=> {
			this.props.dispatch(allTesti())
			alert('data berhasil di delete')
		})
	}


 	render(){
 		return(
 			<Container>
 				<Content>
 				<Body>
 					<Text note> Klik Card For View Comment </Text>
 				</Body>
 					{this.props.testiReducer.isLoading ? (
 						<Spinner color='red'/>
 					) : (

 					this.props.testiReducer.testi.map((items, index)=>(
 						<Card key={index}>
 							<SwipeRow 
 								leftOpenValue =	{60}
 								rightOpenValue ={-60}
 								left={
 									<Button onPress={()=> alert('test')}>
 										<Icon active name="information-circle"/>
 									</Button>
 								}
 								body={
 									<TouchableOpacity key={index} onPress={()=> alert('Testimoni :' + '\n' + items.testimoni)}>
	 									<Body>
	 										<Text>{items.nama}</Text>
	 										<Text note>{items.sekolah}</Text>
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

 					)}
 				</Content>
 				 	<Fab onPress={()=> this.props.navigation.navigate('AddTesti')}>
 						<Icon name="add" />
 					</Fab>
 			</Container>
 		)
 	}
}

const mapStateToProps = (state) => ({
	testiReducer: state.testiReducer
})

export default connect(mapStateToProps)(TestiList)
