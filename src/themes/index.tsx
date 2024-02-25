import { extendTheme } from 'native-base';
import components from './components';

const commonColors = {
  white: '#FFFFFF',
  whiteGradient: '#FFFFFF42',
  black: '#00080E',
  transparent: '#FFFFFF00',
  loaderBgColor: '#FFFDFDA1',
  gold: {
    50: '#EDB416',
    100: '#AF8307',
  },
  gray: {
    50: '#FAFAFA',
    100: '#EEF1F4',
    200: '#BDBDBD',
    300: '#767676',
    400: '#595959',
    500: '#444444',
    600: '#4F4F4F',
    700: '#333333',
    800: '#BCC9D3',
  },
  effect: {
    50: '#00080E00',
    100: '#00080E73',
    200: '#00080E99',
    300: '#00080EBF',
    400: '#00070B14',
    500: '#000000',
  },
  accent: {
    50: '#00A79D',
    100: '#00A18E',
    200: '#007B6C',
    300: '#FF5793',
    400: '#FF5C00',
    500: '#FF8502',
    600: '#02B1D8',
    700: '#03E3C9',
    800: '#01E7AF',
  },
  error: {
    50: '#F6E5E5',
    100: '#A500001A',
    200: '#A5000033',
    600: '#A50000',
  },
};

const fontConfig = {
  Poppins: {
    100: {
      normal: 'Poppins-Thin',
      italic: 'Poppins-ThinItalic',
    },
    200: {
      normal: 'Poppins-ExtraLight',
      italic: 'Poppins-ExtraLightItalic',
    },
    300: {
      normal: 'Poppins-Light',
      italic: 'Poppins-LightItalic',
    },
    400: {
      normal: 'Poppins-Regular',
      italic: 'Poppins-Italic',
    },
    500: {
      normal: 'Poppins-Medium',
      italic: 'Poppins-MediumItalic',
    },
    600: {
      normal: 'Poppins-SemiBold',
      italic: 'Poppins-SemiBoldItalic',
    },
    700: {
      normal: 'Poppins-Bold',
      italic: 'Poppins-BoldItalic',
    },
    800: {
      normal: 'Poppins-ExtraBold',
      italic: 'Poppins-ExtraBoldItalic',
    },
    900: {
      normal: 'Poppins-Black',
      italic: 'Poppins-BlackItalic',
    },
  },
  Roboto: {
    100: {
      normal: 'Roboto-Thin',
      italic: 'Roboto-ThinItalic',
    },
    300: {
      normal: 'Roboto-Light',
      italic: 'Roboto-LightItalic',
    },
    400: {
      normal: 'Roboto-Regular',
      italic: 'Roboto-Italic',
    },
    500: {
      normal: 'Roboto-Medium',
      italic: 'Roboto-MediumItalic',
    },
    600: {
      normal: 'Roboto-Medium',
      italic: 'Roboto-MediumItalic',
    },
    700: {
      normal: 'Roboto-Bold',
      italic: 'Roboto-BoldItalic',
    },
    800: {
      normal: 'Roboto-Bold',
      italic: 'Roboto-BoldItalic',
    },
    900: {
      normal: 'Roboto-Black',
      italic: 'Roboto-BlackItalic',
    },
  },
};

const fonts = {
  roboto: 'Roboto',
  poppins: 'Poppins',
};

const fontSizes = {
  '2xs': 10,
  xs: 12,
  sm: 14,
  md: 16,
  '2md': 17,
  lg: 18,
  '2lg': 19,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 32,
  '5xl': 36,
  '6xl': 40,
  '7xl': 50,
};

const letterSpacings = {
  '2xs': '-0.05em',
  xs: '-0.03em',
  sm: '-0.02em',
  md: '-0.005em',
  lg: 0,
};

export const AhmTheme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  colors: {
    ...commonColors,
    brand: {
      50: '#002B490D',
      100: '#002B491A',
      200: '#002B4933',
      260: '#002B4942',
      300: '#002B494D',
      400: '#002B4966',
      500: '#0080DA',
      600: '#002B49',
    },
    gradient: {
      50: '#002B49',
      100: '#002B4900',
    },
  },
  components,
  fontConfig,
  fonts,
  fontSizes,
  letterSpacings,
});

export const AetnaTheme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  colors: {
    ...commonColors,
    brand: {
      50: '#F9F5FA',
      100: '#F2ECF6',
      200: '#E5DAE9',
      260: '#7D3F9842',
      300: '#7D3F984D',
      400: '#CBB2D7',
      500: '#AD3FDD',
      600: '#7D3F98',
    },
    gradient: {
      50: '#7D3F98',
      100: '#7D3F9800',
    },
  },
  components,
  fontConfig,
  fonts,
  fontSizes,
  letterSpacings,
});

export const CvsTheme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  colors: {
    ...commonColors,
    brand: {
      50: '#CC00000D',
      100: '#CC00001A',
      200: '#CC000033',
      260: '#CC000042',
      300: '#CC00004D',
      400: '#CC000066',
      500: '#FB2C2C',
      600: '#CC0000',
    },
    gradient: {
      50: '#CC0000',
      100: '#FFFFFF00',
    },
  },
  components,
  fontConfig,
  fonts,
  fontSizes,
  letterSpacings,
});

export default { AhmTheme, AetnaTheme, CvsTheme };
