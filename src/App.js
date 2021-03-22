import React, { useEffect } from 'react';
import { StatusBar, SafeAreaView, Text } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
import Routes from './routes';
import { Provider } from 'react-redux';
// Imports: Redux Store
import { store } from './store/store';

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar barStyle="light-content" backgroundColor="#FF8686" />
			<Provider store={store}>
				<Routes />
			</Provider>
		</SafeAreaView>
	);
};



export default App;