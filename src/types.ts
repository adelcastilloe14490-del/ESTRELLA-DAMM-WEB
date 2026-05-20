/**
 * Campaign Content Type Declarations
 */

export interface KeyVisual {
  id: string;
  category: string;
  title: string;
  gradient: string;
  textOverlay: string;
}

export interface StoryBeat {
  id: string;
  num: string;
  title: string;
  description: string;
}

export interface StrategicRoute {
  num: number;
  name: string;
  status: 'Selected' | 'Discarded';
  focus: string;
  description: string;
}

export interface Tension {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface AIWorkNode {
  tool: string;
  purpose: string;
  details: string;
}
