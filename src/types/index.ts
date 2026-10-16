export type TechType = 'powerhouse' | 'lowkey' | 'nextgen' | 'veteran';
export interface Technician { id: number; name: string; initials: string; shortName: string; firstName: string; type: TechType; typeName: string; typeEmoji: string; badgeClass: 'powerhouse' | 'lowkey' | 'nextgen' | 'veteran'; license: string; rating: number; jobs: number; score: number; tags: string[]; }
export interface Category { emoji: string; label: string; }
export interface FilterTab { id: string; label: string; }
