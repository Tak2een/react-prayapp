import React from "react";
import { Text, View, StyleSheet, SafeAreaView, Image } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.headerChilde, styles.headerChildeLeft]}>
          <Image
            style={styles.headerChildLeftImgSize}
            source={require("../../../assets/communityIcon.png")}
          />
          <Image
            style={styles.headerChildLeftImgSize}
            source={require("../../../assets/communityText.png")}
          />
        </View>
        <View style={[styles.headerChilde, styles.headerChildeRight]}>
          <Image
            style={styles.headerChildRightImgSize}
            source={require("../../../assets/search.png")}
          />
          <Image
            style={styles.headerChildRightImgSize}
            source={require("../../../assets/bell.png")}
          />
          <Image
            style={styles.headerChildRightImgSize}
            source={require("../../../assets/User.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //  flexBasis: 50 ,
    // flexGrow: 1,
  },
  header: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerChilde: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  headerChildeLeft: { marginLeft: 18.33 },
  headerChildLeftImgSize: { marginRight: 15 },
  headerChildeRight: {
    marginRight: 20,
    justifyContent: "flex-end",
  },
  headerChildRightImgSize: {
    marginLeft: 20,
  },
});

export default Header;
