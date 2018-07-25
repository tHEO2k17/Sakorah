import React, { Component } from 'react';
import { Header, Right, Left, Title, Body, Text, Item, Input, Icon, Button } from 'native-base';

export default class AppHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (this.props.search == true) {
            return (
                <Header searchBar rounded>
                    <Item>
                        <Icon active name="search" />
                        <Input placeholder="Search" />
                        <Icon active name="camera" />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>
            );
        } else {
            return (
                <Header>
                    <Left>
                        <Button transparent onPress={()=> this.props.navigation.goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.title}</Title>
                    </Body>
                    <Right/>
                </Header>
            );

        }
    }
}