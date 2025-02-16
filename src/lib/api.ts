import { API_BASE_URL } from '@/config';

// Type definitions
export interface Match {
  time: string;
  team1: string;
  score1: string | number;
  team2: string;
  score2: string | number;
}

export interface Fixture {
  _id?: string;
  date: string;
  category: 'U12' | 'U15';
  matches: Match[];
}

export interface Team {
  _id?: string;
  teamName: string;
  category: 'U12' | 'U15';
  matchesPlayed: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  bonusPoints: number;
  totalPoints: number;
}

// Fixtures API calls
export async function getFixtures(category: string) {
  const res = await fetch(`${API_BASE_URL}/api/fixtures?category=${category}`, {
    cache: 'no-store' // This ensures we get fresh data each time
  });
  if (!res.ok) throw new Error('Failed to fetch fixtures');
  return res.json();
}

export async function createFixture(data: Omit<Fixture, 'id'>) {
  const res = await fetch(`${API_BASE_URL}/api/fixtures`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create fixture');
  return res.json();
}

export async function updateFixture(id: string, data: Partial<Fixture>) {
  const res = await fetch(`${API_BASE_URL}/api/fixtures/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update fixture');
  return res.json();
}

export async function deleteFixture(id: string) {
  const res = await fetch(`${API_BASE_URL}/api/fixtures/${id}`, {
    method: 'DELETE',
  });
  
  const data = await res.json();
  
  if (!res.ok) {
    throw new Error(data.error || 'Failed to delete fixture');
  }
  
  return data;
}

// Teams API calls
export async function getTeams(category: string) {
  const res = await fetch(`${API_BASE_URL}/api/teams?category=${category}`, {
    cache: 'no-store'
  });
  if (!res.ok) throw new Error('Failed to fetch teams');
  return res.json();
}

export async function createTeam(data: Omit<Team, 'id'>) {
  const res = await fetch(`${API_BASE_URL}/api/teams`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to create team');
  return res.json();
}

export async function updateTeam(id: string, data: Partial<Team>) {
  const res = await fetch(`${API_BASE_URL}/api/teams/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Failed to update team');
  return res.json();
}

export async function deleteTeam(id: string) {
  const res = await fetch(`${API_BASE_URL}/api/teams/${id}`, {
    method: 'DELETE',
  });
  
  const data = await res.json();
  
  if (!res.ok) {
    throw new Error(data.error || 'Failed to delete team');
  }
  
  return data;
} 