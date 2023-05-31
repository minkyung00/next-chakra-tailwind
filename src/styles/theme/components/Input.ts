import { defineStyleConfig } from '@chakra-ui/react';
import { colors } from '../foundations/colors';

const Input = defineStyleConfig({
  baseStyle: {
    padding: '16px',
    color: colors.light,
    borderWidth: '1px',
    borderRadius: '16px' /** or 2xl */,
    borderColor: colors.gray[300],
    _hover: {
      color: colors.gray[500],
      borderColor: colors.gray[500],
    },
    _disabled: {
      color: colors.gray[500],
      backgroundColor: colors.gray[100],
      borderColor: colors.gray[200],
    },
    errorBorderColor: colors.error,
    focusBorderColor: colors.gray[600],
  },
  variants: {
    hover: {},
    active: {},
    disabled: {},
    error: {},
    typed: {},
  },
});
