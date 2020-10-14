// @flow

import variable from './../variables/platform';

export default (variables /* : * */ = variable) => {
  const textTheme = {
    fontSize: variables.DefaultFontSize,
    fontFamily: variables.fontFamily,
    color: variables.textColor,
    '.large': {
      fontSize: variables.DefaultFontSize * 1.25,
    },
    '.bold': {
      fontWeight: '700',
    },
    '.light': {
      fontWeight: '200',
    },
    '.bolder': {
      fontWeight: '800',
    },
    '.italic': {
      fontStyle: 'italic',
    },
    '.brandLight': {
      color: variables.brandLight,
    },
    '.brandPrimary': {
      color: variables.brandPrimary,
    },
    '.note': {
      color: '#a7a7a7',
      fontSize: variables.noteFontSize
    }
  };

  return textTheme;
};
