import { ImageBackground } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><ImageBackground style={styles.TTnWXpjo} source={require("./alexion-logo.jpeg")} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  TTnWXpjo: {
    width: 342,
    height: 159,
    position: "absolute",
    left: 7,
    top: 206.5
  }
});
export default Untitled1;