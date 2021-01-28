import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { _margin, _padding, _radius } from './../../util/styles';

export const Button = ({ full, color = '#0C71A3', onPress, iconLeft, iconRight, colorlabel = '#fff', fontsize = 16, title, stylelabel, style, w, h, m = 0, p = 10, r = 0, visible = true }) => (
  <View>
    {visible ?
      <TouchableOpacity
        style={[
          {
            flex: full ? 1 : null,
            backgroundColor: color,
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
              size={fontsize * 1.3}
              color={colorlabel}
            />
          ) : (
              <View />
            )}
          {title ?
            <Text
              style={[
                {
                  color: colorlabel,
                  fontSize: fontsize,
                  marginHorizontal: 5
                },
                stylelabel,
              ]}>
              {title}
            </Text>
            : <View />}
          {iconRight ? (
            <Icon
              name={iconRight}
              size={fontsize * 1.3}
              color={colorlabel}
            />
          ) : (
              <View />
            )}
        </View>
      </TouchableOpacity> : null}
  </View>
) 