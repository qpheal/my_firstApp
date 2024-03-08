import {  Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const App = () => {
  return (
    <SafeAreaView style = {{flex:1, marginTop: 60, marginLeft: 20, marginRight: 20}}>
      {/*Header Section*/}
      <View style = {{flexDirection: "row", alignItems: "center"}}>
      <AntDesign name="leftcircleo" size={24} color="black" />
      <Text style = {{marginLeft: 10, fontSize: 20, fontWeight: "bold"}}>Welcome Back!</Text>
      </View>

      {/*Form Section*/}
      <View style= {{marginTop: 150}}>
        {/*Email and Text Input*/}
        <Text style= {{ color: "#7c7c7c", fontWeight: "bold", fontSize: 15}}>Email address</Text>
        <TextInput style = {{ borderWidth: 1, borderColor: "gray", marginTop: 10, padding:10, borderRadius: 5 }} placeholder =" Enter your email address">

        </TextInput>
      </View>

      <View style= {{marginTop: 20, }}>
        {/*Password and Text Input*/}
        <Text style= {{ color: "#7c7c7c", fontWeight: "bold", fontSize: 15}}>Password</Text>
        <TextInput style = {{ color: "#c0bcbc", borderWidth: 1, borderColor: "gray", marginTop: 10, padding:10, borderRadius: 5 }} placeholder =" Enter your password">

        </TextInput>
      </View>

      <View style ={{flexDirection: "row", justifyContent: "space-between", marginTop: 20, alignItems: "center" }}>
         {/*Remember me  */}
        <Text style = {{color: "#7c7c7c"}}>Remember Me</Text>
        <Text>todo</Text>
      </View>


      <View>
        {/*Button and Text Input*/}
        <TouchableOpacity
        style={{
          position: "absolute",
          bottom: -275,
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





    </SafeAreaView>
  )
};

export default App;

