import { API_BASE_URL } from '@/config';

// Fixtures API calls
export async function getFixtures(category: string) {
  const res = await fetch(`${API_BASE_URL}/api/fixtures?category=${category}`, {
    cache: 'no-store' // This ensures we get fresh data each time
  });
  if (!res.ok) throw new Error('Failed to fetch fixtures');
  return res.json();
}

export async function createFixture(data: any) {
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

export async function updateFixture(id: string, data: any) {
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
  if (!res.ok) throw new Error('Failed to delete fixture');
  return res.json();
}

// Teams API calls
export async function getTeams(category: string) {
  const res = await fetch(`${API_BASE_URL}/api/teams?category=${category}`, {
    cache: 'no-store'
  });
  if (!res.ok) throw new Error('Failed to fetch teams');
  return res.json();
}

export async function createTeam(data: any) {
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

export async function updateTeam(id: string, data: any) {
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
  if (!res.ok) throw new Error('Failed to delete team');
  return res.json();
} 