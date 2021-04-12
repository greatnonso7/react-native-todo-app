/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import {styles} from './style';
import RBSheet from 'react-native-raw-bottom-sheet';
import {connect} from 'react-redux';
import {hp} from '../responsive-dimesion';
import {normalColors as colors} from '../../colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Moment from 'moment';
import {useNavigation} from '@react-navigation/core';

const MiddleButton = props => {
  const refRBSheet = React.useRef();
  const [date, setDate] = React.useState(null);
  const [time, setTime] = React.useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);
  const [task, setTask] = React.useState('');
  const [error, setError] = React.useState({
    taskTitle: false,
    timeError: false,
    dateError: false,
  });

  const [value, setValue] = React.useState({
    index: '1',
    task: 'Important',
  });

  const navigation = useNavigation();
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setDate(date);
    hideDatePicker();
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleTimeConfirm = date => {
    setTime(date);
    hideTimePicker();
  };

  const selectType = (id, value) => {
    setValue({index: id, task: value});
  };

  const addTask = async () => {
    if (!task || task.length === 0) {
      return setError({taskTitle: true, dateError: true, timeError: true});
    }

    if (!date || date === null) {
      return setError({dateError: true, timeError: true});
    }

    if (!time || time === null) {
      return setError({timeError: true});
    }

    const data = {
      taskId: Math.random().toString(36).substring(2),
      task,
      taskLevel: value.task,
      date,
      time,
      isCompleted: '0',
    };

    await props.addSingleTask({data});
    console.log(data);

    refRBSheet.current.close();
    setTask('');
    setError(false);
    setDate(null);
    setTime(null);
    navigation.push('Dashboard');
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => refRBSheet.current.open()}>
        <Icon name="plus" size={hp(40)} color={colors.white} />
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType="slide"
        height={hp(600)}
        customStyles={{
          container: {
            borderTopLeftRadius: hp(30),
            borderTopRightRadius: hp(30),
            height: '70%',
            elevation: 24,
          },
          wrapper: {
            backgroundColor: 'transparent',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,
          },
          draggableIcon: {
            backgroundColor: '#000',
          },
        }}>
        <View style={styles.bottomSheetContainer}>
          <Text style={styles.bottomSheetTitle}>Create a Task</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.inputHeader}>Task Title</Text>
            <TextInput
              placeholder="Task Title"
              value={task}
              onChangeText={task => setTask(task)}
              style={[
                styles.textInput,
                {borderColor: error.taskTitle ? colors.red500 : '#F0F1F2'},
              ]}
            />
            {error.taskTitle && (
              <Text style={styles.errorText}>Task title is required</Text>
            )}
          </View>
          <View style={[styles.inputContainer, {marginTop: hp(20)}]}>
            <Text style={styles.inputHeader}>Task Type</Text>
            <View style={styles.taskLevelContainer}>
              {TaskType.map(item => (
                <TouchableOpacity
                  key={item.id + item.type}
                  style={[
                    styles.taskLevelButton,
                    {
                      backgroundColor:
                        value.index === item.id ? colors.purple300 : '#F7F8FA',
                    },
                  ]}
                  onPress={() => selectType(item.id, item.type)}
                  activeOpacity={0.7}>
                  <Text
                    style={[
                      styles.taskLevelButtonText,
                      {
                        color: value.index === item.id ? colors.white : '#000',
                      },
                    ]}>
                    {item.type}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={[styles.inputContainer, {marginTop: hp(30)}]}>
            <Text style={styles.inputHeader}>Choose date & time</Text>
            <View style={styles.taskScheduleContainer}>
              <View>
                <TouchableOpacity
                  onPress={() => showDatePicker()}
                  style={[
                    styles.taskScheduleDate,
                    {borderColor: error.dateError ? colors.red500 : '#F0F1F2'},
                  ]}>
                  <Icon name="calendar-plus" size={20} />
                  <View style={{flex: 1}}>
                    {isDatePickerVisible === true ? (
                      <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                      />
                    ) : (
                      <Text style={styles.scheduleText}>
                        {date !== null
                          ? Moment(date).calendar('MMMM Do YYYY')
                          : 'Select Date'}
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
                {error.dateError && (
                  <Text style={styles.errorText}>Date is required</Text>
                )}
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => showTimePicker()}
                  style={[
                    styles.taskScheduleTime,
                    {borderColor: error.timeError ? colors.red500 : '#F0F1F2'},
                  ]}>
                  <Icon name="clock-time-three-outline" size={20} />
                  <View style={{flex: 1}}>
                    {isTimePickerVisible === true ? (
                      <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={handleTimeConfirm}
                        onCancel={hideTimePicker}
                      />
                    ) : (
                      <Text style={styles.scheduleText}>
                        {time !== null
                          ? Moment(time).format('LT')
                          : 'Select Time'}
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>
                {error.timeError && (
                  <Text style={styles.errorText}>Time is required</Text>
                )}
              </View>
            </View>
          </View>

          <View style={[styles.inputContainer, {marginTop: hp(20)}]}>
            <View style={styles.submitButtonContainer}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={addTask}
                style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};

const TaskType = [
  {
    id: '1',
    type: 'Important',
  },

  {
    id: '2',
    type: 'Planned',
  },
];

const mapStateToProps = ({Task}) => ({
  isError: Task.isError,
});

const mapDispatchToProps = ({Task: {addSingleTask}}) => ({
  addSingleTask: data => addSingleTask(data),
});

export default connect(mapStateToProps, mapDispatchToProps)(MiddleButton);
