import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { _margin, _padding, _radius } from './../../util/styles';

export const Button = ({ full, color = '#0C71A3', onPress, icon, colorlabel = '#fff', fontsize = 16, title, stylelabel, style, w, h, m = 0, p = 10, r = 0, visible = true }) => (
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
          {icon ? (
            <Icon
              name={icon}
              style={{ marginRight: 5 }}
              size={fontsize * 1.3}
              color="#fff"
            />
          ) : (
              <View />
            )}
          <Text
            style={[
              {
                color: colorlabel,
                fontSize: fontsize,
              },
              stylelabel,
            ]}>
            {title}
          </Text>
        </View>
      </TouchableOpacity> : null}
  </View>
) 