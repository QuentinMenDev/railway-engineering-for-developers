import type { CourseModulesMap, Lesson } from '../types';

export const courseModules: CourseModulesMap = {
  m0: {
    title: 'Foundations',
    lessons: [
      { id: 'm0-l1', title: 'Why Railways Work', short: '0.1' },
      { id: 'm0-l2', title: 'The Eight Subsystems', short: '0.2' },
      { id: 'm0-l3', title: "Developer's Mental Model", short: '0.3' },
    ],
  },
  m1: {
    title: 'Permanent Way',
    lessons: [
      { id: 'm1-l1', title: 'Track Structure', short: '1.1' },
      { id: 'm1-l2', title: 'Track Geometry', short: '1.2' },
      { id: 'm1-l3', title: 'Switches & Crossings', short: '1.3' },
      { id: 'm1-l4', title: 'Track Representations', short: '1.4' },
    ],
  },
  m2: {
    title: 'Civil & Geotechnical',
    lessons: [
      { id: 'm2-l1', title: 'Ground Investigation', short: '2.1' },
      { id: 'm2-l2', title: 'Earthworks', short: '2.2' },
      { id: 'm2-l3', title: 'Drainage & Stability', short: '2.3' },
    ],
  },
  m3: {
    title: 'Structures',
    lessons: [
      { id: 'm3-l1', title: 'Bridges', short: '3.1' },
      { id: 'm3-l2', title: 'Tunnels & Retaining Walls', short: '3.2' },
      { id: 'm3-l3', title: 'Stations & Clearances', short: '3.3' },
    ],
  },
  m4: {
    title: 'Signalling & Control',
    lessons: [
      { id: 'm4-l1', title: 'Block System & Signals', short: '4.1' },
      { id: 'm4-l2', title: 'Interlocking & Detection', short: '4.2' },
      { id: 'm4-l3', title: 'ETCS, CBTC & Future', short: '4.3' },
      { id: 'm4-l4', title: 'Points, Routes & Crossings', short: '4.4' },
    ],
  },
  m5: {
    title: 'Electrification & Power',
    lessons: [
      { id: 'm5-l1', title: 'Traction Power Systems', short: '5.1' },
      { id: 'm5-l2', title: 'Overhead Line Design', short: '5.2' },
      { id: 'm5-l3', title: 'Power Supply & Protection', short: '5.3' },
    ],
  },
  m6: {
    title: 'Rolling Stock',
    lessons: [
      { id: 'm6-l1', title: 'Vehicle Types & Architecture', short: '6.1' },
      { id: 'm6-l2', title: 'Traction, Braking & Dynamics', short: '6.2' },
      { id: 'm6-l3', title: 'Wheel-Rail Interface & Gauging', short: '6.3' },
    ],
  },
  m7: {
    title: 'Telecommunications',
    lessons: [
      { id: 'm7-l1', title: 'Radio & GSM-R', short: '7.1' },
      { id: 'm7-l2', title: 'Fibre Optic Networks & SCADA', short: '7.2' },
      { id: 'm7-l3', title: 'Passenger Information & Control Centres', short: '7.3' },
    ],
  },
  m8: {
    title: 'Operations & Timetabling',
    lessons: [
      { id: 'm8-l1', title: 'Timetabling & Scheduling', short: '8.1' },
      { id: 'm8-l2', title: 'Capacity & Possessions', short: '8.2' },
      { id: 'm8-l3', title: 'Performance & Delay Management', short: '8.3' },
    ],
  },
  m9: {
    title: 'Capstone',
    lessons: [
      { id: 'm9-l1', title: 'Project Lifecycle', short: '9.1' },
      { id: 'm9-l2', title: 'Key Interfaces & Integration', short: '9.2' },
      { id: 'm9-l3', title: 'Systems Engineering & Glossary', short: '9.3' },
    ],
  },
};

export const referenceModules: Lesson[] = [];

export function getAllPages(): string[] {
  const pages: string[] = ['index', 'symbols'];
  Object.values(courseModules).forEach(mod => {
    mod.lessons.forEach(l => pages.push(l.id));
  });
  referenceModules.forEach(m => pages.push(m.id));
  return pages;
}

export function getAllLessonIds(): string[] {
  const ids: string[] = [];
  Object.values(courseModules).forEach(mod => {
    mod.lessons.forEach(l => ids.push(l.id));
  });
  return ids;
}

export function getModuleForLesson(lessonId: string): string | null {
  for (const [modId, mod] of Object.entries(courseModules)) {
    if (mod.lessons.some(l => l.id === lessonId)) return modId;
  }
  return null;
}

export function resolvePageId(pageId: string): string {
  const mod = courseModules[pageId];
  if (mod?.lessons[0]) {
    return mod.lessons[0].id;
  }
  return pageId;
}
