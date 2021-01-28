import React from 'react';
import { View, TouchableOpacity, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = ({ children, color, style, statusbar, goback, title, styleTitle, navigation }) => (
  <View
    style={[
      {
        backgroundColor: color ? color : '#fff',
        flexDirection: 'row',
      },
      style,
    ]}>
    <StatusBar
      backgroundColor={
        statusbar ? statusbar : color
      }
    />
    <View style={{ width: 30, margin: 10 }}>
      {goback ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={30} color="#fff" />
        </TouchableOpacity>
      ) : (
          <View />
        )}
    </View>
    <View
      style={{
        flex: 1,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={[{ color: '#fff', fontSize: 18 }, styleTitle]}>
        {title}
      </Text>
    </View>
    <View style={{ width: 30, margin: 10 }}>{children}</View>
  </View>
)
