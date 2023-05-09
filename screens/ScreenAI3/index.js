import { StyleSheet } from "react-native";
import React from "react";
import { View } from "react-native";
import { Icon, Text, Button } from "react-native-elements";

const PatientListScreen = () => {
  return <View style={_styles.OPcPbbmM}>
      <Icon name="users" type="font-awesome" size={100} color="#517fa4" />
      <Text h4 style={_styles.scpyTJLg}>
        Patient List from iPatient
      </Text>
      <Text h5 style={_styles.FEkpmtlW}>
        Connect your iPatient information to the Salesforce Marketing Cloud
      </Text>
      <Button title="View List" containerStyle={{
      marginTop: 20
    }} />
    </View>;
};

export default PatientListScreen;

const _styles = StyleSheet.create({
  OPcPbbmM: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 356
  },
  scpyTJLg: {
    marginTop: 20
  },
  FEkpmtlW: {
    marginTop: 10,
    width: 300
  }
});