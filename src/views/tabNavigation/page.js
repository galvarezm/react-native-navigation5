import React from 'react';
import { Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DropdownMenu from './dropdownMenu';
import NotificationMenu from './notificationMenu';
import TabGallery   from './tabGallery';
import TabHome      from './tabHome';
import TabLogbook   from './tabLogbook';
import TabSighting  from './tabSighting';

import I18n from '../../i18n';

const RootStack = createStackNavigator();

const BottomTab = createBottomTabNavigator();

const TabStack = ({navigation, route}) => {
	return(
		<BottomTab.Navigator>

			<BottomTab.Screen 
				name="TabHome" 
				component={TabHome} 
				listeners={{
					tabPress: e => navigation.setOptions({ title: I18n.t('tab_title_home') })
				}}
			/>

			<BottomTab.Screen 
				name="TabGallery" 
				component={TabGallery} 
				listeners={{
					tabPress: e => navigation.setOptions({ title: I18n.t('tab_title_gallery') })
				}}
			/>

			<BottomTab.Screen 
				name="TabSighting" 
				component={TabSighting}
				listeners={{
					tabPress: e => navigation.setOptions({ title: I18n.t('tab_title_sighting') })
				}}
			/>

			<BottomTab.Screen 
				name="TabLogbook" 
				component={TabLogbook} 
				listeners={{
					tabPress: e => navigation.setOptions({ title: I18n.t('tab_title_logbook') })
				}}
			/>

		</BottomTab.Navigator>
	)
}

const Page = (props) => {
    return(
		<RootStack.Navigator 
			mode="modal" 
			initialRouteName="TabStack"
		>

			<RootStack.Screen 
				name="TabStack" 
				component={TabStack} 
				options={{
					title: 'Home', // start value!
					headerShown: true,
					gestureEnabled: false,
					headerLeft: () => (
						<Button
							title="ddm"
							onPress={() => props.navigation.navigate("DropdownMenu")}
						/>
					),
					headerRight: () => (
						<Button
							title="msg"
							onPress={() => props.navigation.navigate("NotificationMenu")}
						/>
					)
				}}
			/>

			<RootStack.Screen 
				name="DropdownMenu" 
				component={DropdownMenu} 
				options={{
					headerShown: false,
					gestureEnabled: false,
					cardStyle: { backgroundColor: 'white', opacity: 0.9 },
					cardOverlayEnabled: true,
				}}
			/>

			<RootStack.Screen 
				name="NotificationMenu" 
				component={NotificationMenu} 
				options={{
					headerShown: false,
					gestureEnabled: false,
					cardStyle: { backgroundColor: 'white', opacity: 0.9 },
					cardOverlayEnabled: true,
				}}
			/>

		</RootStack.Navigator>
    )
}

export default Page;