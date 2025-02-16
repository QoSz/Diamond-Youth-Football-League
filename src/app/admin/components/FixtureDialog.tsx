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
import { Fixture, Match } from "@/lib/api";
import { createFixture, updateFixture } from "@/lib/api";

interface FixtureDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fixture: Fixture | null;
  category: 'U12' | 'U15';
  onSuccess: () => void;
}

export default function FixtureDialog({
  open,
  onOpenChange,
  fixture,
  category,
  onSuccess,
}: FixtureDialogProps) {
  const [formData, setFormData] = useState<Fixture>(() => {
    if (fixture) {
      return { ...fixture };
    }
    return {
      date: '',
      category,
      matches: [{ time: '', team1: '', score1: '', team2: '', score2: '' }],
    };
  });

  useEffect(() => {
    if (fixture) {
      setFormData({ ...fixture });
    } else {
      setFormData({
        date: '',
        category,
        matches: [{ time: '', team1: '', score1: '', team2: '', score2: '' }],
      });
    }
  }, [fixture, category]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (fixture?._id) {
        await updateFixture(fixture._id, formData);
      } else {
        await createFixture(formData);
      }
      onSuccess();
      onOpenChange(false);
    } catch (error) {
      console.error('Error saving fixture:', error);
    }
  };

  const handleMatchChange = (index: number, field: keyof Match, value: string) => {
    const newMatches = [...formData.matches];
    newMatches[index] = {
      ...newMatches[index],
      [field]: value,
    };
    setFormData({ ...formData, matches: newMatches });
  };

  const addMatch = () => {
    setFormData({
      ...formData,
      matches: [
        ...formData.matches,
        { time: '', team1: '', score1: '', team2: '', score2: '' },
      ],
    });
  };

  const removeMatch = (index: number) => {
    const newMatches = formData.matches.filter((_: Match, i: number) => i !== index);
    setFormData({ ...formData, matches: newMatches });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {fixture ? 'Edit Fixture' : 'Add Fixture'}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium">Date</label>
            <Input
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              placeholder="e.g., 19th Jan"
            />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Matches</label>
              <Button type="button" variant="outline" onClick={addMatch}>
                Add Match
              </Button>
            </div>

            {formData.matches.map((match: Match, index: number) => (
              <div key={index} className="grid grid-cols-12 gap-2 items-center">
                <div className="col-span-2">
                  <Input
                    value={match.time}
                    onChange={(e) => handleMatchChange(index, 'time', e.target.value)}
                    placeholder="Time"
                  />
                </div>
                <div className="col-span-3">
                  <Input
                    value={match.team1}
                    onChange={(e) => handleMatchChange(index, 'team1', e.target.value)}
                    placeholder="Team 1"
                  />
                </div>
                <div className="col-span-1">
                  <Input
                    value={match.score1}
                    onChange={(e) => handleMatchChange(index, 'score1', e.target.value)}
                    placeholder="Score"
                  />
                </div>
                <div className="col-span-1 text-center">vs</div>
                <div className="col-span-3">
                  <Input
                    value={match.team2}
                    onChange={(e) => handleMatchChange(index, 'team2', e.target.value)}
                    placeholder="Team 2"
                  />
                </div>
                <div className="col-span-1">
                  <Input
                    value={match.score2}
                    onChange={(e) => handleMatchChange(index, 'score2', e.target.value)}
                    placeholder="Score"
                  />
                </div>
                <div className="col-span-1">
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => removeMatch(index)}
                    disabled={formData.matches.length === 1}
                  >
                    X
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit">
              {fixture ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 