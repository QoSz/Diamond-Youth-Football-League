'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Pencil, Trash2, Save, X } from 'lucide-react';
import AddFixtureDialog from '@/components/AddFixtureDialog';
import AddMatchDialog from '@/components/AddMatchDialog';
import toast from 'react-hot-toast';

interface FixturesCRUDProps {
  category: 'U12' | 'U15';
}

interface EditingMatch {
  fixtureId: string;
  matchIndex: number;
  time: string;
  score1: string;
  score2: string;
}

interface Match {
  time: string;
  team1: string;
  team2: string;
  score1: number | null;
  score2: number | null;
}

interface FixtureData {
  _id?: string;
  date: string;
  category: 'U12' | 'U15';
  matches: Match[];
}

export default function FixturesCRUD({ category }: FixturesCRUDProps) {
  const [fixtures, setFixtures] = useState<FixtureData[]>([]);
  const [editingMatch, setEditingMatch] = useState<EditingMatch | null>(null);

  const fetchFixtures = async () => {
    const res = await fetch(`/api/admin/fixtures?category=${category}`);
    const data = await res.json();
    setFixtures(sortFixtures(data));
  };

  useEffect(() => {
    fetchFixtures();
  }, [category]);

  const sortFixtures = (fixtures: FixtureData[]) => {
    const months: { [key: string]: number } = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };

    return [...fixtures].sort((a, b) => {
      // Extract day number by removing ordinal indicators
      const dayA = parseInt(a.date.replace(/(st|nd|rd|th)/, ''));
      const dayB = parseInt(b.date.replace(/(st|nd|rd|th)/, ''));
      
      // Extract month
      const monthA = months[a.date.split(' ')[1]];
      const monthB = months[b.date.split(' ')[1]];
      
      // First compare months, then days if months are equal
      if (monthA !== monthB) {
        return monthA - monthB;
      }
      return dayA - dayB;
    });
  };

  const handleAddFixture = async (date: string, matches: any[]) => {
    const toastId = toast.loading('Saving fixture...');
    try {
      // Check if we're adding to an existing fixture
      const existing = fixtures.find(f => f.date === date && f.category === category);
      
      if (existing) {
        // Optimistic update for existing fixture
        const updatedFixture = {
          ...existing,
          matches: [...existing.matches, ...matches.map(m => ({
            time: m.time,
            team1: m.team1,
            team2: m.team2,
            score1: m.score1 || null,
            score2: m.score2 || null
          }))]
        };

        setFixtures(current => sortFixtures(
          current.map(f => f._id === existing._id ? updatedFixture : f)
        ));
      } else {
        // Optimistically add the new fixture with a temporary ID
        const newFixture = {
          _id: `temp-${Date.now()}`, // Add temporary unique ID
          date,
          category,
          matches: matches.map(m => ({
            time: m.time,
            team1: m.team1,
            team2: m.team2,
            score1: m.score1 || null,
            score2: m.score2 || null
          }))
        };

        setFixtures(currentFixtures => sortFixtures([...currentFixtures, newFixture]));
      }

      const response = await fetch('/api/admin/fixtures', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date, category, matches })
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      toast.success('Fixture saved successfully', { id: toastId });

      // Get the real fixture with proper _id from server
      const savedFixture = await response.json();
      
      // Update the temporary fixture with the real one
      setFixtures(currentFixtures => 
        sortFixtures(currentFixtures.map(fixture => 
          fixture._id?.startsWith('temp-') ? savedFixture : fixture
        ))
      );

    } catch (error) {
      toast.error(`Failed to save: ${error instanceof Error ? error.message : 'Unknown error'}`, { id: toastId });
      fetchFixtures();
    }
  };

  const handleEditMatch = (
    fixtureId: string,
    matchIndex: number,
    time: string,
    score1: number | null | undefined,
    score2: number | null | undefined
  ) => {
    setEditingMatch({
      fixtureId,
      matchIndex,
      time: time,
      score1: score1?.toString() ?? '',
      score2: score2?.toString() ?? ''
    });
  };

  const handleSaveMatch = async () => {
    if (!editingMatch) return;
    const toastId = toast.loading('Updating match...');
    try {
      // Optimistically update UI
      setFixtures(currentFixtures => 
        currentFixtures.map(fixture => {
          if (fixture._id !== editingMatch.fixtureId) return fixture;
          
          const newMatches = [...fixture.matches];
          newMatches[editingMatch.matchIndex] = {
            ...newMatches[editingMatch.matchIndex],
            time: editingMatch.time,
            score1: editingMatch.score1 ? parseInt(editingMatch.score1) : null,
            score2: editingMatch.score2 ? parseInt(editingMatch.score2) : null
          };
          
          return {
            ...fixture,
            matches: newMatches
          };
        })
      );

      setEditingMatch(null);

      const response = await fetch('/api/admin/fixtures', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fixtureId: editingMatch.fixtureId,
          matchIndex: editingMatch.matchIndex,
          matchData: {
            time: editingMatch.time,
            score1: editingMatch.score1 ? parseInt(editingMatch.score1) : null,
            score2: editingMatch.score2 ? parseInt(editingMatch.score2) : null
          }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Update failed');
      }

      toast.success('Match updated', { id: toastId });
    } catch (error) {
      toast.error(`Update failed: ${error instanceof Error ? error.message : 'Unknown error'}`, { id: toastId });
      fetchFixtures();
    }
  };

  const handleDeleteMatch = async (fixtureId: string, matchIndex: number) => {
    if (!confirm('Are you sure you want to delete this match?')) return;
    const toastId = toast.loading('Deleting match...');
    try {
      // Optimistically update UI
      setFixtures(currentFixtures => 
        currentFixtures.map(fixture => {
          if (fixture._id !== fixtureId) return fixture;
          
          const newMatches = [...fixture.matches];
          newMatches.splice(matchIndex, 1);
          
          return {
            ...fixture,
            matches: newMatches
          };
        }).filter(fixture => fixture.matches.length > 0)
      );

      const response = await fetch('/api/admin/fixtures', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fixtureId, matchIndex })
      });

      if (!response.ok) {
        throw new Error('Delete failed');
      }

      toast.success('Match deleted', { id: toastId });
    } catch (error) {
      toast.error('Delete failed', { id: toastId });
      fetchFixtures();
    }
  };

  const handleAddMatchToFixture = async (fixtureDate: string, matches: any[]) => {
    try {
      // Optimistic update
      setFixtures(current => 
        current.map(fixture => {
          if (fixture.date !== fixtureDate) return fixture;
          return {
            ...fixture,
            matches: [...fixture.matches, ...matches.map(m => ({
              time: m.time,
              team1: m.team1,
              team2: m.team2,
              score1: m.score1 || null,
              score2: m.score2 || null
            }))]
          };
        })
      );

      const response = await fetch('/api/admin/fixtures', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          date: fixtureDate,
          category,
          matches
        })
      });

      if (!response.ok) {
        throw new Error('Failed to add match');
      }

      // Refresh fixtures to ensure sync with server
      fetchFixtures();
    } catch (error) {
      console.error('Error adding match:', error);
      fetchFixtures();
      alert('Failed to add match. Please try again.');
    }
  };

  const handleDeleteFixture = async (fixtureId: string) => {
    if (!confirm('Are you sure you want to delete this entire fixture? This action cannot be undone.')) return;
    
    const toastId = toast.loading('Deleting fixture...');
    try {
      // Optimistically update UI
      setFixtures(currentFixtures => 
        currentFixtures.filter(fixture => fixture._id !== fixtureId)
      );

      const response = await fetch('/api/admin/fixtures', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fixtureId })
      });

      if (!response.ok) {
        throw new Error('Delete failed');
      }

      toast.success('Fixture deleted', { id: toastId });
    } catch (error) {
      toast.error('Delete failed', { id: toastId });
      fetchFixtures(); // Revert to server state
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">{category} Fixtures</h1>
        <AddFixtureDialog category={category} onAdd={handleAddFixture} />
      </div>

      <div className="space-y-6">
        {fixtures.map((fixture) => (
          <div key={fixture._id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <h3 className="text-lg font-semibold">{fixture.date}</h3>
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-red-500 hover:text-red-700 hover:bg-red-100"
                  onClick={() => handleDeleteFixture(fixture._id!)}
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Fixture
                </Button>
              </div>
              <AddMatchDialog 
                category={category}
                fixtureDate={fixture.date}
                onAdd={(matches) => handleAddMatchToFixture(fixture.date, matches)}
              />
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-center">Time</TableHead>
                  <TableHead className="text-center">Team 1</TableHead>
                  <TableHead className="text-center">Score</TableHead>
                  <TableHead className="text-center">Team 2</TableHead>
                  <TableHead className="text-center">Score</TableHead>
                  <TableHead className="text-center">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fixture.matches.map((match, index) => (
                  <TableRow key={`${fixture.date}-${match.time}-${index}`}>
                    <TableCell className="text-center">
                      {editingMatch?.fixtureId === fixture._id && 
                       editingMatch?.matchIndex === index ? (
                        <Input
                          className="w-24 text-center mx-auto"
                          value={editingMatch.time}
                          onChange={(e) => setEditingMatch({
                            ...editingMatch,
                            time: e.target.value
                          })}
                        />
                      ) : (
                        match.time
                      )}
                    </TableCell>
                    <TableCell className="text-center">{match.team1}</TableCell>
                    <TableCell className="text-center">
                      {editingMatch?.fixtureId === fixture._id && 
                       editingMatch?.matchIndex === index ? (
                        <Input
                          className="w-16 text-center mx-auto"
                          value={editingMatch.score1}
                          onChange={(e) => setEditingMatch({
                            ...editingMatch,
                            score1: e.target.value
                          })}
                        />
                      ) : (
                        match.score1 ?? '-'
                      )}
                    </TableCell>
                    <TableCell className="text-center">{match.team2}</TableCell>
                    <TableCell className="text-center">
                      {editingMatch?.fixtureId === fixture._id && 
                       editingMatch?.matchIndex === index ? (
                        <Input
                          className="w-16 text-center mx-auto"
                          value={editingMatch.score2}
                          onChange={(e) => setEditingMatch({
                            ...editingMatch,
                            score2: e.target.value
                          })}
                        />
                      ) : (
                        match.score2 ?? '-'
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex justify-center gap-2">
                        {editingMatch?.fixtureId === fixture._id && 
                         editingMatch?.matchIndex === index ? (
                          <>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={handleSaveMatch}
                            >
                              <Save className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => setEditingMatch(null)}
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleEditMatch(
                                fixture._id!,
                                index,
                                match.time,
                                match.score1 ?? null,
                                match.score2 ?? null
                              )}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleDeleteMatch(fixture._id!, index)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
} 