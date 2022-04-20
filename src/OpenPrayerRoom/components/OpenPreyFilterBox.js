import React from 'react';
import {StyleSheet, View, ScrollView, Text, Button} from 'react-native';
import openPreyFilterTypesData from '../data/openPreyFilterTypes';

const OpenPreyFilterBox = ({roomData}) => {
  const [openPreyFilterTypes, setOpenPreyFilterTypes] = React.useState(
    openPreyFilterTypesData,
  );
  const [isOpened, setIsOpened] = React.useState(true);

  const handleToggleFilterBox = () => {
    setIsOpened(prev => !prev);
  };

  const handleSelectFilterType = (type, index) => {
    console.log(index);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.headWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleWrapper.title}>열린 기도방</Text>
          </View>
          <Button title="토글" onPress={handleToggleFilterBox} />
        </View>
        {isOpened && (
          <View style={styles.boxWrapper}>
            {openPreyFilterTypes.map((t, _) => {
              return (
                <View style={styles.boxWrapper.column} key={_}>
                  <Text style={styles.boxWrapper.column.title}>{t.title}</Text>

                  <ScrollView
                    horizontal
                    contentContainerStyle={styles.boxWrapper.column.types}>
                    {t.selectors.map((s, __) => (
                      <View
                        style={[
                          styles.boxWrapper.column.typeButton,
                          s.selected &&
                            styles.boxWrapper.column.typeButton.selected,
                        ]}
                        key={__}
                        onTouchStart={() => handleSelectFilterType(s, __)}>
                        <Text>{s.key}</Text>
                      </View>
                    ))}
                  </ScrollView>
                </View>
              );
            })}
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  headWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  titleWrapper: {
    borderBottomWidth: 2,
    paddingHorizontal: 10,
    title: {
      fontSize: 20,
    },
  },
  boxWrapper: {
    display: 'flex',
    borderColor: '#E1E1E1',
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 13,
    column: {
      display: 'flex',
      flexDirection: 'row',
      title: {
        width: 100,
        padding: 15,
      },
      types: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
      },
      typeButton: {
        display: 'flex',
        justifyContent: 'center',
        borderWidth: 2,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 15,
        marginRight: 10,
        borderColor: '#D8D8D8',
        selected: {
          backgroundColor: '#FFEBAA',
          borderColor: '#FFEBAA',
        },
      },
    },
  },
});

export default OpenPreyFilterBox;
