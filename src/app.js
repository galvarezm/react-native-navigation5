import React from 'react';

// navigation
import { NavigationContainer }  from '@react-navigation/native';
import { createStackNavigator }  from '@react-navigation/stack';

// views
import SplashScreen  from './views/splashScreen';
import SignIn        from './views/signIn';
import SignOut       from './views/signOut';
import SignUp        from './views/signUp';
import UserProfile   from './views/userProfile';
import userRecovery  from './views/userRecovery';
import TabNavigation from './views/tabNavigation';

// animación básica de entrada en las vistas
const basicFade = {
	cardStyleInterpolator:({ current, closing }) => ({
		cardStyle: {
			opacity: current.progress,
		},
	}),
};

const AppStack = createStackNavigator();

const App = () => {
	return(
		<NavigationContainer>
			<AppStack.Navigator initialRouteName="SplashScreen">

				<AppStack.Screen 
					name="SplashScreen" 
					component={SplashScreen} 
					options={{
					headerShown: false,
					gestureEnabled: false,
					animationEnabled: false,
					}}
				/>

				<AppStack.Screen 
					name="SignIn" 
					component={SignIn} 
					options={{
					headerShown: false,
					gestureEnabled:false,
					animationEnabled: true,
					...basicFade,
					}}
				/>

				<AppStack.Screen 
					name="SignOut" 
					component={SignOut} 
					options={{
					headerShown: false,
					gestureEnabled:false,
					animationEnabled: true,
					...basicFade,
					}}
				/>

				<AppStack.Screen 
					name="SignUp" 
					component={SignUp} 
					options={{
					headerShown: false,
					gestureEnabled:false,
					animationEnabled: true,
					...basicFade,
					}}
				/>

				<AppStack.Screen 
					name="UserProfile" 
					component={UserProfile} 
					options={{
					headerShown: false,
					gestureEnabled:false,
					animationEnabled: true,
					...basicFade,
					}}
				/>

				<AppStack.Screen 
					name="userRecovery" 
					component={userRecovery} 
					options={{
					headerShown: false,
					gestureEnabled:false,
					animationEnabled: true,
					...basicFade,
					}}
				/>

				<AppStack.Screen 
					name="TabNavigation" 
					component={TabNavigation} 
					options={{
					headerShown: false,
					gestureEnabled:false,
					animationEnabled: true,
					...basicFade,
					}}
				/>

			</AppStack.Navigator>
		</NavigationContainer>
	)
}

export default App;