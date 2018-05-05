import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { 
	Container , Content, Body,
	Text, Form, Input, Label, Item,
	View, Button, Textarea
} from 'native-base'

import { Field, reduxForm } from 'redux-form'


const InputTypeText = (props) => {
	return(
		<View>
			<Label>{props.label}</Label>
			<Item regular>
				<Input 
					name={props.name} {...props}
					onChangeText={text => {props.input.onChange(text)}}
					value={props.input.value}
				/>
			</Item>
		</View>
	)
}


export default class AddTesti extends Component{
	render(){
		return(
			<Form>
				<Field
					component={InputTypeText}
					name="nama"
					label="Masukan Nama"
				 />
				 <Field
				 	component={InputTypeText}
					name="sekolah"
					label="Masukan Nama Sekolah"
				 />
				<Field 
					component={InputTypeText}
					name="testimoni"
					label="Masukan Testimoni"
				 />
				 <Button block onPress={handleSubmit} style={{marginTop: 10}}>
				 	<Text>Add To Testimoni</Text>
				 </Button>
			</Form>
		)
	}
}


const styles = StyleSheet.create({
    itemForm: {
        marginTop: 15,
        marginLeft: 30,
        marginRight: 30
    },
})