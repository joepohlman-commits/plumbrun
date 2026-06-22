import React from 'react';
import { Pressable, Text, StyleSheet, ActivityIndicator, ViewStyle, TextStyle } from 'react-native';
import { Colors, Radii, Shadows } from '../constants/theme';
interface ButtonProps { title: string; onPress: () => void; variant?: 'primary' | 'outline'; loading?: boolean; disabled?: boolean; style?: ViewStyle; }
export default function Button({ title, onPress, variant = 'primary', loading, disabled, style }: ButtonProps) {
  const isPrimary = variant === 'primary';
  return (<Pressable onPress={onPress} disabled={disabled || loading} style={({ pressed }) => [styles.base, isPrimary ? styles.primary : styles.outline, pressed && styles.pressed, (disabled || loading) && styles.disabled, Shadows.shadow, style]}>{loading ? (<ActivityIndicator color={isPrimary ? Colors.white : Colors.orange} />) : (<Text style={[styles.text, isPrimary ? styles.textPrimary : styles.textOutline]}>{title}</Text>)}</Pressable>);
}
const styles = StyleSheet.create({ base: { alignItems: 'center', justifyContent: 'center', paddingVertical: 16, paddingHorizontal: 24, borderRadius: Radii.lg, width: '100%' } as ViewStyle, primary: { backgroundColor: Colors.orange }, outline: { backgroundColor: 'transparent', borderWidth: 2, borderColor: 'rgba(255,255,255,0.3)' }, pressed: { transform: [{ scale: 0.97 }], opacity: 0.9 }, disabled: { opacity: 0.5 }, text: { fontSize: 16, fontWeight: '700' } as TextStyle, textPrimary: { color: Colors.white }, textOutline: { color: Colors.white } });
