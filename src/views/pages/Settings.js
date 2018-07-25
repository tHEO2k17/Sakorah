import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import getTheme from '../../assets/themes/components';
import sakorahTheme from '../../assets/themes/variables/sakorahTheme';

import AppHeader from '../shared/AppHeader';
import AppFooter from '../shared/AppFooter';

import {
    Container, Content, StyleProvider,
    List, ListItem, Left, Text, Body,
    Right, Tab, TabHeading, Icon, Button, Switch
} from 'native-base';

export default class Me extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(sakorahTheme)}>
                <Container style={styles.container}>
                
                    <AppHeader search={false} title="Settings" />

                    <Content>
                        <List>
                            <ListItem icon>
                                <Left>
                                    <Icon name="create" style={{color: '#ffb400'}} />
                                </Left>
                                <Body>
                                    <Text>Edit Profile</Text>
                                </Body>
                            </ListItem>
                            <ListItem icon>
                                <Left>
                                    <Icon name="lock" style={{color: '#ffb400'}} />
                                </Left>
                                <Body>
                                    <Text>Change Password</Text>
                                </Body>
                            </ListItem>
                            <ListItem icon onPress={() => this.props.navigation.navigate('Login')}>
                                <Left>
                                    <Icon name="log-out" style={{color: '#ffb400'}} />
                                </Left>
                                <Body>
                                    <Text>Logout</Text>
                                </Body>
                            </ListItem>
                        </List>

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