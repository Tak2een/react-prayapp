import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.out} onPress={() => navigation.goBack()}>
        &#60;
      </Text>
      <Text style={styles.title}>기도방</Text>

      <Text style={styles.status}>Live</Text>
      <Text style={styles.personnel}>15명</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  out: {
    color: '#474747',
    fontSize: 18,
    fontWeight: 'bold',
  },
  title: {
    marginLeft: 15,
    marginRight: 'auto',
    color: '#474747',
    fontSize: 18,
    fontWeight: 'bold',
  },
  status: {
    marginRight: 10,
    borderRadius: 5,
    paddingHorizontal: 7,
    paddingVertical: 3,
    backgroundColor: '#FFDB66',
    fontSize: 14,
    color: '#474747',
  },
  personnel: {
    color: '#474747',
  },
});

export default Header;
