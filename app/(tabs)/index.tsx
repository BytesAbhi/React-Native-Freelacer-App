import { Image, StyleSheet, Platform,View,Text,SafeAreaView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
   <SafeAreaView>
    <View>

  <Link href='/splash'>
    Hello world
  </Link>

</View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});
