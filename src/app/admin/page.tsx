'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import FixturesManager from "./components/FixturesManager";
import TeamsManager from "./components/TeamsManager";
import LoginForm from "./components/LoginForm";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  const [, setCategory] = useState<'U12' | 'U15'>('U12');
  const { isAuthenticated, isLoading, logout } = useAuth();

  const handleTabChange = (value: string) => {
    setCategory(value as 'U12' | 'U15');
  };

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">
      Loading...
    </div>;
  }

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button variant="outline" onClick={logout}>
          Logout
        </Button>
      </div>

      <Tabs defaultValue="U12" onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="U12">Under 12</TabsTrigger>
          <TabsTrigger value="U15">Under 15</TabsTrigger>
        </TabsList>
        <TabsContent value="U12">
          <div className="grid gap-6">
            <FixturesManager category="U12" />
            <TeamsManager category="U12" />
          </div>
        </TabsContent>
        <TabsContent value="U15">
          <div className="grid gap-6">
            <FixturesManager category="U15" />
            <TeamsManager category="U15" />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 