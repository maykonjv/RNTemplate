import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import * as RN from '../../component/commons';
import tokens from '../../themes/tokens';

export function HomeExampleScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    return (
        <RN.Container colorBg={tokens.colors.brand01[50]}>
            <RN.Header colorBg={tokens.colors.brand01[900]} title="Dashboad" />
            <RN.Body>
                <RN.Column colorBg={tokens.colors.brand01[700]} p={[20]} m={[10, 10, 20, 30]} r={20}>
                    <RN.Center colorBg={tokens.colors.brand01[800]} m={[0, 10]} p={10}>
                        <RN.H1 color={tokens.colors.white}>CENTER</RN.H1>
                        <RN.H4 color={tokens.colors.white}>{route ? route?.params?.teste : null}</RN.H4>
                    </RN.Center>
                    <RN.Row colorBg={tokens.colors.brand01[400]} p={5} r={[0, 20, 10, 0]} h={100}>
                        <RN.H3 color={tokens.colors.white} left isFull>
                            {'element 1 left'}
                        </RN.H3>
                        <RN.H3 color={tokens.colors.white} right isFull>
                            {'element 2 right'}
                        </RN.H3>
                    </RN.Row>
                    <RN.Grid>
                        <RN.Button m={5} r={20} w={'30%'} onPress={() => navigation.navigate('FontsExample')} title='Fonts' />
                        <RN.Button m={5} r={20} w={'30%'} onPress={() => navigation.navigate('ButtonsExample')} title='Buttons' />
                        <RN.Button m={5} r={20} w={'30%'} onPress={() => navigation.navigate('FormsExample')} title='Forms' />
                        <RN.Button m={5} r={20} w={'30%'} onPress={() => navigation.navigate('ImageExample')} title='Images' />
                    </RN.Grid>
                </RN.Column>
            </RN.Body>
        </RN.Container>
    );
}
