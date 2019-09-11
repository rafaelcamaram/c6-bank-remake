import React from 'react';
import {Animated, View, SafeAreaView, Text} from 'react-native';

import {animatedPosition, panGesture} from './pan-responder';
import styles from './styles';

function BottomSheet() {
  return (
    <Animated.View style={[styles.container, {bottom: animatedPosition}]}>
      <View style={styles.gestureArea} {...panGesture.panHandlers}>
        <View style={styles.pullItem} />
      </View>

      <SafeAreaView style={styles.content}>
        <View style={styles.container}>
          <Text style={styles.text}>Your awesome content</Text>
        </View>
      </SafeAreaView>
    </Animated.View>
  );
}

export default BottomSheet;
