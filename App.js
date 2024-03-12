import { View, SafeAreaView, Text, Image, ScrollView} from "react-native";
import { AntDesign, Feather } from '@expo/vector-icons';
import notification from "./src/mock/notificationMock";

const App = () => {
  console.log("Notification", notification)
  return (

    <SafeAreaView className = "mt-10 mx-5 flex-1 space-y-10">
    <ScrollView  className= "space-y-10 overflow-y-scrollno-scrollbar ">
    {/**Notification Header */}
      <View className="flex flex-row items-center justify-between">
        <View>
        <AntDesign name="left" size={24} color="black" />
        </View>

        <View>
          <Text className="text-lg font-semibold">Notification</Text>
        </View>

        <View>
        <Feather name="settings" size={24} color="black" />
        </View>
      </View>


    {/**Messages */}
      <View>
      {/**Message header */}
          <View className= "flex flex-row justify-between items-center">
          {/**recent */}
              <View className = "flex flex-row items-center space-x-1">
                <Text className =" font-bold text-lg">Recent</Text>
                <View className="bg-[#ff4747] p-0 rounded-full h-5 w-5 justify-center items-center ">
                  <Text className= "text-white text-[8px] font-bold">4</Text>
                </View>  
              </View>
          {/**mark as read */}
              <View>
                  <Text className= "font-semibold text-[#3f6df6]"> Mark All Read</Text>
                </View>
          </View>
        {/**End of message header */}



        {/**Message List */}
        {notification.map((item) => {
          return(
            <View key= {item.id}>
              <View className= "flex flex-row items-center space-x-2 space-y-4 ">
                <Image source={{uri: item.imageUrl}} className = "w-12 h-12 rounded-full"/>
                <View className = "flex-1 space-y-1">
                  <View>
                  <Text className= "font-semibold">{item.title}</Text>
                  <Text className = "text-gray-500 max-h-[50px]">{item.message}</Text></View>
                </View>
                <View><Text>{item.time}</Text></View>
              </View>
              <View className="border-b border-gray-300 mt-2"></View>
            </View>
          )
        }        
        )}
        
      </View>

    </ScrollView>
    </SafeAreaView>
    
  );
};

export default App;


