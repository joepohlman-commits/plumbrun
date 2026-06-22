import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Colors, Spacing } from '../constants/theme';
interface HeaderProps { showBack?: boolean; rightElement?: React.ReactNode; }
export default function Header({ showBack = false, rightElement }: HeaderProps) {
  const insets = useSafeAreaInsets(); const router = useRouter();
  return (<View style={[styles.container, { paddingTop: insets.top + 8 }]}><View style={styles.inner}>{showBack ? (<Pressable onPress={() => router.back()} style={styles.backBtn}><Text style={styles.backIcon}>←</Text></Pressable>) : (<View style={styles.backPlaceholder} />)}<View style={styles.logoWrap}><Text style={styles.logoPlumb}>PLUMB</Text><Text style={styles.logoRun}>RUN</Text></View>{rightElement ?? <View style={styles.backPlaceholder} />}</View></View>);
}
const styles = StyleSheet.create({ container: { backgroundColor: Colors.white, borderBottomWidth: 1, borderBottomColor: Colors.gray200, paddingBottom: Spacing.sm, paddingHorizontal: Spacing.md }, inner: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 40 }, backBtn: { width: 36, height: 36, borderRadius: 18, backgroundColor: Colors.gray100, alignItems: 'center', justifyContent: 'center' }, backIcon: { fontSize: 18, color: Colors.navy }, backPlaceholder: { width: 36 }, logoWrap: { flexDirection: 'row', alignItems: 'center' }, logoPlumb: { fontSize: 18, fontWeight: '900', color: Colors.navy, letterSpacing: 1 }, logoRun: { fontSize: 18, fontWeight: '900', color: Colors.orange, letterSpacing: 1 } });
