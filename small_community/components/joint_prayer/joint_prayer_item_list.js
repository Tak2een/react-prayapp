import React from 'react';

import JointPrayerItem from './joint_prayer_item';
import {FlatList, StyleSheet} from 'react-native';

const JointPrayerItemList = props => {
  return (
    <FlatList
      style={styles.scrollView}
      data={props.itemList}
      renderItem={obj => {
        return <JointPrayerItem />;
      }}></FlatList>
  );
};

const styles = StyleSheet.create({});

export default JointPrayerItemList;
