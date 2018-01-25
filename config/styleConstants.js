import { Dimensions, Platform, PixelRatio } from 'react-native';


const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// scale based on iphone 5s scale
const scale = SCREEN_WIDTH / 320;
// scale based on iphone 6
//const scale = SCREEN_WIDTH / 375; //http://www.kylejlarson.com/blog/iphone-6-screen-size-web-design-tips/

// normalize values based on device pixels
// particularly useful for adjusting fontSizes
export const normalize = (size) => {

  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(size*scale))
  }

  if (Platform.OS === 'android') {
    return Math.round(PixelRatio.roundToNearestPixel(size*scale))-2
  }

  return Math.round(PixelRatio.roundToNearestPixel(size))
  
}

export const styleConstants = {
    color: {
        // top-level colors
        primary: '#3e29de',
        screenBackground: '#FFF',
        screenBackgroundGrey: '#EBEBEB',
        errorColor: 'red',
        // greys
      
        // blacks
        black1: 'rgba(0, 0 , 0, .87)', // android standard for primary text  (use in segmented control and total section)
        black2: 'rgba(0, 0 , 0, .72)', // non-standard for primary text
        black3: 'rgba(0, 0 , 0, .54)', // android standard for helper text
        black4: 'rgba(0, 0 , 0, .38)', // android standard for disabled text
        black5: 'rgba(0, 0 , 0, .12)', // for the divider line
    },
    //
    //
    defaultMargin: 16,
    topAreaHeight: 84, // do not normalize heights based on widths.
    // fontFamily
    fontFamily: {
      light: Platform.OS === 'android' ? 'Roboto' : 'System',
      regular: Platform.OS === 'android' ? 'Roboto' : 'System',
      semibold: Platform.OS === 'android' ? 'Roboto' : 'System',
      bold: Platform.OS === 'android' ? 'Roboto' : 'System',
    },
    //
    // font weights
    fontWeight: {
      light: Platform.OS === 'android' ? '300' : '300', 
      regular: Platform.OS === 'android' ? '400' : '400', 
      medium: Platform.OS === 'android' ? '500' : '500', 
      semibold: Platform.OS === 'android' ? '600' : '600', 
      bold: Platform.OS === 'android' ? '700' : '700',  
    },
    //
    // font sizes
    fontSize: {
      xxl: normalize(24),
      xl: normalize(20),
      lg: normalize(17), 
      md: normalize(15),
      sm: normalize(13), 
      xs: normalize(12), 
    }
  }


 