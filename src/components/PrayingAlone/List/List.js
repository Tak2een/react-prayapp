import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Title from '../common/Title/Title';
import leftIcon from '../assets/img/leftIcon.png';
import rightIcon from '../assets/img/rightIcon.png';
import ListCard from '../common/ListCard/ListCard';

const styles = StyleSheet.create({
  Icons: {
    width: 10,
    height: 18,
  },
  Container: {
    justifyContent: 'space-around',
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
    marginTop: 20,
  },
  Wrapper: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
  },
  CardList: {
    alignItems: 'center',
  },
  scrollView: {
    height: 530,
  },
});

const List = () => {
  return (
    <View>
      <Title text="혼자 기도" width={95} />
      <View style={styles.Wrapper}>
        <View style={styles.Container}>
          <TouchableOpacity>
            <Image source={leftIcon} style={styles.Icons} />
          </TouchableOpacity>
          <Text style={styles.text}>2021년 2월</Text>
          <TouchableOpacity>
            <Image source={rightIcon} style={styles.Icons} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.CardList}>
          <ListCard main={10} sub={54} />
          <ListCard main={5} sub={9} />
          <ListCard main={7} sub={100} />
          <ListCard main={55} sub={100} />
          <ListCard main={55} sub={100} />
          <ListCard main={55} sub={100} />
          <ListCard main={55} sub={100} />
          <ListCard main={55} sub={100} />
          <ListCard main={55} sub={100} />
          <ListCard main={55} sub={100} />
          <ListCard main={55} sub={100} />
          <ListCard main={55} sub={100} />
          <ListCard main={55} sub={100} />
          <ListCard main={55} sub={100} />
          <ListCard main={55} sub={100} />
          <ListCard main={55} sub={100} />
          <ListCard main={55} sub={100} />
          <ListCard main={55} sub={100} />
          <ListCard main={55} sub={100} />
          <ListCard main={55} sub={100} />
        </View>
      </ScrollView>
    </View>
  );
};

export default List;
