import React, { Component } from 'react';
import {
	Container, Content, Card, CardItem,
	List, ListItem, Text, Left, Right,
	Body, Spinner
} from 'native-base';

import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { allTesti } from '../actions';


class TestiList extends Component {

	componentDidMount(){
		this.props.dispatch(allTesti());
	}

 	render(){
 		return(
 			<Container>
 				<Content>
 					{this.props.testiReducer.isLoading ? (
 						<Spinner color='red'/>
 					) : (

 					this.props.testiReducer.testi.map((items, index)=>(
 						<TouchableOpacity key={index} onPress={()=> alert('Your choose' + ' ' + items.nama)}>
 							<Card key={index}>
 								<CardItem>
 									<Body>
 										<Text>{items.nama}</Text>
 										<Text note>{items.sekolah}</Text>
 									</Body>
 								</CardItem>
 							</Card>
 						</TouchableOpacity>
 					))

 					)}
 				</Content>
 			</Container>
 		)
 	}
}

const mapStateToProps = (state) => ({
	testiReducer: state.testiReducer
})

export default connect(mapStateToProps)(TestiList)
