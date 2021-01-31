import React from 'react'
import { Dimensions, Image as Img } from 'react-native';
import Image from 'react-native-scalable-image';
import { _margin, _padding, _radius, _marginWidth } from '../../util/styles';

const ImageView = ({ isCircle, percentWidth, onPress, uri, local, style, m = 0, r = 0, isVisible = true }) => {
  if (!isVisible) return;

  if (isCircle) {
    return <Img
      onPress={onPress}
      style={[
        _margin(m),
        {
          borderRadius: (percentWidth ? percentWidth / 100 * Dimensions.get('window').width : Dimensions.get('window').width) - _marginWidth(m),
          resizeMode: 'cover',
          width: (percentWidth ? percentWidth / 100 * Dimensions.get('window').width : Dimensions.get('window').width) - _marginWidth(m),
          height: (percentWidth ? percentWidth / 100 * Dimensions.get('window').width : Dimensions.get('window').width) - _marginWidth(m)
        },
        style
      ]}
      source={{ uri: uri }}
    />
  }

  if (local) {
    return (
      <Image
        onPress={onPress}
        style={[
          _margin(m),
          _radius(r),
          style
        ]}
        width={(percentWidth ? percentWidth / 100 * Dimensions.get('window').width : Dimensions.get('window').width) - _marginWidth(m)}
        source={local}
      />
    )
  } else
    return (
      <Image
        onPress={onPress}
        style={[
          _margin(m),
          _radius(r),
          style
        ]}
        width={(percentWidth ? percentWidth / 100 * Dimensions.get('window').width : Dimensions.get('window').width) - _marginWidth(m)}
        source={{ uri: uri }}
      />
    )
}

export default ImageView;