import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';

import VGSTextView from './android/fields/show/text/NativeView';

import VGSShow from './android/module/show/VGSShow';


export default class VGSFormView extends Component<Props> {
    constructor(props) {
        super(props);
    }

    revealData = () => {
        var data = {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzkzNTc1OTljYmE5Mjk0ZDk2Zjk4NjciLCJ0eXBlIjoiQ0FSRFRPS0VOIiwiaWF0IjoxNjc3MDY5MTYwLCJleHAiOjE2NzcwNjkyODB9.PG3lhB7FaA2nqYCCJkptE_hp4RgUpU38kl-TFDi5JFc',
            'cardId': '639357599cba9294d96f9867'
        };

        VGSShow.submitAsync({...data, type: 'number'})
        VGSShow.submitAsync({...data, type: 'cvv2'})
    }

    copyCardNumber = () => {
        VGSShow.copyToClipboard('data.number', 'FORMATTED')
    }

    render() {
        return (<View style={{
            flex: 1, flexDirection: 'column'
        }}>
            <View style={{width: '100%', height: '50%', justifyContent: 'center', padding: 24}}>

                <VGSTextView
                    style={styles.showField}
                    hint={'Card Number'}
                    contentPath={'data.number'}
                    corners={12}
                    fontSize={16}
                />

                <View style={{
                    width: '100%', height: 16
                }}/>


                <VGSTextView
                    style={styles.showField}
                    hint={'Expiration Date'}
                    contentPath={'data.cvv2'}
                    corners={12}
                    fontSize={16}
                />

                <View style={{
                    width: '100%', height: 16
                }}/>

                <Button style={styles.revealButton}
                        title="Reveal"
                        onPress={this.revealData}
                />

                <View style={{
                        width: '100%', height: 16
                }}/>

                <Button style={styles.revealButton}
                        title="Copy"
                        onPress={this.copyCardNumber}
                />

            </View>
        </View>);
    }
}

var styles = StyleSheet.create({
    tokenInfo: {
        fontSize: 14
    }, collectField: {
        width: '100%', height: 56, padding: 8
    }, showField: {
        width: '100%', height: 40,
    }, button: {
        backgroundColor: 'skyblue'
    }, revealButton: {
        backgroundColor: 'skyblue'
    },
});