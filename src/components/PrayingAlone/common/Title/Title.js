import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Styles = width =>
  StyleSheet.create({
    Container: {
      marginTop: 25,
      borderBottomColor: '#474747',
      borderStyle: 'solid',
      borderBottomWidth: 2.527,
      width: width,
      marginLeft: 20,
      paddingBottom: 5,
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: '500',
      color: '#474747',
    },
  });

const Title = ({text, width}) => {
  return (
    <>
      <View style={Styles(width).Container}>
        <Text style={Styles().text}>{text}</Text>
      </View>
    </>
  );
};

export default Title;
