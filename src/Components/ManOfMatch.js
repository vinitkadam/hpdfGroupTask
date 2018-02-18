import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class ManOfMatch extends Component {
    render() {
        return (
            <LinearGradient colors={['#fff6ce', '#fffdf4']} style={{ flex: 1 }}>
            <ScrollView>
                <Text style={[styles.title]}>
                    Alexa will tell the name of the player of the match that was played between 2 teams on a particular date.
                </Text>
                <View style={styles.card}>
                    <Text style={styles.title}>Sample invocation :- </Text>
                    <List>
                        <ListItem>
                            <Text style={styles.text}>Alexa, ask ipl search, Who was the player of the match on "date_of_match"</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Alexa, ask ipl search, Who was awarded the man of the match that took place on "date_of_match"</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Alexa, ask ipl search, Who was the best player of the match that took place on "date_of_match"</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Alexa, ask ipl search, Who was the man of the match for the match that took place on "date_of_match"</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Alexa, ask ipl search, Which player showed best performance in the match that took place on "date_of_match"</Text>
                        </ListItem>
                    </List>

                </View>

            </ScrollView>
            </LinearGradient>
        );
    }
}

const styles = {
    title: {
        color: 'black',
        margin: 10,
        fontSize: 18,
    },
    text: {
        color: 'rgba(0,0,0,0.9)',
        fontSize: 16,

    },
    card: {
        borderRadius: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        elevation: 1,
        shadowRadius: 1
    },
};
