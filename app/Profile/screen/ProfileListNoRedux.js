import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { 
	Container, Content, Body, Text, Header, Left, Right, Icon, 
	Card, CardItem, Thumbnail, Button, List, ListItem

} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class ProfileList extends Component{

	state = {

	  	name: "Marian Hart",
		position: " Director Of Project Management",
		school: "Syncaus university - New York",
		friend: "Greater San Diego Area",
		note: "I'm a renewable energy executive with 10 years experience, and have built strong skills in getting comp"
	}



	render(){

		const uri = 'https://openclipart.org/image/2400px/svg_to_png/277084/Male-Avatar-3.png'

		return(
			<Container>
				<Content>
					<Image style={{height: 150}} source={require('../image/kyo.jpg')} />
					<Card>
			            <CardItem>
			              <Body>
			                <Thumbnail style={styles.thumbImg} large source={{uri: uri}} />
			                <Content>
			                	<Text style={{marginLeft: 100}}>{this.state.name}</Text>
			                	<Text style={{fontSize: 10, marginLeft: 70,}}>{this.state.position}</Text>
			                	<Text note style={{fontSize: 10, marginLeft: 75}}>{this.state.school}</Text>
			                	<Text note style={{fontSize: 10, marginLeft: 75}}>{this.state.friend} 500+</Text>
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
			                	<Text style={{fontSize: 10}}>{this.state.note}</Text>
			                </Content>
			              </Body>
			            </CardItem>
			         </Card>
			         <Card>
			         	<CardItem>
			         		<Body>
				         		<Text note>Highlights</Text>
			         		</Body>
			         	</CardItem>
			         	<List>
				            <ListItem>
				              <Thumbnail square size={80} source={{ uri: uri}} />
				              <Body>
				                <Text>Sankhadeep</Text>
				                <Text note>Its time to build a difference . .</Text>
				              </Body>
				            </ListItem>
				          </List>
			         </Card>
				</Content>
			</Container>
		)
	}
}


const styles = StyleSheet.create({

	thumbImg: {
		marginLeft: 100,
	}

})
