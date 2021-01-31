import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { _margin, _padding, _radius, _getContrastYIQ } from './../../util/styles';
var Spinner = require('react-native-spinkit');

export const Button = ({ isFull, colorBg = '#0C71A3', colorBgDisabled = 'rgba(0,0,0,0.3)', onPress, iconLeft, iconRight, colorLabel, colorLabelDisabled, loadingType = 'ThreeBounce', fontSize = 16, title, styleLabel, style, w, h, m = 0, p = 10, r = 0, isVisible = true, isLoading = false, isDisabled = false }) => {
  if (!isVisible) return;

  if (!colorLabel) {
    colorLabel = _getContrastYIQ(colorBg);
  }
  if (!colorLabelDisabled) {
    colorLabelDisabled = _getContrastYIQ(colorBgDisabled);
  }

  return (
    <TouchableOpacity
      style={[
        {
          flex: isFull ? 1 : null,
          backgroundColor: isDisabled ? colorBgDisabled : colorBg,
          alignItems: 'center',
          justifyContent: 'center',
        },
        _padding(p),
        _margin(m),
        _radius(r),
        { width: w ? w : null },
        { height: h ? h : null },
        style,
      ]}
      disabled={isDisabled || isLoading}
      onPress={onPress}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {iconLeft ? (
          <Icon
            name={iconLeft}
            size={fontSize * 1.3}
            color={colorLabel}
          />
        ) : (
            <View />
          )}
        <Spinner isVisible={isLoading} size={fontSize * 1.5} type={loadingType} color={colorLabel} />
        {title && !isLoading ?
          <Text
            style={[
              {
                color: isDisabled ? colorLabelDisabled : colorLabel,
                fontSize: fontSize,
                marginHorizontal: 5
              },
              styleLabel,
            ]}>
            {title}
          </Text>
          : <View />}
        {iconRight ? (
          <Icon
            name={iconRight}
            size={fontSize * 1.3}
            color={colorLabel}
          />
        ) : (
            <View />
          )}
      </View>
    </TouchableOpacity>
  )
}