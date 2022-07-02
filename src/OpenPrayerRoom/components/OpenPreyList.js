import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import OpenPreyItem from './OpenPreyItem';
import OpenPreyFilterBox from './OpenPreyFilterBox';
import Modal from '../components/Modal';

const OpenPreyList = ({roomData, navigation}) => {
  const [open, setOpen] = React.useState(false);

  const mapRoomList = roomData.map((data, _) => (
    <OpenPreyItem
      roomData={data}
      key={data.key}
      touchCallback={() => navigation.navigate('OpenPreyerRosaryView')}
    />
  ));

  return (
    <>
      <View style={styles.container}>
        <OpenPreyFilterBox />
        <ScrollView>{mapRoomList}</ScrollView>
      </View>

      <Modal
        title="입장 불가"
        content="기도 시작 10분 전까지 입장이 가능합니다."
        confirmFn={() => setOpen(!open)}
        open={open}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});

export default OpenPreyList;
