'use client';

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState, useCallback } from "react";
import { TeamStats } from "@/app/fixtures/types";
import { getTeams, deleteTeam } from "@/lib/api";
import TeamDialog from "./TeamDialog";

interface TeamsManagerProps {
  category: 'U12' | 'U15';
}

export default function TeamsManager({ category }: TeamsManagerProps) {
  const [teams, setTeams] = useState<TeamStats[]>([]);
  const [, setIsLoading] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState<TeamStats | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Move loadTeams into useCallback to memoize it
  const loadTeams = useCallback(async () => {
    try {
      const data = await getTeams(category);
      setTeams(data);
    } catch (error) {
      console.error('Error loading teams:', error);
    } finally {
      setIsLoading(false);
    }
  }, [category]); // category is the only dependency

  useEffect(() => {
    loadTeams();
  }, [loadTeams]); // Now we can safely add loadTeams as a dependency

  const handleEdit = (team: TeamStats) => {
    setSelectedTeam(team);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this team?')) {
      try {
        await deleteTeam(id);
        await loadTeams();
      } catch (error) {
        console.error('Error deleting team:', error);
        alert('Failed to delete team. Please try again.');
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Teams</h2>
        <Button onClick={() => {
          setSelectedTeam(null);
          setIsDialogOpen(true);
        }}>
          Add Team
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Team Name</TableHead>
              <TableHead>MP</TableHead>
              <TableHead>W</TableHead>
              <TableHead>D</TableHead>
              <TableHead>L</TableHead>
              <TableHead>GF</TableHead>
              <TableHead>GA</TableHead>
              <TableHead>GD</TableHead>
              <TableHead>BP</TableHead>
              <TableHead>Pts</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {teams.map((team) => (
              <TableRow key={team._id}>
                <TableCell>{team.teamName}</TableCell>
                <TableCell>{team.matchesPlayed}</TableCell>
                <TableCell>{team.won}</TableCell>
                <TableCell>{team.drawn}</TableCell>
                <TableCell>{team.lost}</TableCell>
                <TableCell>{team.goalsFor}</TableCell>
                <TableCell>{team.goalsAgainst}</TableCell>
                <TableCell>{team.goalDifference}</TableCell>
                <TableCell>{team.bonusPoints}</TableCell>
                <TableCell>{team.totalPoints}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(team)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => team._id && handleDelete(team._id)}
                    >
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <TeamDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        team={selectedTeam}
        category={category}
        onSuccess={loadTeams}
      />
    </div>
  );
} 