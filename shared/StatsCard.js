import React from "react";
import { StyleSheet, View } from "react-native";

export default function StatsCard(props) {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    minWidth: "75%",
    borderRadius: 20,
    backgroundColor: "#FAE2E2",
    marginHorizontal: 4,
    marginVertical: 6,
    borderColor: "#A39E9E",
    borderWidth: 2,
  },
  cardContent: {
    marginHorizontal: 25,
    marginVertical: 15,
  },
});
