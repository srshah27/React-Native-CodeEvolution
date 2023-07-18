import { View, Text, Image, ImageBackground } from 'react-native'
const createBG = require('./assets/CreatBg.png')

export default function App() {
	return (
		<View style={{ flex: 1, backgroundColor: 'plum'}}>
			<ImageBackground
				source={createBG}
				style={{ height: '100%', width: '100%' }}
			>
				<Text style={{ color: 'white', padding: '80'}}>Hello</Text>
			</ImageBackground>
		</View>
	)
}
