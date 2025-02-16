'use client';

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { TeamStats } from "@/app/fixtures/types";
import { createTeam, updateTeam } from "@/lib/api";

interface TeamDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  team: TeamStats | null;
  category: 'U12' | 'U15';
  onSuccess: () => void;
}

export default function TeamDialog({
  open,
  onOpenChange,
  team,
  category,
  onSuccess,
}: TeamDialogProps) {
  const [formData, setFormData] = useState<TeamStats>(() => {
    if (team) {
      return { ...team };
    }
    return {
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
  });

  useEffect(() => {
    if (team) {
      setFormData({ ...team });
    } else {
      setFormData({
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
      });
    }
  }, [team, category]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Calculate goal difference and total points
      const goalDifference = formData.goalsFor - formData.goalsAgainst;
      const totalPoints = (formData.won * 3) + formData.drawn + formData.bonusPoints;

      const updatedData = {
        ...formData,
        goalDifference,
        totalPoints,
      };

      if (team?._id) {
        await updateTeam(team._id, updatedData);
      } else {
        await createTeam(updatedData);
      }
      onSuccess();
      onOpenChange(false);
    } catch (error) {
      console.error('Error saving team:', error);
    }
  };

  const handleChange = (field: keyof TeamStats, value: string) => {
    const numValue = field === 'teamName' ? value : parseInt(value) || 0;
    setFormData({ ...formData, [field]: numValue });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {team ? 'Edit Team' : 'Add Team'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Team Name</label>
            <Input
              value={formData.teamName}
              onChange={(e) => handleChange('teamName', e.target.value)}
              placeholder="Team Name"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Matches Played</label>
              <Input
                type="number"
                value={formData.matchesPlayed}
                onChange={(e) => handleChange('matchesPlayed', e.target.value)}
                min={0}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Won</label>
              <Input
                type="number"
                value={formData.won}
                onChange={(e) => handleChange('won', e.target.value)}
                min={0}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Drawn</label>
              <Input
                type="number"
                value={formData.drawn}
                onChange={(e) => handleChange('drawn', e.target.value)}
                min={0}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Lost</label>
              <Input
                type="number"
                value={formData.lost}
                onChange={(e) => handleChange('lost', e.target.value)}
                min={0}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Goals For</label>
              <Input
                type="number"
                value={formData.goalsFor}
                onChange={(e) => handleChange('goalsFor', e.target.value)}
                min={0}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Goals Against</label>
              <Input
                type="number"
                value={formData.goalsAgainst}
                onChange={(e) => handleChange('goalsAgainst', e.target.value)}
                min={0}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Bonus Points</label>
              <Input
                type="number"
                value={formData.bonusPoints}
                onChange={(e) => handleChange('bonusPoints', e.target.value)}
                min={0}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              {team ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 