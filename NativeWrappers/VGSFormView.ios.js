import React, {useState} from 'react';
import {NativeModules} from 'react-native';
import CardNumberLabel from './ios/CardNumberLabel';
import CvvLabel from './ios/CvvLabel';

///
const VGSShowManager = NativeModules.VGSShowManager;

import {StyleSheet, Text, View, Button} from 'react-native';

const VGSFormView = () => {
  const [jsonText, setJsonText] = useState('No response data');
  const cardId = '';
  const cardToken = '';

  return (
    <View style={styles.sectionContainer}>
      <CardNumberLabel style={{height: 50, margin: 8}} />
      <CvvLabel style={{height: 50, margin: 8}} />
      <Button
        title="REVEAL DATA"
        onPress={() => {
          VGSShowManager.revealData(cardToken, cardId, 'number', value => {
            setJsonText(value);
          });
          VGSShowManager.revealData(cardToken, cardId, 'cvv2', value => {
            setJsonText(value);
          });
        }}
      />
      <Text style={styles.sectionDescription}>{jsonText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: '800',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default VGSFormView;
