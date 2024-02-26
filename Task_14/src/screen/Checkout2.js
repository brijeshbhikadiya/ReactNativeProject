import React, { Component } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';

export default class Checkout extends Component {
    constructor() {
        super();
        this.state = {
            screen1: true,
            screen2: false,
            screen3: false
        };
        this.scrollView = React.createRef();
    }

    handleScreen = () => {
        if (this.state.screen1) {
            this.scrollView.current.scrollTo({ x: 1 * screenWidth, animated: true });
            this.setState({
                screen1: false,
                screen2: true,
                screen3: false
            });
        } else if (this.state.screen2) {
            this.scrollView.current.scrollTo({ x: 2 * screenWidth, animated: true });
            this.setState({
                screen1: false,
                screen2: false,
                screen3: true
            });
        } else if (this.state.screen3) {
            // No need to scroll further as there are only 3 steps
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <ScrollView
                    horizontal
                    pagingEnabled
                    ref={this.scrollView}
                    showsHorizontalScrollIndicator={false}>
                    <View style={[styles.stepView, { backgroundColor: this.state.screen1 ? 'lightblue' : 'lightgray' }]}>
                        <Text style={styles.stepText}>Step 1</Text>
                    </View>
                    <View style={[styles.stepView, { backgroundColor: this.state.screen2 ? 'lightblue' : 'lightgray' }]}>
                        <Text style={styles.stepText}>Step 2</Text>
                    </View>
                    <View style={[styles.stepView, { backgroundColor: this.state.screen3 ? 'lightblue' : 'lightgray' }]}>
                        <Text style={styles.stepText}>Step 3</Text>
                    </View>
                </ScrollView>

                <View style={styles.buttonContainer}>
                    <Text style={styles.button} onPress={this.handleScreen}>Next Step</Text>
                </View>
            </View>
        );
    }
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    stepView: {
        width: screenWidth,
        justifyContent: 'center',
        alignItems: 'center',
    },
    stepText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
    },
    buttonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    button: {
        fontSize: 20,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});