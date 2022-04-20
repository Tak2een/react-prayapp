import React from 'react';
import {TouchableOpacity, View, Modal, StyleSheet, Text} from 'react-native';

const ModalComponent = ({title, content, confirmFn, open}) => {
  return (
    <View style={[open && styles.container]} transparent visibility={open}>
      <Modal animationType="slide" transparent visible={open}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.modalText}>{content}</Text>
            <TouchableOpacity style={styles.openButton} onPress={confirmFn}>
              <Text>확인</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
    backgroundColor: 'rgba(0,0,0,0.3)',
    transition: '0.3s',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  openButton: {
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: '#FFEBAA',
    borderRadius: 5,
    padding: 10,
  },
  modalText: {
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default ModalComponent;
