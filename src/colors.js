/**
 *  Colors used by light and dark mode that are shared and unique.
 */
const sharedColors = {
  white: '#FFFFFF',
  dark: '#0E1728',
  primary: '#3200C8',
  blue: '#0138FA',
  secondary: '#9D9DAC',
  grey50: '#F7F9FA',
  grey100: '#F1F5F6',
  grey300: '#BEC7CB',
  grey400: '#8C9398',
  grey600: '#363F48',
  grey700: '#252F3C',
  grey900: '#0E1728',
  grey200: '#E3EBED',
  gray: '#DBDAE6',
  lightGray: '#F7F9FA',
  darkGray: '#E0DCEA',
  skyBlue: '#716EF6',
  lightSkyBlue: '#ECEBFD',
  pink: '#F86267',
  green: '#179F35',
  green500: '#6DC122',
  purple100: '#8A7ED4',
  purple300: '#5A3EA4',
  lightGreen: '#6ABAA7',
  red: '#DB353A',
  red500: '#DB353A',
  yellow: '#FFE67B',
  yellow500: '#F7C545',
  snowMountain: '#D2DAF5',
  transparent: 'transparent',
};

/**
 *  Default consumer APP Mode Unique Colors
 */
export const normalColors = {
  ...sharedColors,
  headerBg: '#2F2F3B',
};
/**
 *  Consumer APP Dark Mode Unique Colors
 */
export const darkModeColors = {
  ...sharedColors,
  headerBg: '#3C4954',
};
