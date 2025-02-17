"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import FixturesCRUD from "./FixturesCRUD";
import LeagueCRUD from "./LeagueCRUD";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FFEFDA] to-[#FFE5C4]">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-[#1A1A1A]">League Admin</h1>
          <Button 
            onClick={() => signOut()}
            className="bg-[#1A1A1A] text-[#FF4500] hover:bg-[#2A2A2A]"
          >
            Sign Out
          </Button>
        </div>

        <div className="max-w-4xl mx-auto bg-white/95 rounded-[1.618rem] p-6 shadow-lg">
          <Tabs defaultValue="u12">
            <TabsList className="grid w-full grid-cols-2 bg-[#1A1A1A]">
              <TabsTrigger 
                value="u12"
                className="data-[state=active]:bg-[#FF4500] data-[state=active]:text-white"
              >
                Under 12
              </TabsTrigger>
              <TabsTrigger 
                value="u15"
                className="data-[state=active]:bg-[#FF4500] data-[state=active]:text-white"
              >
                Under 15
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="u12">
              <div className="space-y-8">
                <FixturesCRUD category="U12" />
                <LeagueCRUD category="U12" />
              </div>
            </TabsContent>

            <TabsContent value="u15">
              <div className="space-y-8">
                <FixturesCRUD category="U15" />
                <LeagueCRUD category="U15" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
} 