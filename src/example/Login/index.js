import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Body, Button, Container, FieldBox, H2 } from '../../component/commons'
import { InputBox } from '../../component/commons/Forms'
import { tokens } from '../../themes/tokens'

export default function LoginScreen() {
    const [form, setForm] = React.useState({});
    return (
        <Container colorBg={[tokens.colors.brand01[300], tokens.colors.brand01[500]]}>
            <StatusBar backgroundColor={tokens.colors.brand01[300]} />
            <Body>
                <H2 center color={tokens.colors.white} p={30}>Sign In</H2>
                <FieldBox m={[30, 20]}>
                    <InputBox
                        id='email'
                        formState={[form, setForm]}
                        colorBg={tokens.colors.brand01[300]}
                        isFull r={5}
                        label='Email'
                        colorLabel={tokens.colors.white}
                        colorValue={tokens.colors.white}
                        iconLeft='email'
                        colorIcon={tokens.colors.white}
                        placeholder='Enter your Email'
                        colorPlaceholder={tokens.colors.brand01[200]}
                        h={40}
                        value='teste'
                    />
                </FieldBox>
                <FieldBox m={[30, 20]}>
                    <InputBox
                        id='password'
                        formState={[form, setForm]}
                        colorBg={tokens.colors.brand01[300]}
                        isFull r={5}
                        label='Password'
                        colorLabel={tokens.colors.white}
                        colorValue={tokens.colors.white}
                        iconLeft='key'
                        colorIcon={tokens.colors.white}
                        placeholder='*******'
                        onChangeText={(text)=> alert('text:' + text)}
                        colorPlaceholder={tokens.colors.brand01[200]}
                        h={40}
                    />
                </FieldBox>
                <Button title='LOGIN' r={30} m={30} colorBg={tokens.colors.white} colorLabel={tokens.colors.brand01[500]} onPress={() => console.log(form)} />
            </Body>
        </Container>
    )
}
