import {  Text, View, Image, TouchableOpacity } from 'react-native';



const App = () => {
  return <View style= {{ flex: 1, alignItems: "center"}}>
    {/*Welcome and Image Section */}
    <View style = {{marginTop: 150, alignItems: "center", marginBottom: 100}}>
    <View style = {{marginBottom: 50, alignItems: "center"}}>
      <Text style= {{fontSize: 35, fontWeight: "bold" , marginBottom: 10}}>Welcome!</Text>
      <Text style= {{color: "#7c7c7c"}}>Sign in or create a new account</Text>
    </View>
      <Image source={require("./assets/Frame.png")} style={{ width: 250, height: 200 }}/>
    </View>
    
    {/* Sign in and Sign Up section*/}
    <View>{/*Sign in button, the touchables help you perform operations*/}
      <TouchableOpacity style={{backgroundColor: '#0dcdaa', padding: 10, width: 250, alignItems: "center", borderRadius: 10, marginBottom: 10}}>
        <Text style = {{color: "white", fontWeight: "bold"}}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: "#fff", padding: 10, width: 250, alignItems: "center", borderRadius: 10, borderStyle: "solid", borderColor: "#789", borderWidth: 1}}>
        <Text>No account yet? <Text style={{color:"#0dcdaa"}}>Sign Up</Text></Text>
      </TouchableOpacity>
    </View>
  </View>
};

export default App;




