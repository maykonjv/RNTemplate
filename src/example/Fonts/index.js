import React, { useState } from 'react'
import { Body, Container, Header, H1, H2, H3, H4, H5, H6, FieldBox } from './../../component/commons/';
import { useNavigation } from '@react-navigation/native';

export default function FontsScreen() {
    const navigation = useNavigation();
    const [scrollTo, setScrollTo] = useState()
    const [listFieldBox, setListFieldBox] = useState()

    return (
        <Container color='#989898'>
            <Header title='Fonts' goback color='#323232' navigation={navigation} />
            <Body p={15} scrollTo={scrollTo} listFieldBox={listFieldBox}>
                <H1 color='blue'>{'Text Font H1'}</H1>
                <H2 color='red'>{'Text Font H2'}</H2>
                <FieldBox id='id1' addListFieldBox={[listFieldBox, setListFieldBox]}>
                    <H3 color='pink'>{'Text Font H3'}</H3>
                </FieldBox>
                <H4 color='yellow'>{'Text Font H4'}</H4>
                <H5 color='green'>{'Text Font H5'}</H5>
                <H6 color='green'>{'Text Font H6'}</H6>
                <H3 />
                <H3 bold>{'Text Font H3 Bold'}</H3>
                <H3 italic>{'Text Font H3 Italic'}</H3>
                <H3 bold italic>{'Text Font H3 Bold/Italic'}</H3>
                <H3 decoration>{'Text Font H3 Decorated'}</H3>
                <H3 lineThrough>{'Text Font H3 LineThrough'}</H3>
                <H3 />
                <FieldBox id='id2' addListFieldBox={[listFieldBox, setListFieldBox]}>
                    <H3 left color='white' onPress={() => alert('left')}>{'Clique Aqui (Left)'}</H3>
                </FieldBox>
                <H3 center color='white' onPress={() => setScrollTo('id1')}>{'Clique Aqui (Center)'}</H3>
                <H3 right color='white' onPress={() => setScrollTo('id2')}>{'Clique Aqui (Right)'}</H3>
                <H2 center color='red'>{'Mixed '}<H5 color='yellow' lineThrough>{'Text'}</H5><H3 bold>{' Example'}</H3></H2>
            </Body>
        </Container>
    )
}
