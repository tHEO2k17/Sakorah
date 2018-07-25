import React, { Component } from 'react';
import { styles } from '../../assets/styles/style';
import {
    Header,
    Container,Row, Col, Body, Content, View,
    Form, Input, Item, Label, Button,
    H1, H2, H3, Text,
    Title, Icon, Thumbnail,
    Left, Right,
    Footer, FooterTab, StyleProvider
} from 'native-base';


export default class Login extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Content contentContainerStyle={styles.contentStyle}>
                    <View style={styles.logoContainer}>
                        <Thumbnail style={styles.logo} source={require('../../assets/img/logo.png')} />

                        <H1 style={styles.title}>Sign In</H1>
                    </View>

                    <Form style={styles.formStyle}>
                        <Item regular style={styles.input} >
                            <Input placeholder="Email" />
                        </Item>

                        <Item regular last style={styles.input} >
                            <Input placeholder="Password" secureTextEntry={true} />
                        </Item>

                        <Button full warning onPress={() => navigate('Me')}>
                            <Text> SIGN IN </Text>
                        </Button>
                    </Form>

                    <View style={styles.infoText}>
                        <Text style={styles.link}>Reset Password. </Text>

                        <Text style={styles.extraText}>
                            Haven't got an account? <Text onPress={() => navigate('Register')} style={styles.link}> Sign Up.</Text>
                        </Text>
                    </View>
                </Content>
            </Container>
        );
    }
}