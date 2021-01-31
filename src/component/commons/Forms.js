import React, { useState } from 'react'
import { TextInput, View, Text } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { _margin, _padding, _radius } from '../../util/styles'
import { Gradient } from './Container'
import { applyMask } from './../../util/formatter';

export const InputBox = ({ id, label, description, mask, maxLength, colorBg, fontSize = 16, onChangeText, formState = [], placeholder, iconLeft, iconRight, value, isEditable, colorLabel = '#000', colorDescription = '#000', focus, isHorizontal, numeric, email, tel, required, isFull, style, w, h, m = 0, p = 0, r = 0, isVisible = true }) => {
    const [form, setForm] = formState;
    const [value_, setValue_] = useState(value)

    function addField(_value) {
        const _list = form ? form : {};
        _list[id] = applyMask(mask, _value);
        setValue_(applyMask(mask, _value));
        setForm({ ..._list, })
    }
    if (!isVisible) return;

    return (
        <View style={[
            { flex: isFull ? 1 : null },
            _padding(p),
            _margin(m),
            { width: w ? w : null },
            { height: h ? h : null },
            style,
        ]}>
            <Text style={{ marginLeft: 10, marginBottom: 5, color: colorLabel }}>{label}<Text style={{ color: 'red', fontWeight: 'bold' }}>{required ? ' *' : ''}</Text></Text>
            {description ? <Text style={{ marginLeft: 10, marginBottom: 5, color: colorDescription }}>{description}</Text> : null}
            <Gradient
                colorBg={colorBg}
                isHorizontal={isHorizontal}
                style={[{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15 }, _radius(r)]}>
                {iconLeft ?
                    <Icon
                        name={iconLeft}
                        size={fontSize * 1.3}
                        color={colorLabel}
                    /> : <View />}
                <TextInput
                    autoFocus={focus}
                    defaultValue={value_}
                    editable={isEditable}
                    placeholder={placeholder}
                    maxLength={maxLength || mask?.length}
                    onChangeText={(txt) => { onChangeText ? onChangeText(txt) : null; formState && id ? addField(txt) : null }}
                    style={{ flex: 1, fontSize: fontSize }}
                    keyboardType={numeric ? 'numeric' : email ? 'email-address' : tel ? 'phone-pad' : 'default'} />
                {iconRight ?
                    <Icon
                        name={iconRight}
                        size={fontSize * 1.3}
                        color={'#000'} /> : <View />}
            </Gradient>
        </View>
    )
}