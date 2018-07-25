import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import getTheme from '../../assets/themes/components';
import sakorahTheme from '../../assets/themes/variables/sakorahTheme';

import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';

import {
    Container, Content, StyleProvider,
    H2, Row, Col, Text, Thumbnail,
    Tabs, Tab, TabHeading, Icon, Button, View
} from 'native-base';

export default class Me extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(sakorahTheme)}>
                <Container style={styles.container}>
                    <AppHeader search={true} />

                    <Content padder>
                        <Row>
                            <Col style={{ width: 90 }}>
                                <Thumbnail large source={require('../../assets/img/logo.png')} />
                            </Col>
                            <Col>
                                <H2>Theo Paintsil</H2>
                                <Text style={styles.textMuted}>3 Followers &#183; 311 Following</Text>
                                <Text style={styles.textMutedBold}>http://www.theopaintsil.netlify.com</Text>
                            </Col>
                            <Col style={{ width: 50 }}>
                                <Button block iconLeft warning transparent
                                    onPress={() => this.props.navigation.navigate('Settings')}>
                                    <Icon name="settings" />
                                </Button>
                            </Col>
                        </Row>
                        <Row style={{ paddingTop: 10 }}>
                            <Col>
                                <Button block iconLeft warning bordered>
                                    <Icon name='cloud-upload' />
                                    <Text>Upload</Text>
                                </Button>
                            </Col>
                        </Row>
                        <Row style={{ paddingTop: 5 }}>
                            <Col>
                                <Tabs>
                                    <Tab heading={<TabHeading><Text>Recent</Text></TabHeading>}>
                                        {/* <Tab1 /> */}
                                    </Tab>
                                    <Tab heading={<TabHeading><Text>Favourite</Text></TabHeading>}>
                                        {/* <Tab2 /> */}
                                    </Tab>
                                </Tabs>
                            </Col>
                        </Row>
                    </Content>

                    <AppFooter />

                </Container>
            </StyleProvider>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#23232B',
    },
    textMuted: {
        fontSize: 10,
        color: '#ccc',
        marginTop: 5,
    },
    textMutedBold: {
        fontSize: 10,
        color: '#ccc',
        fontWeight: 'bold',
        marginTop: 10,
    }
});