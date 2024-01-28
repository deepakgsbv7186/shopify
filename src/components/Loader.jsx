import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {COLOR} from '../utils/theme/colors';

export default function Loader({loading}) {
  return (
    <Modal
      isVisible={loading}
      coverScreen={true}
      swipeDirection="right"
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      backdropColor="rgba(0,0,0,0.4)"
      style={{
        flex: 1,
        margin: 0,
      }}>
      <View style={styles.container}>
        <ActivityIndicator animating size={'large'} color={COLOR.white} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
