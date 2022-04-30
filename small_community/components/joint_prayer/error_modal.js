import React from 'react';

import {Text, Button, View, StyleSheet} from 'react-native';

const ErrorModal = props => {
  return (
    <View style={styles.mainFrame}>
      <Text style={styles.title}>
        새로운 방을 생성할 수 있는 권한이 없습니다.
      </Text>
      <Text style={styles.content}>
        소속 본당 관계자에 문의하거나 고객 센터로 연락하여 주시길 바랍니다.
      </Text>
      <View style={styles.button}>
        <Text style={styles.buttonText}>확인</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainFrame: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 20,
    backgroundColor: 'gray',
  },
  title: {
    textAlign: 'center',
    marginHorizontal: 50,
    fontSize: 25,
    fontWeight: '600',
    lineHeight: 30,
    marginBottom: 20,
  },
  content: {
    textAlign: 'center',
    marginHorizontal: 50,
    fontSize: 19,
    fontWeight: '500',
    lineHeight: 23,
    marginBottom: 20,
    letterSpacing: -0.3,
  },

  button: {
    marginHorizontal: 10,
    backgroundColor: '#FFEBAA',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '86%',
    height: 50,
    borderRadius: 6,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 24,
  },
});
export default ErrorModal;
