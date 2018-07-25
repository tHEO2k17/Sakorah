import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
    Header,
    Container,
    Content,
    Form, Input, Item,
    H2,
    Row, Col, Body, Title, Icon, Thumbnail,
    View, Label, Footer, Left, Right,
    Text, FooterTab, Button
} from 'native-base';

export default class Discover extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Content padder>
                    <View padder style={{ flex: 1, alignItems: "center" }}>
                        <Thumbnail large source={require('../../assets/img/logo.png')} />
                    </View>

                    <H2 style={styles.headerTextStyles}>Create Account</H2>

                    <Form>
                        <Item floatingLabel style={styles.formGroup}>
                            <Label>Username</Label>
                            <Input style={styles.input} />
                        </Item>
                        <Item floatingLabel style={styles.formGroup}>
                            <Label>Password</Label>
                            <Input secureTextEntry style={styles.input} />
                        </Item>
                        <Item floatingLabel style={styles.formGroup}>
                            <Label>Re-enter Password</Label>
                            <Input secureTextEntry style={styles.input} />
                        </Item>
                    </Form>
                    <Button rounded bordered warning block style={styles.bigRow}>
                        <Text>Register</Text>
                    </Button>
                </Content>
                <Footer>
                    <FooterTab style={styles.footer}>
                        <Button bordered warning>
                            <Text>Reset Password?</Text>
                        </Button>
                        <Button bordered warning
                            onPress={() => navigate('Login')}>
                            <Text>Sign In</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#23232B',
        paddingTop: 30,
    },
    headerTextStyles: {
        color: '#eee',
        textAlign: 'center',
    },
    formGroup: {
        marginTop: 10,
        marginBottom: 10,
        marginRight: 20,
        marginLeft: 20,
    },
    input: {
        color: '#eee',
    },
    bigRow: {
        marginTop: 20,
    },
    btnBlock: {
        marginTop: 20,
        paddingRight: 20,
        paddingLeft: 20
    },
    footer: {
        backgroundColor: '#000',
    }
})