import React from 'react';
import { Text } from 'react-native';

export const H1 = ({ children, isFull, color = '#000', style, bold, italic, decoration, lineThrough, onPress, left, right, center }) => (
  <Text style={[
    { flex: isFull ? 1 : null },
    { fontSize: 26, color: color },
    { fontWeight: bold ? 'bold' : 'normal' },
    { fontStyle: italic ? 'italic' : 'normal' },
    { textAlign: left ? 'left' : right ? 'right' : center ? 'center' : 'auto' },
    { textDecorationLine: decoration ? 'underline' : (lineThrough ? 'line-through' : 'none') },
    style
  ]}
    onPress={onPress}
  >
    {children}
  </Text>
)
export const H2 = ({ children, isFull, color = '#000', style, bold, italic, decoration, lineThrough, onPress, left, right, center }) => (
  <Text style={[
    { flex: isFull ? 1 : null },
    { fontSize: 22, color: color },
    { fontWeight: bold ? 'bold' : 'normal' },
    { fontStyle: italic ? 'italic' : 'normal' },
    { textAlign: left ? 'left' : right ? 'right' : center ? 'center' : 'auto' },
    { textDecorationLine: decoration ? 'underline' : (lineThrough ? 'line-through' : 'none') },
    style
  ]}
    onPress={onPress}
  >
    {children}
  </Text>
)
export const H3 = ({ children, isFull, color = '#000', style, bold, italic, decoration, lineThrough, onPress, left, right, center }) => (
  <Text style={[
    { flex: isFull ? 1 : null },
    { fontSize: 18, color: color },
    { fontWeight: bold ? 'bold' : 'normal' },
    { fontStyle: italic ? 'italic' : 'normal' },
    { textAlign: left ? 'left' : right ? 'right' : center ? 'center' : 'auto' },
    { textDecorationLine: decoration ? 'underline' : (lineThrough ? 'line-through' : 'none') },
    style
  ]}
    onPress={onPress}
  >
    {children}
  </Text>
)
export const H4 = ({ children, isFull, color = '#000', style, bold, italic, decoration, lineThrough, onPress, left, right, center }) => (
  <Text style={[
    { flex: isFull ? 1 : null },
    { fontSize: 15, color: color },
    { fontWeight: bold ? 'bold' : 'normal' },
    { fontStyle: italic ? 'italic' : 'normal' },
    { textAlign: left ? 'left' : right ? 'right' : center ? 'center' : 'auto' },
    { textDecorationLine: decoration ? 'underline' : (lineThrough ? 'line-through' : 'none') },
    style
  ]}
    onPress={onPress}
  >
    {children}
  </Text>
)
export const H5 = ({ children, isFull, color = '#000', style, bold, italic, decoration, lineThrough, onPress, left, right, center }) => (
  <Text style={[
    { flex: isFull ? 1 : null },
    { fontSize: 12, color: color },
    { fontWeight: bold ? 'bold' : 'normal' },
    { fontStyle: italic ? 'italic' : 'normal' },
    { textAlign: left ? 'left' : right ? 'right' : center ? 'center' : 'auto' },
    { textDecorationLine: decoration ? 'underline' : (lineThrough ? 'line-through' : 'none') },
    style
  ]}
    onPress={onPress}
  >
    {children}
  </Text>
)

export const H6 = ({ children, isFull, color = '#000', style, bold, italic, decoration, lineThrough, onPress, left, right, center }) => (
  <Text style={[
    { flex: isFull ? 1 : null },
    { fontSize: 10, color: color },
    { fontWeight: bold ? 'bold' : 'normal' },
    { fontStyle: italic ? 'italic' : 'normal' },
    { textAlign: left ? 'left' : right ? 'right' : center ? 'center' : 'auto' },
    { textDecorationLine: decoration ? 'underline' : (lineThrough ? 'line-through' : 'none') },
    style
  ]}
    onPress={onPress}
  >
    {children}
  </Text>
)

