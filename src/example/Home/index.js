import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Column, Container, H1, H3, Header, Row, Center } from '../../component/commons';
import Box from '../../component/Box';
import { Button } from '../../component/commons/Button';

export function HomeExampleScreen() {
    const navigation = useNavigation();
    const [border, setBorder] = useState("border-width: 1px;");

    useEffect(() => {
        setTimeout(() => {
            setBorder('border-width: 4px;')
        }, 5000);

    }, []);

    return (
        <Container colorBg='yellow'>
            <Header colorBg="#242424" navigation={navigation} goback title="Dashboad" />
            <Column colorBg='red' p={[20]} m={[10, 10, 20, 30]} r={20}>
                <Box style={border}>
                    <H1 color='white'>Step One</H1>
                </Box>
                <Row colorBg='pink' p={5}>
                    <H3 color='#000' left full>
                        {'Edit  App.js  to change this screen and then come back to see your edits.'}
                    </H3>
                    <H3 color='#000' right full>
                        {'Edit  App.js'}
                    </H3>
                </Row>
                <Column>
                    <Button m={10} p={[30, 10]} r={20} onPress={() => navigation.navigate('FontsExample')} title='Fonts' />
                    <Button m={10} p={[30, 10]} r={20} onPress={() => navigation.navigate('ButtonsExample')} title='Buttons' />
                    <Button m={10} p={[30, 10]} r={20} onPress={() => navigation.navigate('FormsExample')} title='Forms' />
                </Column>
            </Column>
        </Container>
    );
}
