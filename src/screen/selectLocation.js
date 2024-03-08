
import {  Text, View, Image, TouchableOpacity  } from 'react-native';


const App = () => {
  return (
    <View style = {{ marginLeft: 20, marginRight:20, flex:1}}>
    <View style = {{alignItems: "center", marginTop: 150}}>

      <Image source = {require("./assets/illustration.png")} style = {{width: 224, height: 170}} />

      <Text style = {{fontWeight: "bold", marginTop: 50, fontSize: 20}}>Select Location</Text>
      <Text style = {{textAlign: "center", fontSize: 16, marginTop: 17}}>Let's find your next event. Stay in tune with what's happening in your area!</Text>
    </View>

    <View>
    <TouchableOpacity
        style={{
          position: "absolute",
          bottom: -290,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0DCDAA",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <Text style = {{color: "white", fontWeight: "bold"}}>Choose City</Text>


        </TouchableOpacity>
 
    </View>
    </View>
  )
};

export default App;
