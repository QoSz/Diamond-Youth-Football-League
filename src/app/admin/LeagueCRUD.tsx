'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Pencil, Trash2, Save, X, Plus } from 'lucide-react';
import { TeamStats } from '@/app/fixtures/types';
import toast from 'react-hot-toast';

interface LeagueCRUDProps {
  category: 'U12' | 'U15';
}

interface EditingTeam extends Omit<TeamStats, '_id'> {
  _id?: string;
  isNew?: boolean;
}

export default function LeagueCRUD({ category }: LeagueCRUDProps) {
  const [teams, setTeams] = useState<(TeamStats & { _id: string })[]>([]);
  const [editingTeam, setEditingTeam] = useState<EditingTeam | null>(null);

  const fetchTeams = async () => {
    const res = await fetch(`/api/admin/league?category=${category}`);
    const data = await res.json();
    setTeams(data);
  };

  useEffect(() => {
    fetchTeams();
  }, [category]);

  const handleAddTeam = () => {
    const newTeam: EditingTeam = {
      isNew: true,
      teamName: '',
      category,
      matchesPlayed: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      bonusPoints: 0,
      totalPoints: 0,
    };
    setEditingTeam(newTeam);
  };

  const handleEditTeam = (team: TeamStats & { _id: string }) => {
    setEditingTeam({
      ...team,
      isNew: false
    });
  };

  const updateEditingTeam = (field: keyof TeamStats, value: string | number) => {
    if (!editingTeam) return;

    const newTeam = {
      ...editingTeam,
      [field]: typeof value === 'string' ? value : Number(value)
    };

    newTeam.goalDifference = newTeam.goalsFor - newTeam.goalsAgainst;
    newTeam.totalPoints = (newTeam.won * 3) + newTeam.drawn + newTeam.bonusPoints;

    setEditingTeam(newTeam);
  };

  const handleSaveTeam = async () => {
    if (!editingTeam) return;
    const toastId = toast.loading('Saving team...');
    try {
      const method = editingTeam.isNew ? 'POST' : 'PUT';
      const response = await fetch('/api/admin/league', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editingTeam),
      });

      if (!response.ok) throw new Error('Failed to save team');
      
      fetchTeams();
      setEditingTeam(null);
      toast.success('Team saved', { id: toastId });
    } catch (error) {
      toast.error(`Save failed: ${error instanceof Error ? error.message : 'Unknown error'}`, { id: toastId });
    }
  };

  const handleDeleteTeam = async (teamId: string | undefined) => {
    if (!teamId) return;
    if (!confirm('Are you sure you want to delete this team?')) return;
    
    const toastId = toast.loading('Deleting team...');
    
    // Optimistically remove the team from the UI
    const previousTeams = [...teams];
    setTeams(teams.filter(team => team._id !== teamId));
    
    try {
      const response = await fetch('/api/admin/league', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ teamId }),
      });

      if (!response.ok) {
        throw new Error('Failed to delete team');
      }
      
      toast.success('Team deleted', { id: toastId });
    } catch (error) {
      // Revert to previous state if the deletion fails
      setTeams(previousTeams);
      toast.error('Delete failed', { id: toastId });
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">League Table</h2>
        <Button onClick={handleAddTeam}>
          <Plus className="h-4 w-4 mr-2" />
          Add Team
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Team</TableHead>
            <TableHead className="text-center">MP</TableHead>
            <TableHead className="text-center">W</TableHead>
            <TableHead className="text-center">D</TableHead>
            <TableHead className="text-center">L</TableHead>
            <TableHead className="text-center">GF</TableHead>
            <TableHead className="text-center">GA</TableHead>
            <TableHead className="text-center">GD</TableHead>
            <TableHead className="text-center">BP</TableHead>
            <TableHead className="text-center">Pts</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team) => (
            <TableRow key={team._id}>
              <TableCell>
                {editingTeam?._id === team._id ? (
                  <Input
                    value={editingTeam?.teamName ?? ''}
                    onChange={(e) => updateEditingTeam('teamName', e.target.value)}
                  />
                ) : (
                  team.teamName
                )}
              </TableCell>
              <TableCell className="text-center">
                {editingTeam?._id === team._id ? (
                  <Input
                    type="number"
                    className="w-16 text-center mx-auto"
                    value={editingTeam.matchesPlayed}
                    onChange={(e) => updateEditingTeam('matchesPlayed', parseInt(e.target.value))}
                  />
                ) : (
                  team.matchesPlayed
                )}
              </TableCell>
              <TableCell className="text-center">
                {editingTeam?._id === team._id ? (
                  <Input
                    type="number"
                    className="w-16 text-center mx-auto"
                    value={editingTeam.won}
                    onChange={(e) => updateEditingTeam('won', parseInt(e.target.value))}
                  />
                ) : (
                  team.won
                )}
              </TableCell>
              <TableCell className="text-center">
                {editingTeam?._id === team._id ? (
                  <Input
                    type="number"
                    className="w-16 text-center mx-auto"
                    value={editingTeam.drawn}
                    onChange={(e) => updateEditingTeam('drawn', parseInt(e.target.value))}
                  />
                ) : (
                  team.drawn
                )}
              </TableCell>
              <TableCell className="text-center">
                {editingTeam?._id === team._id ? (
                  <Input
                    type="number"
                    className="w-16 text-center mx-auto"
                    value={editingTeam.lost}
                    onChange={(e) => updateEditingTeam('lost', parseInt(e.target.value))}
                  />
                ) : (
                  team.lost
                )}
              </TableCell>
              <TableCell className="text-center">
                {editingTeam?._id === team._id ? (
                  <Input
                    type="number"
                    className="w-16 text-center mx-auto"
                    value={editingTeam.goalsFor}
                    onChange={(e) => updateEditingTeam('goalsFor', parseInt(e.target.value))}
                  />
                ) : (
                  team.goalsFor
                )}
              </TableCell>
              <TableCell className="text-center">
                {editingTeam?._id === team._id ? (
                  <Input
                    type="number"
                    className="w-16 text-center mx-auto"
                    value={editingTeam.goalsAgainst}
                    onChange={(e) => updateEditingTeam('goalsAgainst', parseInt(e.target.value))}
                  />
                ) : (
                  team.goalsAgainst
                )}
              </TableCell>
              <TableCell className="text-center">{team.goalDifference}</TableCell>
              <TableCell className="text-center">
                {editingTeam?._id === team._id ? (
                  <Input
                    type="number"
                    className="w-16 text-center mx-auto"
                    value={editingTeam.bonusPoints}
                    onChange={(e) => updateEditingTeam('bonusPoints', parseInt(e.target.value))}
                  />
                ) : (
                  team.bonusPoints
                )}
              </TableCell>
              <TableCell className="text-center">{team.totalPoints}</TableCell>
              <TableCell>
                <div className="flex justify-center gap-2">
                  {editingTeam?._id === team._id ? (
                    <>
                      <Button size="sm" variant="ghost" onClick={handleSaveTeam}>
                        <Save className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => setEditingTeam(null)}>
                        <X className="h-4 w-4" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button size="sm" variant="ghost" onClick={() => handleEditTeam(team)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => handleDeleteTeam(team._id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
          {editingTeam?.isNew && (
            <TableRow>
              <TableCell>
                <Input
                  value={editingTeam.teamName}
                  onChange={(e) => updateEditingTeam('teamName', e.target.value)}
                  placeholder="Team Name"
                />
              </TableCell>
              <TableCell className="text-center">
                <Input
                  type="number"
                  className="w-16 text-center mx-auto"
                  value={editingTeam.matchesPlayed}
                  onChange={(e) => updateEditingTeam('matchesPlayed', parseInt(e.target.value))}
                />
              </TableCell>
              <TableCell className="text-center">
                <Input
                  type="number"
                  className="w-16 text-center mx-auto"
                  value={editingTeam.won}
                  onChange={(e) => updateEditingTeam('won', parseInt(e.target.value))}
                />
              </TableCell>
              <TableCell className="text-center">
                <Input
                  type="number"
                  className="w-16 text-center mx-auto"
                  value={editingTeam.drawn}
                  onChange={(e) => updateEditingTeam('drawn', parseInt(e.target.value))}
                />
              </TableCell>
              <TableCell className="text-center">
                <Input
                  type="number"
                  className="w-16 text-center mx-auto"
                  value={editingTeam.lost}
                  onChange={(e) => updateEditingTeam('lost', parseInt(e.target.value))}
                />
              </TableCell>
              <TableCell className="text-center">
                <Input
                  type="number"
                  className="w-16 text-center mx-auto"
                  value={editingTeam.goalsFor}
                  onChange={(e) => updateEditingTeam('goalsFor', parseInt(e.target.value))}
                />
              </TableCell>
              <TableCell className="text-center">
                <Input
                  type="number"
                  className="w-16 text-center mx-auto"
                  value={editingTeam.goalsAgainst}
                  onChange={(e) => updateEditingTeam('goalsAgainst', parseInt(e.target.value))}
                />
              </TableCell>
              <TableCell className="text-center">{editingTeam.goalDifference}</TableCell>
              <TableCell className="text-center">
                <Input
                  type="number"
                  className="w-16 text-center mx-auto"
                  value={editingTeam.bonusPoints}
                  onChange={(e) => updateEditingTeam('bonusPoints', parseInt(e.target.value))}
                />
              </TableCell>
              <TableCell className="text-center">{editingTeam.totalPoints}</TableCell>
              <TableCell>
                <div className="flex justify-center gap-2">
                  <Button size="sm" variant="ghost" onClick={handleSaveTeam}>
                    <Save className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => setEditingTeam(null)}>
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
} 