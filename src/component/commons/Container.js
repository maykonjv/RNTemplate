import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableHighlight, ImageBackground, SafeAreaView, ScrollView, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { _padding, _margin, _radius } from '../../util/styles';

export const Container = ({ children, colorBg, horizontal, style, image, p, visible = true }) => (
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
          <Gradient
            colorBg={colorBg}
            horizontal={horizontal}
            style={[{ flex: 1 },
            _padding(p),
              style]}>
            {children}
          </Gradient>
        ) :
      null}
  </SafeAreaView>
)
export const Body = ({ children, full, image, colorBg, horizontal, style, w, h, m = 0, p = 0, r = 0, visible = true, scrollTo, listFieldBox }) => {
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
              <Gradient
                colorBg={colorBg}
                horizontal={horizontal}
                style={[
                  {
                    flex: full ? 1 : null,
                    backgroundColor: colorBg,
                  },
                  _padding(p),
                  _margin(m),
                  _radius(r),
                  { width: w ? w : null },
                  { height: h ? h : null },
                  style,
                ]}>
                {children}
              </Gradient>
            )}
        </View>
        : null}
    </ScrollView>
  )
}
export const FieldBox = ({ id, addListFieldBox = [], children, full, colorBg, horizontal, style, w, h, m = 0, p = 0, r = 0, visible = true }) => {
  const [listFieldBox, setListFieldBox] = addListFieldBox;

  function addField(y) {
    const _list = listFieldBox ? listFieldBox : {};
    _list[id] = y;
    setListFieldBox({ ..._list, })
  }

  return (
    <View onLayout={(e) => addListFieldBox ? addField(e.nativeEvent.layout.y) : null}>
      {visible ?
        <Gradient
          colorBg={colorBg}
          horizontal={horizontal}
          style={[
            {
              flexDirection: 'row',
              flex: full ? 1 : null,
              backgroundColor: colorBg
            },
            _padding(p),
            _margin(m),
            _radius(r),
            { width: w ? w : null },
            { height: h ? h : null },
            style,
          ]}>
          {children}
        </Gradient> : null}
    </View>)
}

export const Card = ({ children, full, colorBg, onPress, colorOnPress, style, w, h, m = 0, p = 0, r = 0, visible = true }) => (
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
                backgroundColor: colorBg,
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
            <Gradient
              colorBg={colorBg}
              horizontal={horizontal}
              style={[
                {
                  flex: full ? 1 : null,
                  backgroundColor: colorBg,
                },
                _padding(p),
                _margin(m),
                _radius(r),
                { width: w ? w : null },
                { height: h ? h : null },
                style,
              ]}>
              {children}
            </Gradient>
          )}
      </View>
      : null}
  </View>
)
export const Row = ({ children, full, colorBg, horizontal, style, w, h, m = 0, p = 0, r = 0, visible = true }) => (
  <View>
    {visible ?
      <Gradient
        colorBg={colorBg}
        horizontal={horizontal}
        style={[
          {
            flexDirection: 'row',
            flex: full ? 1 : null,
            backgroundColor: colorBg
          },
          _padding(p),
          _margin(m),
          _radius(r),
          { width: w ? w : null },
          { height: h ? h : null },
          style,
        ]}>
        {children}
      </Gradient> : null}
  </View>
)
export const Column = ({ children, full, colorBg, horizontal, style, w, h, m = 0, p = 0, r = 0, visible = true }) => (
  <View>
    {visible ?
      <Gradient
        colorBg={colorBg}
        horizontal={horizontal}
        style={
          [
            {
              flexDirection: 'column',
              flex: full ? 1 : null,
              backgroundColor: colorBg,
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
      </Gradient> : null}
  </View>
)
export const Center = ({ children, full, colorBg, horizontal, style, w, h, m = 0, p = 0, r = 0, visible = true }) => (
  <View>
    {visible ?
      <Gradient
        colorBg={colorBg}
        horizontal={horizontal}
        style={[
          {
            flex: full ? 1 : null,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: colorBg,
          },
          _padding(p),
          _margin(m),
          _radius(r),
          { width: w ? w : null },
          { height: h ? h : null },
          style,
        ]}>
        {children}
      </Gradient> : null}
  </View>
)

export const Gradient = ({ children, colorBg, style, horizontal }) => {
  if (Array.isArray(colorBg) && colorBg.length == 1) {
    colorBg = colorBg[0]
  }
  if (Array.isArray(colorBg))
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }} end={{ x: horizontal ? 1 : 0, y: !horizontal ? 1 : 0 }}
        colors={colorBg}
        style={style}>
        {children}
      </LinearGradient>
    );

  return (
    <View style={[{ backgroundColor: colorBg, }, style]}>
      {children}
    </View>
  )
}