import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Time,
} from 'react-native';
import moment from 'moment';
import DateTimePickerModel from 'react-native-modal-datetime-picker';
import CheckBox from 'react-native-check-box';
import SelectDropdown from 'react-native-select-dropdown';
const MakeRoom = () => {
  const [isSelected, setSelection] = useState(false);
  const ToggleCheckBox = () => {
    setSelection(!isSelected);
  };

  const [isStartDatePickerVisible, setStartDatePickerVisibility] =
    useState(false);
  const [startTime, setStartTime] = useState(
    moment(new Date()).format('hh:mm A'),
  );

  const [endTime, setEndTime] = useState(moment(new Date()).format('hh:mm A'));
  const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);

  const showStartDatePicker = () => {
    setStartDatePickerVisibility(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisibility(false);
  };

  const handleStartConfirm = time => {
    setStartTime(moment(time).format('hh:mm A'));
    hideStartDatePicker();
  };

  const showEndDatePicker = () => {
    setEndDatePickerVisibility(true);
  };

  const hideEndDatePicker = () => {
    setEndDatePickerVisibility(false);
  };

  const handleEndConfirm = time => {
    setEndTime(moment(time).format('hh:mm A'));
    hideEndDatePicker();
  };

  const prayer = ['환희의 신비'];

  return (
    <SafeAreaView>
      <View style={styles.mainFrame}>
        <Text style={styles.font}>기도방 명</Text>
        <TextInput
          style={styles.textInput}
          placeholder="[9일기도/기도 구분]"></TextInput>

        <Text style={styles.font}>방설정</Text>
        <TextInput style={styles.textInput}></TextInput>

        <Text style={styles.font}>주최자 명</Text>
        <TextInput style={styles.textInput}></TextInput>

        <View style={styles.rowView}>
          <Text style={styles.font}>알람 시간</Text>
          <View style={styles.rightRowView}>
            {/* 시간 선택 */}
            <View style={styles.timeButton} onTouchStart={showStartDatePicker}>
              <Text>{startTime}</Text>
            </View>
            <DateTimePickerModel
              mode="time"
              isVisible={isStartDatePickerVisible}
              onConfirm={handleStartConfirm}
              onCancel={hideStartDatePicker}
            />
            <Text style={styles.font}>~</Text>
            {/* 시간 선택 */}
            <View style={styles.timeButton} onTouchStart={showEndDatePicker}>
              <Text>{endTime}</Text>
            </View>
            <DateTimePickerModel
              mode="time"
              isVisible={isEndDatePickerVisible}
              onConfirm={handleEndConfirm}
              onCancel={hideEndDatePicker}
            />
          </View>
        </View>

        <View style={styles.rowView}>
          <Text style={styles.font}>레지오단원 전용 여부</Text>
          <View style={styles.rightRowView}>
            <CheckBox
              style={styles.CheckBox}
              isChecked={isSelected}
              onClick={ToggleCheckBox}
              checkBoxColor="#FFDB66"
              // style={styles.checkbox}
            />
            <Text style={styles.font}>선택</Text>
          </View>
        </View>

        <View style={styles.rowView}>
          <Text style={styles.font}>기도문</Text>
          <View style={styles.selectBox}>
            <SelectDropdown
              data={prayer}
              defaultValue={prayer[0]}
              buttonTextStyle={{fontSize: 15, lineHeight: 18}}
              buttonStyle={styles.selectBox}
            />
          </View>
        </View>

        <Text style={styles.font}>비밀번호(선택)</Text>
        <TextInput style={styles.textInput}></TextInput>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainFrame: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  font: {
    fontSize: 16,
    lineHeight: 19,
  },
  textInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    lineHeight: 19,
    paddingVertical: 10,
    marginBottom: 20,
  },
  rowView: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  rightRowView: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeButton: {
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 18,
    padding: 6,
    backgroundColor: '#F1F3F5',
    borderRadius: 3,
  },
  CheckBox: {
    color: 'yellow',
  },
  selectBox: {
    width: 104,
    height: 30,
    backgroundColor: '#F1F3F5',
  },
});

export default MakeRoom;
