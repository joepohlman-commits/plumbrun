import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import Button from '../src/components/Button';
import { Colors, Spacing } from '../src/constants/theme';

export default function SplashScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
    <LinearGradient colors={['#0D1B2A', '#142940', '#1a3350']} locations={[0, 0.5, 1]} style={[styles.container, { paddingTop: insets.top + 40, paddingBottom: insets.bottom + 24 }]}>
      <View style={styles.content}>
        <View style={styles.logoWrap}><Text style={styles.logoPlumb}>PLUMB</Text><Text style={styles.logoRun}>RUN</Text></View>
        <Text style={styles.sub}>by Pohlman</Text>
        <Text style={styles.tagline}>{'Your plumber. Your preference.\nSame day.'}</Text>
        <View style={styles.pills}>
          {['✓ Background Checked', '✓ 100% Licensed', '✓ Same-Day Service', '✓ You Choose Your Tech'].map((pill) => (<View key={pill} style={styles.pill}><Text style={styles.pillText}>{pill}</Text></View>))}
        </View>
      </View>
      <View style={styles.ctas}>
        <Button title="Get a Plumber Now" onPress={() => router.push('/browse')} />
        <Button title="I'm a Plumber — Join the Network" variant="outline" onPress={() => router.push('/browse')} />
      </View>
      <Text style={styles.footer}>MD Master Plumber #61371 · A+ BBB Rating</Text>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 28 },
  content: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  logoWrap: { flexDirection: 'row', marginBottom: 4 },
  logoPlumb: { fontSize: 42, fontWeight: '900', color: Colors.white, letterSpacing: 2 },
  logoRun: { fontSize: 42, fontWeight: '900', color: Colors.orange, letterSpacing: 2 },
  sub: { color: Colors.gray400, fontSize: 13, letterSpacing: 4, textTransform: 'uppercase', fontWeight: '500', marginBottom: 28 },
  tagline: { color: Colors.white, fontSize: 22, fontWeight: '700', lineHeight: 30, textAlign: 'center', marginBottom: 32, maxWidth: 320 },
  pills: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, justifyContent: 'center', maxWidth: 340 },
  pill: { backgroundColor: 'rgba(255,255,255,0.08)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)', paddingVertical: 6, paddingHorizontal: 14, borderRadius: 20 },
  pillText: { color: Colors.gray200, fontSize: 12, fontWeight: '500' },
  ctas: { width: '100%', maxWidth: 320, gap: 12, marginBottom: Spacing.lg },
  footer: { color: Colors.gray500, fontSize: 11, lineHeight: 16 },
});
