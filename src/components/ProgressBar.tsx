import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/theme';
interface ProgressBarProps { step: number; totalSteps: number; }
export default function ProgressBar({ step, totalSteps }: ProgressBarProps) {
  const pct = `${(step / totalSteps) * 100}%`;
  return (<View style={styles.track}><LinearGradient colors={[Colors.orange, Colors.gold]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={[styles.fill, { width: pct as any }]} /></View>);
}
const styles = StyleSheet.create({ track: { height: 3, backgroundColor: Colors.gray200, width: '100%' }, fill: { height: '100%', borderTopRightRadius: 3, borderBottomRightRadius: 3 } });
