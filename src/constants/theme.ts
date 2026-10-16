import { TextStyle, ViewStyle } from 'react-native';

export const Colors = { orange: '#E8541A', navy: '#0D1B2A', gold: '#F2A922', white: '#FFFFFF', green: '#2ECC71', red: '#E74C3C', blue: '#3498DB', gray50: '#F8F9FA', gray100: '#F1F3F5', gray200: '#E9ECEF', gray300: '#DEE2E6', gray400: '#ADB5BD', gray500: '#868E96', gray600: '#495057', gray700: '#343A40' } as const;
export const Radii = { lg: 16, md: 10, sm: 8, full: 9999 } as const;
export const Shadows: Record<string, ViewStyle> = { shadow: { shadowColor: Colors.navy, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 12, elevation: 3 }, shadowLg: { shadowColor: Colors.navy, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.12, shadowRadius: 32, elevation: 8 } };
export const Spacing = { xs: 4, sm: 8, md: 16, lg: 24, xl: 32, xxl: 48 } as const;
export const Typography: Record<string, TextStyle> = { h1: { fontSize: 28, fontWeight: '800', color: Colors.navy, lineHeight: 34 }, h2: { fontSize: 22, fontWeight: '700', color: Colors.navy, lineHeight: 28 }, h3: { fontSize: 18, fontWeight: '800', color: Colors.navy }, body: { fontSize: 15, fontWeight: '400', color: Colors.navy, lineHeight: 22 }, caption: { fontSize: 13, fontWeight: '400', color: Colors.gray500, lineHeight: 18 }, label: { fontSize: 12, fontWeight: '700', color: Colors.gray500, textTransform: 'uppercase', letterSpacing: 1.5 } };
