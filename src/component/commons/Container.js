import React, { useEffect, useRef, useState } from 'react';
import { View, TouchableHighlight, ImageBackground, SafeAreaView, ScrollView, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { _padding, _margin, _radius } from '../../util/styles';

export const Container = ({ children, colorBg, isHorizontal, style, image, p, isVisible = true }) => (
  <SafeAreaView style={{ flex: 1 }}>
    {isVisible ?
      image ? (
        <ImageBackground
          resizeMode='cover'
          style={[
            { flex: 1 },
            _padding(p),
            style]}
          source={{ uri: image }}>
          {children}
        </ImageBackground>
      ) : (
          <Gradient
            colorBg={colorBg}
            isHorizontal={isHorizontal}
            style={[{ flex: 1 },
            _padding(p),
              style]}>
            {children}
          </Gradient>
        ) :
      null}
  </SafeAreaView>
)
export const Body = ({ children, isFull, isScrollOff, image, colorBg, isHorizontal, style, w, h, m = 0, p = 0, r = 0, isVisible = true, scrollTo, listFieldBox }) => {
  const ref = useRef()

  useEffect(() => {
    if (listFieldBox)
      ref.current.scrollTo({ x: 0, y: listFieldBox[scrollTo], animated: true })
  }, [scrollTo])

  const _body = isVisible ?
    image ? (
      <ImageBackground
        style={[
          {
            flex: isFull ? 1 : null,
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
          isHorizontal={isHorizontal}
          style={[
            {
              flex: isFull ? 1 : null,
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
      )
    : null;
  if (isScrollOff)
    return (
      <View style={{ flex: isFull ? 1 : null, }}>
        { _body}
      </View >
    )
  else
    return (
      <ScrollView ref={ref}>
        {_body}
      </ScrollView>
    )
}
export const FieldBox = ({ id, addListFieldBox = [], children, isFull, colorBg, isHorizontal, style, w, h, m = 0, p = 0, r = 0, isVisible = true }) => {
  const [listFieldBox, setListFieldBox] = addListFieldBox;

  function addField(y) {
    const _list = listFieldBox ? listFieldBox : {};
    _list[id] = y;
    setListFieldBox({ ..._list, })
  }

  return (
    <View onLayout={(e) => addListFieldBox ? addField(e.nativeEvent.layout.y) : null}>
      {isVisible ?
        <Gradient
          colorBg={colorBg}
          isHorizontal={isHorizontal}
          style={[
            {
              flexDirection: 'row',
              flex: isFull ? 1 : null,
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

export const Card = ({ children, isFull, colorBg, onPress, colorOnPress, style, w, h, m = 0, p = 0, r = 0, isVisible = true }) => (
  <View style={{ flex: isFull ? 1 : null, }}>
    {isVisible ?
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
                flex: isFull ? 1 : null,
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
              isHorizontal={isHorizontal}
              style={[
                {
                  flex: isFull ? 1 : null,
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
export const Row = ({ children, isFull, colorBg, isHorizontal, style, w, h, m = 0, p = 0, r = 0, isVisible = true }) => {
  if (!isVisible) return;
  return (
    <Gradient
      colorBg={colorBg}
      isHorizontal={isHorizontal}
      style={[
        {
          flexDirection: 'row',
          flex: isFull ? 1 : null,
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
  )
}
export const Column = ({ children, isFull, colorBg, isHorizontal, style, w, h, m = 0, p = 0, r = 0, isVisible = true }) => (
  <View style={{ flex: isFull ? 1 : null, }}>
    {isVisible ?
      <Gradient
        colorBg={colorBg}
        isHorizontal={isHorizontal}
        style={
          [
            {
              flexDirection: 'column',
              flex: isFull ? 1 : null,
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
export const Center = ({ children, isFull, colorBg, isHorizontal, style, w, h, m = 0, p = 0, r = 0, isVisible = true }) => (
  <View style={{ flex: isFull ? 1 : null }}>
    {isVisible ?
      <Gradient
        colorBg={colorBg}
        isHorizontal={isHorizontal}
        style={[
          {
            flex: isFull ? 1 : null,
            justifyContent: 'center',
            alignItems: 'center',
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
export const Grid = ({ children, colorBg, isHorizontal, style, w, h, m = 0, p = 0, r = 0, isVisible = true }) => {
  if (!isVisible) return;
  return (
    <Gradient
      colorBg={colorBg}
      isHorizontal={isHorizontal}
      style={
        [
          {
            flex: 1, flexDirection: 'row', flexWrap: 'wrap'
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
    </Gradient>
  )
}
export const Gradient = ({ children, colorBg, style, isHorizontal }) => {
  if (Array.isArray(colorBg) && colorBg.length == 1) {
    colorBg = colorBg[0]
  }
  if (Array.isArray(colorBg))
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }} end={{ x: isHorizontal ? 1 : 0, y: !isHorizontal ? 1 : 0 }}
        colors={colorBg}
        style={style}>
        {children}
      </LinearGradient>
    );

  return (
    <View style={[{ backgroundColor: colorBg }, style]}>
      {children}
    </View>
  )
}