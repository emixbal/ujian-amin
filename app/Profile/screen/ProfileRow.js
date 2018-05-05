import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Body, Text } from 'native-base';

export default class ProfileRow extends Component {

	state ={
		title: "Test Title highlight",
		entry: "Its time to build a difference . ."
	}
	render(){
		const uri = 'https://openclipart.org/image/2400px/svg_to_png/277084/Male-Avatar-3.png'

		return(
			<ListItem>
              <Thumbnail square size={80} source={{ uri: uri}} />
              <Body>
                <Text>{this.state.title}</Text>
                <Text note>{this.state.entry}</Text>
              </Body>
            </ListItem>
		)
	}
}