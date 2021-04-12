import {StyleSheet} from 'react-native';
import {wp, hp} from '../shared/responsive-dimesion';
import {normalColors as colors} from '../colors';
import {globalStyle} from '../style';

const {main} = globalStyle(colors);

export const styles = StyleSheet.create({
  profile: {
    height: hp(55),
    width: wp(60),
    bottom: hp(5),
  },
  profileContainer: {
    height: hp(65),
    width: wp(65),
    backgroundColor: colors.purple100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...main.regularText24,
    color: '#757285',
  },
  name: {
    ...main.boldText24,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    height: '100%',
  },
  body: {
    marginHorizontal: hp(20),
  },
  navButtons: {
    height: hp(60),
    width: wp(130),
    backgroundColor: colors.purple300,
    marginLeft: hp(22),
    borderRadius: hp(15),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle: {
    ...main.semiBoldText16,
    color: colors.white,
  },
  taskTitle: {
    ...main.regularText16,
    color: '#757285',
    paddingBottom: hp(10),
  },
  taskHeading: {
    ...main.semiBoldText16,
  },
  completedHeading: {
    ...main.semiBoldText16,
    textDecorationLine: 'line-through',
  },
  tasksContainer: {
    width: wp(330),
    padding: hp(20),
    backgroundColor: '#F9FAFC',
    marginBottom: hp(10),
    borderRadius: hp(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  radio: {
    height: hp(30),
    width: wp(30),
    borderWidth: hp(2),
    borderRadius: hp(50),
    backgroundColor: colors.white,
    borderColor: '#D4D5D7',
  },
  bottomSheetContainer: {
    marginHorizontal: hp(20),
  },
  bottomSheetTitle: {
    ...main.semiBoldText20,
    textAlign: 'center',
  },
  inputContainer: {
    marginTop: hp(10),
  },
  inputHeader: {
    ...main.semiBoldText14,
    color: '#888595',
  },
  textInput: {
    height: hp(50),
    width: wp(330),
    borderWidth: 1,
    marginTop: hp(10),
    borderRadius: hp(10),
    backgroundColor: '#F7F8FA',
    paddingLeft: hp(10),
    fontSize: hp(16),
  },
  taskLevelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(10),
  },
  taskLevelButton: {
    height: hp(55),
    width: hp(150),
    borderRadius: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  taskLevelButtonText: {
    ...main.semiBoldText16,
    color: colors.white,
  },
  taskScheduleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(20),
  },
  taskScheduleDate: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(50),
    width: wp(150),
    backgroundColor: '#F7F8FA',
    borderRadius: hp(10),
  },
  taskScheduleTime: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(50),
    width: wp(150),
    backgroundColor: '#F7F8FA',
    borderRadius: hp(10),
  },
  scheduleText: {
    ...main.semiBoldText14,
    paddingLeft: hp(5),
  },
  submitButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(30),
  },
  submitButton: {
    height: hp(65),
    width: hp(330),
    backgroundColor: '#FD93A1',
    borderRadius: hp(20),
    shadowColor: '#FD93A1',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButtonText: {
    ...main.semiBoldText20,
    color: colors.white,
  },
  noTaskContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  noTaskText: {
    ...main.semiBoldText16,
    color: colors.grey300,
  },
});
