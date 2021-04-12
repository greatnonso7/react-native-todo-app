import {normalColors as colors, normalColors} from './colors';
import {hp} from './shared/responsive-dimesion';

const font = {
  fontFamily: 'Poppins-Regular',
};

export const light = {
  fontFamily: 'Poppins-Light',
  color: colors.dark,
};

export const regular = {
  fontFamily: 'Poppins-Regular',
  color: colors.grey700,
};

export const medium = {
  fontFamily: 'Poppins-Medium',
  color: colors.dark,
};

export const semiBold = {
  fontFamily: 'Poppins-SemiBold',
  color: colors.dark,
};

export const bold = {
  fontFamily: 'Poppins-Bold',
  color: colors.dark,
};

export const globalStyle = (colors = normalColors) => ({
  colors,
  font,
  light,
  regular,
  semiBold,
  bold,
  medium,
  main: {
    //Light Text sizes
    lightText10: {
      fontSize: hp(10),
      lineHeight: hp(15),
      ...light,
    },

    lightText12: {
      fontSize: hp(12),
      lineHeight: hp(18),
      ...light,
    },

    lightText14: {
      fontSize: hp(14),
      lineHeight: hp(21),
      ...light,
    },

    lightText16: {
      fontSize: hp(16),
      lineHeight: hp(24),
      ...light,
    },

    lightText20: {
      fontSize: hp(20),
      lineHeight: hp(30),
      ...light,
    },

    lightText24: {
      fontSize: hp(24),
      lineHeight: hp(36),
      ...light,
    },
    lightText28: {
      fontSize: hp(28),
      lineHeight: hp(42),
      ...light,
    },
    lightText36: {
      fontSize: hp(36),
      lineHeight: hp(54),
      ...light,
    },
    lightText40: {
      fontSize: hp(40),
      lineHeight: hp(64),
      ...light,
    },
    //Regular/Normal Text sizes
    regularText10: {
      fontSize: hp(10),
      lineHeight: hp(15),
      ...regular,
    },

    regularText12: {
      fontSize: hp(12),
      lineHeight: hp(18),
      ...regular,
    },

    regularText14: {
      fontSize: hp(14),
      lineHeight: hp(21),
      ...regular,
    },

    regularText16: {
      fontSize: hp(16),
      lineHeight: hp(24),
      ...regular,
    },

    regularText20: {
      fontSize: hp(20),
      lineHeight: hp(30),
      ...regular,
    },

    regularText24: {
      fontSize: hp(24),
      lineHeight: hp(36),
      ...regular,
    },
    regularText28: {
      fontSize: hp(28),
      lineHeight: hp(42),
      ...regular,
    },
    regularText36: {
      fontSize: hp(36),
      lineHeight: hp(54),
      ...regular,
    },
    regularText40: {
      fontSize: hp(40),
      lineHeight: hp(64),
      ...regular,
    },
    //Medium Text sizes
    mediumText10: {
      fontSize: hp(10),
      lineHeight: hp(15),
      ...medium,
    },

    mediumText12: {
      fontSize: hp(12),
      lineHeight: hp(18),
      ...medium,
    },

    mediumText14: {
      fontSize: hp(14),
      lineHeight: hp(21),
      ...medium,
    },

    mediumText16: {
      fontSize: hp(16),
      lineHeight: hp(24),
      ...medium,
    },

    mediumText20: {
      fontSize: hp(20),
      lineHeight: hp(30),
      ...medium,
    },

    mediumText24: {
      fontSize: hp(24),
      lineHeight: hp(36),
      ...medium,
    },
    mediumText28: {
      fontSize: hp(28),
      lineHeight: hp(42),
      ...medium,
    },
    mediumText36: {
      fontSize: hp(36),
      lineHeight: hp(54),
      ...medium,
    },
    mediumText40: {
      fontSize: hp(40),
      lineHeight: hp(64),
      ...medium,
    },
    //Semibold Text sizes
    semiBoldText10: {
      fontSize: hp(10),
      lineHeight: hp(15),
      ...semiBold,
    },

    semiBoldText12: {
      fontSize: hp(12),
      lineHeight: hp(18),
      ...semiBold,
    },

    semiBoldText14: {
      fontSize: hp(14),
      lineHeight: hp(21),
      ...semiBold,
    },

    semiBoldText16: {
      fontSize: hp(16),
      lineHeight: hp(24),
      ...semiBold,
    },

    semiBoldText20: {
      fontSize: hp(20),
      lineHeight: hp(30),
      ...semiBold,
    },
    semiBoldText24: {
      fontSize: hp(24),
      lineHeight: hp(36),
      ...semiBold,
    },
    semiBoldText28: {
      fontSize: hp(28),
      lineHeight: hp(42),
      ...semiBold,
    },
    semiBoldText36: {
      fontSize: hp(36),
      lineHeight: hp(54),
      ...semiBold,
    },
    semiBoldText40: {
      fontSize: hp(40),
      lineHeight: hp(64),
      ...semiBold,
    },
    //Bold Text sizes
    boldText10: {
      fontSize: hp(10),
      lineHeight: hp(15),
      ...bold,
    },

    boldText12: {
      fontSize: hp(12),
      lineHeight: hp(18),
      ...bold,
    },

    boldText14: {
      fontSize: hp(14),
      lineHeight: hp(21),
      ...bold,
    },

    boldText16: {
      fontSize: hp(16),
      lineHeight: hp(24),
      ...bold,
    },

    boldText20: {
      fontSize: hp(20),
      lineHeight: hp(30),
      ...bold,
    },

    boldText24: {
      fontSize: hp(24),
      lineHeight: hp(36),
      ...bold,
    },

    boldText28: {
      fontSize: hp(28),
      lineHeight: hp(42),
      ...bold,
    },

    boldText36: {
      fontSize: hp(36),
      lineHeight: hp(54),
      ...bold,
    },
    boldText40: {
      fontSize: hp(40),
      lineHeight: hp(64),
      ...bold,
    },
  },
});
