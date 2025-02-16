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
import { useEffect, useState } from "react";
import { FixtureData } from "@/app/fixtures/types";
import { getFixtures, deleteFixture } from "@/lib/api";
import FixtureDialog from "./FixtureDialog";

interface FixturesManagerProps {
  category: 'U12' | 'U15';
}

export default function FixturesManager({ category }: FixturesManagerProps) {
  const [fixtures, setFixtures] = useState<FixtureData[]>([]);
  const [, setIsLoading] = useState(true);
  const [selectedFixture, setSelectedFixture] = useState<FixtureData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Add sorting function
  const sortFixtures = (fixtures: FixtureData[]) => {
    const months: { [key: string]: number } = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };

    return [...fixtures].sort((a, b) => {
      const [dayA, monthA] = a.date.split(' ');
      const [dayB, monthB] = b.date.split(' ');
      
      const dayNumA = parseInt(dayA.replace(/\D/g, ''));
      const dayNumB = parseInt(dayB.replace(/\D/g, ''));
      
      const monthNumA = months[monthA];
      const monthNumB = months[monthB];
      
      if (monthNumA !== monthNumB) {
        return monthNumA - monthNumB;
      }
      return dayNumA - dayNumB;
    });
  };

  useEffect(() => {
    loadFixtures();
  }, [category]);

  const loadFixtures = async () => {
    try {
      const data = await getFixtures(category);
      // Sort fixtures before setting state
      setFixtures(sortFixtures(data));
    } catch (error) {
      console.error('Error loading fixtures:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (fixture: FixtureData) => {
    setSelectedFixture(fixture);
    setIsDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this fixture?')) {
      try {
        await deleteFixture(id);
        await loadFixtures();
      } catch (error) {
        console.error('Error deleting fixture:', error);
      }
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Fixtures</h2>
        <Button onClick={() => {
          setSelectedFixture(null);
          setIsDialogOpen(true);
        }}>
          Add Fixture
        </Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Matches</TableHead>
              <TableHead className="w-[100px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {fixtures.map((fixture) => (
              <TableRow key={fixture._id}>
                <TableCell>{fixture.date}</TableCell>
                <TableCell>
                  {fixture.matches.map((match, index) => (
                    <div key={index}>
                      {match.team1} vs {match.team2}
                    </div>
                  ))}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(fixture)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => fixture._id && handleDelete(fixture._id)}
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

      <FixtureDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        fixture={selectedFixture}
        category={category}
        onSuccess={loadFixtures}
      />
    </div>
  );
} 