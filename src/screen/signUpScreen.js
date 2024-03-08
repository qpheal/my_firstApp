import {  Text, TextInput, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const App = () => {
  return (
    <View style = {{flex: 1, marginTop: 60, marginLeft: 20, marginRight: 20}}>
      <View style = {{flexDirection: "row", alignItems: "center"}}>
      <AntDesign name="leftcircleo" size={24} color="black" />
      <Text style = {{marginLeft: 20, fontSize: 20, fontWeight: "bold"}}>Create a new account</Text>
      </View>


      <View style = {{marginTop: 100}}>
        <Text style = {{ fontWeight: "bold", fontSize: 15, color: "#7C7C7C"}}>Full Name</Text>
        <TextInput style = {{borderBottomWidth: 1, borderColor: "#F2F2F2", marginTop: 10, padding: 1 }} placeholder = "Enter your fullname"></TextInput>
      </View>


      <View style = {{marginTop: 30}}>
        <Text style = {{ fontWeight: "bold", fontSize: 15, color: "#7C7C7C"}}>Email address</Text>
        <TextInput style = {{borderBottomWidth: 1, borderColor: "#F2F2F2", marginTop: 10, padding: 1 }} placeholder = "name@example.com"></TextInput>
      </View>

      <View style = {{marginTop: 30}}>
        <Text style = {{ fontWeight: "bold", fontSize: 15, color: "#7C7C7C"}}>Create Password</Text>
        <TextInput style = {{borderBottomWidth: 1, borderColor: "#F2F2F2", marginTop: 10, padding: 1 }} placeholder = "Enter your password"></TextInput>
      </View>

      <View style = {{marginTop: 30}}>
        <Text style = {{ fontWeight: "bold", fontSize: 15, color: "#7C7C7C"}}>Repeat Password</Text>
        <TextInput style = {{borderBottomWidth: 1, borderColor: "#F2F2F2", marginTop: 10, padding: 1 }} placeholder = "Confirm your new password"></TextInput>
      </View>

      <View>
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: -190,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0DCDAA",
          padding: 20,
          borderRadius: 10,
        }}
      >
        <Text style = {{color: "white", fontWeight: "bold"}}>Sign in</Text>


        </TouchableOpacity>
        </View>


    </View>
  )
};

export default App;

