import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';

const Header = ({title}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.LeftArrowImageContainer}>
        <Image source={require('../../../assets/verticalThreeDots.png')} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.threeDotImageContainer}>
        <Image source={require('../../../assets/verticalThreeDots.png')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexBasis: 50,
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  LeftArrowImageContainer: {
    marginLeft: 20,
    marginRight: 15,
  },
  titleContainer: {flex: 1},
  title: {fontSize: 18},
  threeDotImageContainer: {marginRight: 20},
});

export default Header;
