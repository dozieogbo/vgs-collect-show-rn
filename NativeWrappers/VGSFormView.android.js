import React, {Component} from 'react';
import {Button, DeviceEventEmitter, StyleSheet, Text, View} from 'react-native';

import CardNumberLayout from './android/fields/number/NativeView';

import CardExpDateLayout from './android/fields/date/NativeView';

import VGSTextView from './android/fields/show/text/NativeView';

import VGSShow from './android/module/show/VGSShow';

import VGSCollect from './android/module/collect/VGSCollect';

export default class VGSFormView extends Component<Props> {
    constructor(props) {
        super(props);
        this.listener = DeviceEventEmitter.addListener('VGSCollectOnVGSResponse', e => this.showUserData(e));
        this.listener = DeviceEventEmitter.addListener('cardNumberToken', e => this.showCardNumberToken(e));
        this.listener = DeviceEventEmitter.addListener('expirationDateToken', e => this.showExpirationDateToken(e));
        this.state = {
            bodyText: "Code:", cardNumberToken: " ", expirationDateToken: " ",
        };
    }

    showUserData = (msg) => {
        this.setState({bodyText: msg})
    }

    showCardNumberToken = (msg) => {
        this.setState({cardNumberToken: msg})
    }

    showExpirationDateToken = (msg) => {
        this.setState({expirationDateToken: msg})
    }

    revealData = () => {
        var data = {
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzkzNTc1OTljYmE5Mjk0ZDk2Zjk4NjciLCJ0eXBlIjoiQ0FSRFRPS0VOIiwiaWF0IjoxNjc2OTk2ODIzLCJleHAiOjE2NzY5OTY5NDN9.LpqxeEBL2pvOuSjWqSeXoK5jsLlt7xMT_P-jtdwiQDM',
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