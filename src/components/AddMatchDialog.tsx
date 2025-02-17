'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Plus, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface AddMatchDialogProps {
  category: 'U12' | 'U15';
  fixtureDate: string;
  onAdd: (matches: any[]) => void;
}

interface MatchInput {
  time: string;
  team1: string;
  team2: string;
  score1: string;
  score2: string;
}

export default function AddMatchDialog({ fixtureDate, onAdd }: AddMatchDialogProps) {
  const [open, setOpen] = useState(false);
  const [matches, setMatches] = useState<MatchInput[]>([
    { time: '', team1: '', team2: '', score1: '', score2: '' }
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (matches.some(match => !match.time || !match.team1 || !match.team2)) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      // Convert scores to numbers or null
      const processedMatches = matches.map(match => ({
        ...match,
        score1: match.score1 ? Number(match.score1) : null,
        score2: match.score2 ? Number(match.score2) : null,
      }));

      onAdd(processedMatches);
      setMatches([{ time: '', team1: '', team2: '', score1: '', score2: '' }]);
      toast.success('Match added successfully');
    } catch (error) {
      toast.error('Failed to save match');
    }
    setOpen(false);
  };

  const addMatch = () => {
    setMatches([...matches, { time: '', team1: '', team2: '', score1: '', score2: '' }]);
  };

  const updateMatch = (index: number, field: keyof MatchInput, value: string) => {
    const newMatches = [...matches];
    newMatches[index] = { ...newMatches[index], [field]: value };
    setMatches(newMatches);
  };

  const deleteMatch = (indexToDelete: number) => {
    setMatches(current => current.filter((_, index) => index !== indexToDelete));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="sm"
          className="bg-[#1A1A1A] text-[#FF4500] hover:bg-[#2A2A2A] border-[#FF4500]"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Match
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-[#FFEFDA]/95 border-[#FF4500]">
        <DialogHeader>
          <DialogTitle className="text-[#1A1A1A] font-bold">
            Add Match to {fixtureDate}
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          {matches.map((match, index) => (
            <div key={index} className="space-y-2 p-4 bg-white/50 rounded-lg">
              <div className="flex items-center gap-2">
                <Input
                  placeholder="Time (e.g., 9:00 AM)"
                  value={match.time}
                  onChange={(e) => updateMatch(index, 'time', e.target.value)}
                  required
                  className="border-[#FF4500]/20 focus:border-[#FF4500] bg-white"
                />
                {matches.length > 1 && (
                  <Button 
                    type="button"
                    variant="ghost" 
                    size="icon"
                    onClick={() => deleteMatch(index)}
                    className="flex-shrink-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-2">
                  <Input
                    placeholder="Team 1"
                    value={match.team1}
                    onChange={(e) => updateMatch(index, 'team1', e.target.value)}
                    required
                    className="border-[#FF4500]/20 focus:border-[#FF4500] bg-white"
                  />
                  <Input
                    type="number"
                    placeholder="Score (optional)"
                    value={match.score1}
                    onChange={(e) => updateMatch(index, 'score1', e.target.value)}
                    min="0"
                    className="w-full border-[#FF4500]/20 focus:border-[#FF4500] bg-white"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    placeholder="Team 2"
                    value={match.team2}
                    onChange={(e) => updateMatch(index, 'team2', e.target.value)}
                    required
                    className="border-[#FF4500]/20 focus:border-[#FF4500] bg-white"
                  />
                  <Input
                    type="number"
                    placeholder="Score (optional)"
                    value={match.score2}
                    onChange={(e) => updateMatch(index, 'score2', e.target.value)}
                    min="0"
                    className="w-full border-[#FF4500]/20 focus:border-[#FF4500] bg-white"
                  />
                </div>
              </div>
            </div>
          ))}
          <div className="flex gap-2 pt-2">
            <Button 
              type="button" 
              variant="outline" 
              onClick={addMatch}
              className="border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500]/10"
            >
              Add Another Match
            </Button>
            <Button 
              type="submit"
              className="bg-[#FF4500] hover:bg-[#FF4500]/90 text-white"
            >
              Save Matches
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 