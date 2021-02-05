import React from 'react'

import { useNavigation } from '@react-navigation/native';
import { Body, Button, Container, H2, Header, Icon, Row } from '../../component/commons';
import tokens from '../../themes/tokens';

export default function ButtonsExampleScreen() {
    const navigation = useNavigation();
    const [colors, setColors] = React.useState(tokens.colors);
    const [brand, setBrand] = React.useState(tokens.colors.brand01);

    return (
        <Container colorBg={brand[50]}>
            <Header title='Buttons' goback colorBg={brand[900]} navigation={navigation} />
            <Body>
                <Row p={10} colorBg={colors.white}>
                    <Icon name={'bell'} color='#390' size={20} onPress={() => alert('bell')} />
                    <Icon color='#04B4AE' name={'home'} size={20} />
                    <Icon color='#B18904' name={'star'} size={20} />
                    <Icon color='#FA8258' name={'arrow-left'} size={20} />
                    <Icon color='#FE2EC8' name={'account'} size={20} />
                    <Icon color='#8A0868' name={'account-circle'} size={20} />
                    <Icon color='#3A2F0B' name={'alert-decagram'} size={20} />
                    <Icon color='#F79F81' name={'align-vertical-bottom'} size={20} />
                    <Icon color='#80FF00' name={'at'} size={20} />
                    <Icon color='#DF0174' name={'basket-outline'} size={20} />
                    <Icon color='#585858' name={'calendar'} size={20} />
                    <Icon color='#190707' name={'cannabis'} size={20} />
                    <Icon color='#58FAD0' name={'code-json'} size={20} />
                    <Icon color='#F6CEE3' name={'cog-outline'} size={20} />
                    <Icon color='#9AFE2E' name={'delete'} size={20} />
                    <Icon color='#0B2F3A' name={'delete-forever'} size={20} />
                    <Icon color='#0B2F3A' name={'email'} size={20} />
                </Row>
                <Button colorBg={brand[400]} isLoading title='Default' />
                <Row>
                    <Button m={[10, 10, 5, 10]} r={30} iconLeft='bell' colorBg={colors.brand01[400]} title='Brand01' onPress={() => setBrand(colors.brand01)} />
                    <Button m={[5, 10, 5, 10]} r={30} iconLeft='bell' colorBg={colors.brand02[400]} title='Brand02' onPress={() => setBrand(colors.brand02)} />
                    <Button m={[5, 10, 10, 10]} r={30} iconLeft='bell' colorBg={colors.brand03[100]} title='Brand03' onPress={() => setBrand(colors.brand03)} />
                </Row>
                <Button m={10} isDisabled title='Disabled' />
                <Button m={20} colorBg={brand[100]} title='with Margin' onPress={()=> navigation.navigate('Home Example', {teste: '123'})}/>
                <Button m={10} p={20} colorBg={brand[200]} title='with Padding' />
                <Button m={10} iconLeft='home' colorBg={brand[300]} title='with Icon' />
                <Button m={10} r={10} iconLeft='home' colorBg={brand[400]} title='with Radius' />
                <Button m={10} r={30} iconRight='arrow-right-bold' colorBg={brand[500]} title='with icon right' />
                <Button m={10} r={30} iconLeft='arrow-left-bold' colorBg={brand[600]} title='with icon left' />
                <Button m={10} r={30} iconLeft='alien-outline' colorBg={brand[700]} colorLabel={colors.success[400]} title='with Color Label' />
                <Button m={10} r={30} iconLeft='bell' colorBg={brand[800]} title='with Event' onPress={() => alert('event')} />
                <Button w={200} h={200} m={10} r={5} colorBg={brand[900]} title='with Width/Height' />
                <Row style={{ justifyContent: 'flex-end' }}>
                    <Button m={10} r={50} iconLeft='code-tags' onPress={() => alert(`ok`)} />
                </Row>
            </Body>
        </Container>
    )
}
