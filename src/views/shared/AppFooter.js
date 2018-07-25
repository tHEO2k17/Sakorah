import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';

export default class AppHeader extends Component {
    render() {
        return (
            <Footer>
                <FooterTab>
                    <Button>
                        <Icon name="apps" />
                        <Text>Categories</Text>
                    </Button>
                    <Button>
                        <Icon name="compass" />
                        <Text>Explore</Text>
                    </Button>
                    <Button badge vertical>
                        <Badge><Text>2</Text></Badge>
                        <Icon name="chatbubbles" />
                        <Text>Notifications</Text>
                    </Button>
                    <Button active>
                        <Icon active name="person" />
                        <Text>Me</Text>
                    </Button>
                </FooterTab>
            </Footer>
        );
    }
}