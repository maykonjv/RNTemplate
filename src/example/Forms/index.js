import React, { useState } from 'react'
import { Body, Container, Header, H3, FieldBox } from './../../component/commons/';
import { useNavigation } from '@react-navigation/native';
import { Button } from './../../component/commons/Button';

export default function FormsExampleScreen() {
    const navigation = useNavigation();
    const [scrollTo, setScrollTo] = useState()
    const [listFieldBox, setListFieldBox] = useState()

    return (
        <Container color='#fff'>
            <Header title='Form' goback color='#323232' navigation={navigation} />
            <Body p={15} scrollTo={scrollTo} listFieldBox={listFieldBox}>
                <H3 color='blue'>{'Form'}</H3>
                <H3 />
                <FieldBox id='id1' addListFieldBox={[listFieldBox, setListFieldBox]}>
                    <H3>{'Text id1'}</H3>
                </FieldBox>
                <H3 />
                <Button onPress={() => setScrollTo('id3')} title={'ScrollTo id3'} />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <FieldBox id='id2' addListFieldBox={[listFieldBox, setListFieldBox]}>
                    <H3>{'Text id2'}</H3>
                </FieldBox>
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <FieldBox id='id3' addListFieldBox={[listFieldBox, setListFieldBox]}>
                    <H3>{'Text id3'}</H3>
                </FieldBox>
                <H3 />
                <H3 />
                <Button m={10} onPress={() => setScrollTo('id1')} title={'ScrollTo id1'} />
                <Button m={10} onPress={() => setScrollTo('id2')} title={'ScrollTo id2'} />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
                <H3 />
            </Body>
        </Container>
    )
}
