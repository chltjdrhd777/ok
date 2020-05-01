import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");

//TouchableOpacity = give click action and opacity transformation
//onPress = like onClick
export default class Todo extends Component {
  state = { isEditing: false, isCompleted: false };
  toggleAction = () => {
    this.setState((preState: { isCompleted: boolean; isEditing: boolean }) => {
      return { isCompleted: !preState.isCompleted };
    });
  };

  render() {
    const { isCompleted } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleAction}>
          <View
            style={[
              styles.circle,
              isCompleted ? styles.completedColor : styles.unCompColor,
            ]}
          ></View>
        </TouchableOpacity>
        <Text style={styles.text}>Hello. My Todos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width - 80,
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 10,
  },
  //borderRadius always should be the half of width and height
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 15,
    borderWidth: 8,
  },
  completedColor: {
    borderColor: "#95a5a6",
  },
  unCompColor: {
    borderColor: "#f6e58d",
  },
});
