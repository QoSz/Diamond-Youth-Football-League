'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Trash2, Plus } from 'lucide-react';
import toast from 'react-hot-toast';

interface MatchInput {
  time: string;
  team1: string;
  team2: string;
  score1: string;
  score2: string;
  isNew?: boolean;
}

export default function AddFixtureDialog({ category, onAdd }: { 
  category: 'U12' | 'U15';
  onAdd: (date: string, matches: MatchInput[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');
  const [matches, setMatches] = useState<MatchInput[]>([{
    time: '',
    team1: '',
    team2: '',
    score1: '',
    score2: '',
    isNew: true
  }]);

  const addMatch = () => {
    setMatches([...matches, {
      time: '',
      team1: '',
      team2: '',
      score1: '',
      score2: '',
      isNew: true
    }]);
  };

  const deleteMatch = (index: number) => {
    const newMatches = matches.filter((_, i) => i !== index);
    setMatches(newMatches);
  };

  const handleSubmit = () => {
    if (!date) {
      toast.error('Please enter a date');
      return;
    }
    
    // Validate time format
    const timeRegex = /^(1[0-2]|0?[1-9]):[0-5][0-9] (AM|PM)$/i;
    const invalidTime = matches.find(m => m.time && !timeRegex.test(m.time));
    if (invalidTime) {
      toast.error('Please use valid time format (e.g. 9:00 AM)');
      return;
    }

    const validMatches = matches.filter(m => m.team1 && m.team2);
    if (validMatches.length === 0) {
      toast.error('Please add at least one valid match');
      return;
    }

    onAdd(date, validMatches.map(m => ({
      time: m.time || 'TBD',
      team1: m.team1,
      team2: m.team2,
      score1: m.score1,
      score2: m.score2
    })));
    
    toast.success('Fixture added successfully');
    setOpen(false);
    // Reset form
    setDate('');
    setMatches([{
      time: '',
      team1: '',
      team2: '',
      score1: '',
      score2: '',
      isNew: true
    }]);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-[#1A1A1A] text-[#FF4500] hover:bg-[#2A2A2A]">
          Add New Fixture
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-[#FFEFDA]/95 border-[#FF4500]">
        <DialogHeader>
          <DialogTitle className="text-[#1A1A1A] font-bold">
            Add New Fixture - {category}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Date (e.g. 19th Jan)"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-[#FF4500]/20 focus:border-[#FF4500] bg-white"
          />
          
          {matches.map((match, index) => (
            <div key={index} className="p-4 bg-white/50 rounded-lg space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-6 gap-2 items-center">
                <div className="col-span-1 md:col-span-5 grid grid-cols-1 sm:grid-cols-5 gap-2">
                  <Input
                    placeholder="Time"
                    value={match.time}
                    onChange={(e) => {
                      const newMatches = [...matches];
                      newMatches[index].time = e.target.value;
                      setMatches(newMatches);
                    }}
                    className="border-[#FF4500]/20 focus:border-[#FF4500] bg-white"
                  />
                  <Input
                    placeholder="Team 1"
                    value={match.team1}
                    onChange={(e) => {
                      const newMatches = [...matches];
                      newMatches[index].team1 = e.target.value;
                      setMatches(newMatches);
                    }}
                    className="border-[#FF4500]/20 focus:border-[#FF4500] bg-white"
                  />
                  <Input
                    placeholder="Score"
                    value={match.score1}
                    onChange={(e) => {
                      const newMatches = [...matches];
                      newMatches[index].score1 = e.target.value;
                      setMatches(newMatches);
                    }}
                    className="border-[#FF4500]/20 focus:border-[#FF4500] bg-white"
                  />
                  <Input
                    placeholder="Team 2"
                    value={match.team2}
                    onChange={(e) => {
                      const newMatches = [...matches];
                      newMatches[index].team2 = e.target.value;
                      setMatches(newMatches);
                    }}
                    className="border-[#FF4500]/20 focus:border-[#FF4500] bg-white"
                  />
                  <Input
                    placeholder="Score"
                    value={match.score2}
                    onChange={(e) => {
                      const newMatches = [...matches];
                      newMatches[index].score2 = e.target.value;
                      setMatches(newMatches);
                    }}
                    className="border-[#FF4500]/20 focus:border-[#FF4500] bg-white"
                  />
                </div>
                
                <div className="col-span-1 flex justify-end">
                  <Button
                    variant="ghost"
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                    onClick={() => deleteMatch(index)}
                  >
                    <Trash2 size={18} />
                  </Button>
                </div>
              </div>
            </div>
          ))}

          <div className="flex justify-end gap-2">
            <Button
              onClick={addMatch}
              variant="outline"
              className="border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500]/10"
            >
              <Plus size={18} className="mr-2" /> Add Match
            </Button>
          </div>

          <Button 
            onClick={handleSubmit}
            className="w-full bg-[#FF4500] hover:bg-[#FF4500]/90 text-white"
          >
            Save Fixture
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 