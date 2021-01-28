import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableHighlight, ImageBackground, SafeAreaView, ScrollView, Text } from 'react-native';
import { _padding, _margin, _radius } from '../../util/styles';

export const Container = ({ children, color, style, image, p, visible = true }) => (
  <SafeAreaView style={{ flex: 1 }}>
    {visible ?
      image ? (
        <ImageBackground
          style={[
            {
              flex: 1,
              resizeMode: 'contain',
              justifyContent: 'center',
            },
            _padding(p),
            style]}
          source={{ uri: image }}>
          {children}
        </ImageBackground>
      ) : (
          <View
            style={[{ flex: 1, backgroundColor: color },
            _padding(p),
              style]}>
            {children}
          </View>
        ) :
      null}
  </SafeAreaView>
)
export const Body = ({ children, full, image, color, style, w, h, m = 0, p = 0, r = 0, visible = true, scrollTo, listFieldBox }) => {
  const ref = useRef()

  useEffect(() => {
    if (listFieldBox)
      ref.current.scrollTo({ x: 0, y: listFieldBox[scrollTo], animated: true })
  }, [scrollTo])

  return (
    <ScrollView ref={ref}>
      {visible ?
        <View>
          {image ? (
            <ImageBackground
              style={[
                {
                  flex: full ? 1 : null,
                  resizeMode: 'cover',
                  justifyContent: 'center',
                },
                _padding(p),
                _margin(m),
                _radius(r),
                { width: w ? w : null },
                { height: h ? h : null },
                style,
              ]}
              source={{ uri: image }}>
              {children}
            </ImageBackground>
          ) : (
              <View
                style={[
                  {
                    flex: full ? 1 : null,
                    backgroundColor: color,
                  },
                  _padding(p),
                  _margin(m),
                  _radius(r),
                  { width: w ? w : null },
                  { height: h ? h : null },
                  style,
                ]}>
                {children}
              </View>
            )}
        </View>
        : null}
    </ScrollView>
  )
}
export const FieldBox = ({ id, addListFieldBox, children, full, color, style, w, h, m = 0, p = 0, r = 0, visible = true }) => {
  const [listFieldBox, setListFieldBox] = addListFieldBox;

  function addField(y) {
    const _list = listFieldBox ? listFieldBox : {};
    _list[id] = y;
    setListFieldBox({ ..._list, })
  }

  return (
    <View onLayout={(e) => addListFieldBox ? addField(e.nativeEvent.layout.y) : null}>
      {visible ?
        <View
          style={[
            {
              flexDirection: 'row',
              flex: full ? 1 : null,
              backgroundColor: color
            },
            _padding(p),
            _margin(m),
            _radius(r),
            { width: w ? w : null },
            { height: h ? h : null },
            style,
          ]}>
          {children}
        </View> : null}
    </View>)
}

export const Card = ({ children, full, color, onPress, colorOnPress, style, w, h, m = 0, p = 0, r = 0, visible = true }) => (
  <View>
    {visible ?
      <View>
        {onPress ? (
          <TouchableHighlight
            underlayColor={
              colorOnPress
                ? colorOnPress
                : 'rgba(255,255,255,.1)'
            }
            style={[
              {
                flex: full ? 1 : null,
                backgroundColor: color,
              },
              _padding(p),
              _margin(m),
              _radius(r),
              { width: w ? w : null },
              { height: h ? h : null },
              style,
            ]}
            onPress={onPress}>
            {children}
          </TouchableHighlight>
        ) : (
            <View
              style={[
                {
                  flex: full ? 1 : null,
                  backgroundColor: color,
                },
                _padding(p),
                _margin(m),
                _radius(r),
                { width: w ? w : null },
                { height: h ? h : null },
                style,
              ]}>
              {children}
            </View>
          )}
      </View>
      : null}
  </View>
)
export const Row = ({ children, full, color, style, w, h, m = 0, p = 0, r = 0, visible = true }) => (
  <View>
    {visible ?
      <View
        style={[
          {
            flexDirection: 'row',
            flex: full ? 1 : null,
            backgroundColor: color
          },
          _padding(p),
          _margin(m),
          _radius(r),
          { width: w ? w : null },
          { height: h ? h : null },
          style,
        ]}>
        {children}
      </View> : null}
  </View>
)
export const Column = ({ children, full, color, style, w, h, m = 0, p = 0, r = 0, visible = true }) => (
  <View>
    {visible ?
      <View
        style={
          [
            {
              flexDirection: 'column',
              flex: full ? 1 : null,
              backgroundColor: color,
            },
            _padding(p),
            _margin(m),
            _radius(r),
            { width: w ? w : null },
            { height: h ? h : null },
            style,
          ]
        }>
        {children}
      </View> : null}
  </View>
)
export const Center = ({ children, full, color, style, w, h, m = 0, p = 0, r = 0, visible = true }) => (
  <View>
    {visible ?
      <View
        style={[
          {
            flex: full ? 1 : null,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: color,
          },
          _padding(p),
          _margin(m),
          _radius(r),
          { width: w ? w : null },
          { height: h ? h : null },
          style,
        ]}>
        {children}
      </View> : null}
  </View>
)
