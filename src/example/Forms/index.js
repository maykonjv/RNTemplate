import React, { useState } from 'react'
import { Body, Container, Header, H3, FieldBox } from './../../component/commons/';
import { useNavigation } from '@react-navigation/native';
import { Button } from './../../component/commons/Button';
import { InputBox } from './../../component/commons/Forms';
import { Column, Gradient, Row } from '../../component/commons/Container';
import { Center } from './../../component/commons/Container';

export default function FormsExampleScreen() {
    const navigation = useNavigation();
    const [scrollTo, setScrollTo] = useState()
    const [listFieldBox, setListFieldBox] = useState()
    const [form, setForm] = useState()

    return (
        <Container colorBg={['#fff']}>
            <Header title='Form' goback colorBg='#323232' navigation={navigation} />
            <Body p={1} scrollTo={scrollTo} listFieldBox={listFieldBox}>
                <FieldBox p={10} id='id5' addListFieldBox={[listFieldBox, setListFieldBox]}>
                    <InputBox id='nome' formState={[form, setForm]} full r={30} colorBg={['#909090', '#b4b4b4', '#b4b4b4', '#909090']} label='Nome' iconLeft='face-outline' />
                </FieldBox>
                <FieldBox p={10} r={5} colorBg='#484' id='id1' addListFieldBox={[listFieldBox, setListFieldBox]}>
                    <InputBox id='endereco' formState={[form, setForm]} full required m={[0, 0, 5, 0]} colorBg={'#fff'} colorLabel='#fff' label='Endereço' />
                    <InputBox id='num' w={70} formState={[form, setForm]} numeric required m={[5, 0, 0, 0]} colorBg='#fff' colorLabel='#fff' label='Nº' />
                </FieldBox>
                <FieldBox p={10} colorBg='#af4' id='id2' addListFieldBox={[listFieldBox, setListFieldBox]}>
                    <InputBox id='email' formState={[form, setForm]} email required full r={30} colorBg={'#fff'} colorLabel='#000' label='Email' iconLeft='email' />
                </FieldBox>
                <FieldBox p={10} r={5} colorBg='#4353ff' id='id4' addListFieldBox={[listFieldBox, setListFieldBox]}>
                    <InputBox id='tel' mask={'(__)_____-____'} formState={[form, setForm]} tel full r={10} colorBg={'#fff'} colorLabel='#fff' colorDescription='#fff' placeholder={'(##) #####-####'} label='Tel' iconRight='phone-plus' description={'(descricao sobre o campo)'} />
                </FieldBox>
                <Column p={[20, 0]}>
                    <H3>Nome: {form?.nome}</H3>
                    <Row>
                        <H3 full>Endereço: {form?.endereco}</H3>
                        <H3>Num: {form?.num}</H3>
                    </Row>
                    <H3>Email: {form?.email}</H3>
                    <H3>Tel: {form?.tel}</H3>
                </Column>
                <Button m={10} onPress={() => setScrollTo('id3')} title={'ScrollTo id3'} />
                <Button m={10} onPress={() => setScrollTo('id1')} title={'ScrollTo id1'} />
                <Button m={10} onPress={() => setScrollTo('id2')} title={'ScrollTo id2'} />
            </Body>
        </Container>
    )
}
