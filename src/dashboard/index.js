/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from './style';
import {normalColors as colors} from '../colors';
import {connect} from 'react-redux';
import {images} from '../images';
import Moment from 'moment';
import {hp} from '../shared/responsive-dimesion';

const {profile} = images;

const Dashboard = props => {
  const tasks = props.tasks;
  const [value, setValue] = React.useState({
    index: '1',
    task: 'My Day',
  });
  const selectType = (id, value) => {
    setValue({index: id, task: value});
  };

  const completeTask = async id => {
    await props.completeTask(id);
    props.navigation.push('Dashboard');
  };

  React.useEffect(() => {
    props.getTasks();
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <View style={styles.headerContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Hello,</Text>
              <Text style={styles.name}>Ichoku Chinonso</Text>
            </View>
            <View style={styles.profileContainer}>
              <Image
                source={profile.user}
                resizeMode="contain"
                style={styles.profile}
              />
            </View>
          </View>
        </View>
        <View style={{marginTop: hp(40)}}>
          <FlatList
            data={Data}
            renderItem={({item}) => (
              <TouchableOpacity
                activeOpacity={0.7}
                key={item.id}
                onPress={() => selectType(item.id, item.type)}
                style={[
                  styles.navButtons,
                  {
                    backgroundColor:
                      value.index === item.id ? colors.purple300 : '#F7F8FA',
                  },
                ]}>
                <Text
                  style={[
                    styles.buttonTitle,
                    {
                      color: value.index === item.id ? colors.white : '#000',
                    },
                  ]}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{paddingRight: hp(50)}}
            keyExtractor={item => item.id.toString()}
          />
        </View>
        <View
          style={{
            marginTop: hp(20),
            marginHorizontal: hp(20),
          }}>
          <Text style={styles.taskTitle}>Tasks</Text>
          {tasks.length === 0 && (
            <View style={styles.noTaskContainer}>
              <Text style={styles.noTaskText}>No Tasks has been added</Text>
            </View>
          )}

          {tasks &&
            tasks.map(item => {
              if (item.isCompleted === '0') {
                return (
                  <View key={item.taskId} style={styles.tasksContainer}>
                    <View>
                      <Text style={styles.taskHeading}>{item.task}</Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="calendar-today" size={25} />
                        <Text>{Moment(item.date).format()}</Text>
                      </View>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="alarm" size={20} />
                        <Text>{Moment(item.time).format('LT')}</Text>
                      </View>
                    </View>
                    <View>
                      <TouchableOpacity
                        onPress={() => completeTask(item.taskId)}>
                        <View style={styles.radio} />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }
            })}
        </View>
        <View style={{marginTop: hp(20), marginHorizontal: hp(20)}}>
          <Text style={styles.taskTitle}>Completed</Text>

          {tasks &&
            tasks.map(item => {
              if (item.isCompleted === '1') {
                return (
                  <View key={item.taskId} style={styles.tasksContainer}>
                    <View>
                      <Text style={styles.completedHeading}>{item.task}</Text>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="calendar-today" size={25} />
                        <Text>{Moment(item.date).format('DD/MM/YYYY')}</Text>
                      </View>
                      <View
                        style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="alarm" size={20} />
                        <Text>{Moment(item.time).format('LT')}</Text>
                      </View>
                    </View>
                    <View>
                      <TouchableOpacity>
                        <Icon name="check-circle" color="#5a3ea4" size={35} />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }
            })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Data = [
  {
    id: '1',
    title: 'My Day',
  },
  {
    id: '2',
    title: 'Important',
  },
  {
    id: '3',
    title: 'Planned',
  },
];

const mapStateToProps = ({Task}) => ({
  tasks: Task.tasks,
});

const mapDispatchToProps = ({Task: {getTasks, completeTask}}) => ({
  getTasks: () => getTasks(),
  completeTask: id => completeTask(id),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
