import { TextInput, View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const App = () => {
  return (
    <View className="flex-1 bg-white ml-5 mr-5" style={{ marginTop: 60 }}>
      <View className=" flex-row items-center">
        <AntDesign name="leftcircleo" size={24} color="black" />
        <View
          style={{
            marginLeft: 18,
            width: 280,
            borderBottomWidth: 1,
            borderColor: "#E9E9E9",
            borderStyle: "dotted",
            borderRadius: 10,
            padding: 7,
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
          }}
        >
          <TextInput
            className=" p-1 overflow-hidden"
            placeholder="Select Location..."
          ></TextInput>
          <AntDesign name="search1" size={24} color="black" />
        </View>
      </View>

      <View className="mt-10">
        <Text style={{ color: "#7C7C7C" }}>Most Searched</Text>

        <Text className = "font-bold mt-7" style = {{fontSize: 18}}>Barcelona</Text>
        <Text className= "mt-2.5" style={{fontSize:16}}>Spain</Text>

        
        <Text className = "font-bold mt-6" style = {{fontSize: 18}}>Madrid</Text>
        <Text className= "mt-2.5" style={{fontSize:16}}>Spain</Text>

        
        <Text className = "font-bold mt-6" style = {{fontSize: 18}}>London</Text>
        <Text className= "mt-2.5" style={{fontSize:16}}>United Kingdom</Text>

        
        <Text className = "font-bold mt-6" style = {{fontSize: 18}}>Berlin</Text>
        <Text className= "mt-2.5" style={{fontSize:16}}>Germany</Text>

        
        <Text className = "font-bold mt-6" style = {{fontSize: 18}}>Barcelona</Text>
        <Text className= "mt-2.5" style={{fontSize:16}}>Spain</Text>

        
        <Text className = "font-bold mt-7" style = {{fontSize: 18}}>Barcelona</Text>
        <Text className= "mt-2.5" style={{fontSize:16}}>Spain</Text>

        <Text className = "font-bold mt-7" style = {{fontSize: 18}}>Barcelona</Text>
        <Text className= "mt-2.5" style={{fontSize:16}}>Spain</Text>

        
        <Text className = "font-bold mt-6" style = {{fontSize: 18}}>Madrid</Text>
        <Text className= "mt-2.5" style={{fontSize:16}}>Spain</Text>

        
        <Text className = "font-bold mt-6" style = {{fontSize: 18}}>London</Text>
        <Text className= "mt-2.5" style={{fontSize:16}}>United Kingdom</Text>

        
        <Text className = "font-bold mt-6" style = {{fontSize: 18}}>Berlin</Text>
        <Text className= "mt-2.5" style={{fontSize:16}}>Germany</Text>

        
        <Text className = "font-bold mt-6" style = {{fontSize: 18}}>Barcelona</Text>
        <Text className= "mt-2.5" style={{fontSize:16}}>Spain</Text>

        
        <Text className = "font-bold mt-7" style = {{fontSize: 18}}>Barcelona</Text>
        <Text className= "mt-2.5" style={{fontSize:16}}>Spain</Text>
      </View>
    </View>
  );
};

export default App;

{
  /**<View className = "flex-1 justify-center items-center  bg-black">
      <Text className = "text-#565556 font-bold text-2xl"> App</Text>
    </View> */
}
