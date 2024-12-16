export interface Exercise {
    id: number;
    name: string;
    days: string[];
    created_at: string;
  }
  
  export interface Workout {
    id: number;
    date: string;
    exercise_name: string;
    weight: number;
    sets: number;
    reps: number;
    notes?: string;
    created_at: string;
  }

  // This defines the structure of an Exercise
export interface Exercise {
    id: number;
    name: string;
    days: string[];
    created_at: string;
  }
  