import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { 
	Container, Content, Body, Text, Header, Left, Right, Icon, 
	Card, CardItem, Thumbnail, Button, List, ListItem, Spinner

} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { connect } from 'react-redux';

import ProfileRow from './ProfileRow'
import {getProfiles} from '../actions'

class ProfileList extends Component{

	componentDidMount(){
    	this.props.dispatch(getProfiles())
  	}


	render(){

		const uri = 'https://openclipart.org/image/2400px/svg_to_png/277084/Male-Avatar-3.png'

		return(
			<Container>
				<Content>
					<Image style={{height: 150}} source={require('../image/kyo.jpg')} />
					<Card>
			            <CardItem>
			              {
			              	this.props.profileReducer.isLoading ?

			              	(<Spinner color='red' />)

			              	:

			              	(
					            this.props.profileReducer.profiles.map((items, index) => (
					            	<Body key={index}>
							            <Thumbnail style={styles.thumbImg} large source={{uri: uri}} />
						                <Content>
						                	<Text style={{marginLeft: 100}}>{items.name}</Text>
						                	<Text style={{fontSize: 10, marginLeft: 70,}}>{items.position}</Text>
						                	<Text note style={{fontSize: 10, marginLeft: 75}}>{items.school}</Text>
						                	<Text note style={{fontSize: 10, marginLeft: 75}}>{items.address}</Text>
						                </Content>
						                <Row style={{marginLeft: 55, marginTop: 20}}>

						                	<Button bordered info>
						                		<Text>Message</Text>
						                	</Button>

						                	<Button info style={{marginLeft:5}}>
						                		<Text>Connect</Text>
						                	</Button>

						                </Row>
						                <Content style={{marginTop: 20}}>
						                	<Text style={{fontSize: 10}}>{items.note}</Text>
						                </Content>
					                </Body>
					            ))
			              	)
			              }
			            </CardItem>
			         </Card>
			         <Card>
			         	<CardItem>
			         		<Body>
				         		<Text note>Highlights</Text>
			         		</Body>
			         	</CardItem>
			         	<List>
				            <ProfileRow />
				        </List>
			         </Card>
				</Content>
			</Container>
		)
	}
}

const mapStateToProps = (state) => ({
  profileReducer: state.profileReducer
});

export default connect(mapStateToProps)(ProfileList)

const styles = StyleSheet.create({

	thumbImg: {
		marginLeft: 100,
	}

})
