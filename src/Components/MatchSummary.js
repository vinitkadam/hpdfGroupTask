import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { List, ListItem } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default class MatchSummary extends Component {
    render() {
        return (
            <LinearGradient colors={['#fff6ce', '#fffdf4']} style={{ flex: 1 }}>
            <ScrollView>
                <Text style={[styles.title]}>
                    Alexa will summarize the match that was played on a paticular date.
                </Text>
                <View style={styles.card}>
                    <Text style={styles.title}>Sample invocation :- </Text>
                    <List>
                        <ListItem>
                            <Text style={styles.text}>Alexa, ask ipl search, Please give summary of the match that took place on "date_of_match"</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Alexa, ask ipl search,Give highlights of the match that took place on "date_of_match"</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Alexa, ask ipl search, Summarize the match played on "date_of_match"</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Alexa, ask ipl search, Give details of that match that was played on "date_of_match"</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={styles.text}>Alexa, ask ipl search, Tell me more about the match played on "date_of_match"</Text>
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
