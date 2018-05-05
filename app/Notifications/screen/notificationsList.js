import React, { Component } from 'react';
import { Container, Content, Text, List, ListItem, Spinner} from 'native-base';

import {connect} from 'react-redux';
import { getNotifications } from '../actions'



class notificationsList extends Component {

	componentDidMount(){
		this.props.dispatch(getNotifications())
	}

	render(){
		return(
			<Container>
				<Content>
					{
						this.props.notifReducer.isLoading ? 

						(
							<Spinner color='red' />
						)

						:

						this.props.notifReducer.notifications.map(notification => (

							<ListItem onPress={ () => this.props.navigation.navigate('notificationsDetail', {item: notification})}>
								
								<List>
									<Text>{notification.title}</Text>
								</List>
							
							</ListItem>

						))
					}
				</Content>
			</Container>
			 
		)
	}
}

const mapStateToProps = (state) => ({
  notifReducer: state.notifReducer
});

export default connect(mapStateToProps)(notificationsList)