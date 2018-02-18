import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class MatchResult extends Component {
    render() {
        return (
            <LinearGradient colors={['#fff6ce', '#fffdf4']} style={{ flex: 1 }}>
            <ScrollView>
                <Text style={[styles.title]}>
                    Alexa will say who was the winner of the match played between 2 teams on a particular date.
                </Text>
                <View style={styles.card}>
                    <Text style={styles.title}>Sample invocation :- </Text>
                    <List>
                        <ListItem>
                            <Text style={styles.text}>Alexa, ask ipl search, Did "teamA" win the match against "teamB" on "date_of_match"</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Alexa, ask ipl search, Tell me the result of the match between "teamA" and "teamB" on "date_of_match"</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Alexa, ask ipl search, Tell me about the winner of the match between "teamA" and "teamB" the date of the match is "date_of_match"</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Alexa, ask ipl search, Give me the match result between "teamA" and "teamB" that took place on "date_of_match"</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Alexa, ask ipl search, Who won the match between "teamA" and "teamB" on "date_of_match"</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Alexa, ask ipl search, Who was the winner in the match of "teamA" versus "teamB" that took place on "date_of_match"</Text>
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
