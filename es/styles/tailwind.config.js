import _extends from "@babel/runtime/helpers/esm/extends";
const BORDER_RADIUS = '6px';
const BORDER_COLOR = '#E8E9EC';
module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        900: '#12151D',
        800: '#2D334B',
        700: '#40496A',
        600: '#525E88',
        500: '#6372A5',
        400: '#7F8BB4',
        300: '#9BA5C5',
        200: '#B8BDD6',
        100: '#E2E5EE',
        75: '#EFF1F7',
        50: '#F7F8FC'
      },
      red: {
        900: '#2A0A13',
        800: '#67172D',
        700: '#902241',
        600: '#B92A53',
        500: '#E13466',
        400: '#E75981',
        300: '#EC7D9D',
        200: '#F1A2B9',
        100: '#F7C7D5',
        50: '#FCECF1'
      },
      orange: {
        900: '#2F1B07',
        800: '#744410',
        700: '#A35F16',
        600: '#D17A1D',
        500: '#FF9423',
        400: '#FFA84C',
        300: '#FFBB73',
        200: '#FFCE9B',
        100: '#FFE1C3',
        50: '#FFF5EA'
      },
      yellow: {
        900: '#2E2306',
        800: '#745A10',
        700: '#A37D16',
        600: '#D0A11C',
        500: '#FFC422',
        400: '#FFCE4A',
        300: '#FFD973',
        200: '#FFE49B',
        100: '#FFEEC3',
        50: '#FFF9EB'
      },
      green: {
        900: '#032520',
        800: '#095F4F',
        700: '#0A866F',
        600: '#0EAC8E',
        500: '#10D0AD',
        400: '#3BD8BB',
        300: '#66E1CA',
        200: '#92EAD9',
        100: '#BDF2E8',
        50: '#E9FAF7'
      },
      blue: {
        900: '#061C2C',
        800: '#0E446E',
        700: '#135F9B',
        600: '#177AC7',
        500: '#1D95F2',
        400: '#46A8F4',
        300: '#6FBBF6',
        200: '#97CEF9',
        100: '#C1E1FB',
        75: '#D7EEFF',
        50: '#EAF5FD'
      },
      purple: {
        900: '#1E0A2A',
        800: '#4A1768',
        700: '#682290',
        600: '#852BB9',
        500: '#A233E1',
        400: '#B257E7',
        300: '#C37DEC',
        200: '#D3A2F1',
        100: '#E5C6F7',
        50: '#F6ECFB'
      }
    },
    spacing: {
      'px': '1px',
      '0': '0',
      '1': '5px',
      '2': '10px',
      '3': '15px',
      '4': '20px',
      '5': '25px',
      '6': '30px',
      '8': '40px',
      '10': '50px',
      '12': '60px',
      '16': '80px'
    },
    backgroundColor: theme => theme('colors'),
    borderColor: theme => _extends({}, theme('colors'), {
      default: BORDER_COLOR,
      input: BORDER_COLOR,
      primary: theme('colors.blue.500'),
      success: theme('colors.green.500'),
      danger: theme('colors.red.500')
    }),
    borderRadius: {
      none: '0',
      sm: '3px',
      default: BORDER_RADIUS,
      lg: '9px',
      full: '9999px'
    },
    borderWidth: {
      'default': '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px'
    },
    boxShadow: theme => ({
      'default': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      'outline': '0 0 0 3px rgba(66, 153, 225, 0.5)',
      'primary': `0 0 0 2px ${theme('colors.blue.100')}`,
      'danger': `0 0 0 2px ${theme('colors.red.100')}`,
      'success': `0 0 0 2px ${theme('colors.green.100')}`,
      'none': 'none'
    }),
    fontFamily: {
      primary: ['-apple-system', 'BlinkMacSystemFont', 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      secondary: ['NeueEinstellung', 'Helvetica', 'Arial', 'sans-serif']
    },
    fontSize: {
      'xs': '10px',
      'sm': '12px',
      'base': '14px',
      'lg': '16px',
      'xl': '18px',
      '2xl': '20px',
      '3xl': '24px',
      '4xl': '30px',
      '5xl': '36px'
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.15px',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em'
    },
    lineHeight: {
      'none': '1',
      'tight': '1.25',
      'snug': '1.375',
      'normal': '1.5',
      'relaxed': '1.625',
      'loose': '2',
      '5xl': '44px',
      '4xl': '38px',
      '3xl': '32px',
      '2xl': '26px',
      'xl': '24px',
      'lg': '22px',
      'base': '18px',
      'sm': '16px'
    },
    opacity: {
      '0': '0',
      '25': '0.25',
      '40': '0.4',
      '50': '0.5',
      '60': '0.6',
      '75': '0.75',
      '100': '1'
    }
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active']
  },
  corePlugins: {},
  plugins: []
};