import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { Body, Button, Container, Header, Row } from '../../component/commons';

export default function ButtonsExampleScreen() {
    const navigation = useNavigation();

    return (
        <Container colorBg='#fff'>
            <Header title='Buttons' goback colorBg='#323232' navigation={navigation} />
            <Body>
                <Button title='Default' />
                <Button m={10} title='with Margin' />
                <Button m={10} p={20} title='with Padding' />
                <Button m={10} iconLeft='home' title='with Icon' />
                <Button m={10} r={10} iconLeft='home' title='with Radius' />
                <Button m={10} r={30} iconRight='arrow-right-bold' title='with Radius' />
                <Button m={10} r={30} iconLeft='arrow-left-bold' colorBg='tomato' title='with Color' />
                <Button m={10} r={30} iconLeft='alien-outline' colorBg='yellow' colorLabel='blue' title='with Color Label' />
                <Button m={10} r={30} iconLeft='bell' colorBg='green' title='with Event' onPress={() => alert('Alert')} />
                <Button w={200} h={200} m={10} r={5} title='with Width/Height' />
                <Row style={{ justifyContent: 'flex-end' }}>
                    <Button m={10} r={50} iconLeft='code-tags' onPress={() => alert(`ok`)} />
                </Row>
            </Body>
        </Container>
    )
}
