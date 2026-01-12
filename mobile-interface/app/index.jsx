import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#122130",
        padding: 10,
      }}
    >
      <MaterialIcons name="arrow-back" size={24} color="white" />
      <Image
        source={require("../assets/images/fb-logo.png")}
        style={{
          alignSelf: "center",
          width: 100,
          height: 100,
          marginTop: "100",
        }}
      />

      <TextInput
        style={{
          backgroundColor: "#1A2B33",
          color: "black",
          height: 60,
          margin: "12",
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "#475967",
          padding: 10,
          fontSize: 23,
          fontWeight: "normal",
          marginTop: 30,
        }}
        placeholder="Mobile number or email address"
        placeholderTextColor="#475967"
      />

      <TextInput
        style={{
          backgroundColor: "#1A2B33",
          color: "black",
          height: 60,
          margin: 12,
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "#475967",
          padding: 10,
          fontSize: 23,
          fontWeight: "normal",
          marginTop: 10,
        }}
        placeholder="Password"
        placeholderTextColor="#475967"
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#0163E1",
          padding: "12",
          margin: "12",
          borderRadius: 20,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            color: "white",
            alignSelf: "center",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Log in
        </Text>
      </TouchableOpacity>

      <Text style={{color:"white", alignSelf:"center", fontWeight:"condensedBold", fontSize:18}}>
        Forgotten Password?</Text>

        <TouchableOpacity
        style={{
          backgroundColor: "#1A2B33",
          padding: 12,
          marginTop: 100,
          borderRadius: 20,
          justifyContent: "center",
          borderWidth: 2,
          borderColor: "#0163E1",
        }}
      >
        <Text
          style={{
            color: "#0163E1",
            alignSelf: "center",
            fontSize: 15,
            fontWeight: "bold",
          }}
        >
          Create new account
        </Text>
      </TouchableOpacity>

      <Image
        source={require("../assets/images/meta4.png")}
        style={{
          alignSelf: "center",
          marginTop:10
        }}
      />




    </SafeAreaView>
  );
}
