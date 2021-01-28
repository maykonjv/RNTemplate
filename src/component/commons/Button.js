import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { _margin, _padding, _radius } from './../../util/styles';

export const Button = ({ full, colorBg = '#0C71A3', onPress, iconLeft, iconRight, colorLabel = '#fff', fontSize = 16, title, styleLabel, style, w, h, m = 0, p = 10, r = 0, visible = true }) => (
  <View>
    {visible ?
      <TouchableOpacity
        style={[
          {
            flex: full ? 1 : null,
            backgroundColor: colorBg,
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
          {title ?
            <Text
              style={[
                {
                  color: colorLabel,
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
      </TouchableOpacity> : null}
  </View>
) 