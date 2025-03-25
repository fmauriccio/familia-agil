import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { KanbanBoard } from "@/components/KanbanBoard";
import { TaskList } from "@/components/TaskList";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      setLoggedIn(true);
    }
  };

  if (!loggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <Card className="p-6 w-96">
          <CardContent>
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <Input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2" />
            <Input placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-4" />
            <Button onClick={handleLogin} className="w-full">Entrar</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <Tabs defaultValue="calendar">
        <TabsList className="mb-4 flex gap-2">
          <TabsTrigger value="calendar">Calendário</TabsTrigger>
          <TabsTrigger value="tasks">Tarefas</TabsTrigger>
          <TabsTrigger value="scrum">Scrum para Pais</TabsTrigger>
        </TabsList>

        <TabsContent value="calendar">
          <Calendar mode="single" className="shadow-lg rounded-xl p-4" />
        </TabsContent>

        <TabsContent value="tasks">
          <TaskList />
        </TabsContent>

        <TabsContent value="scrum">
          <KanbanBoard />
        </TabsContent>
      </Tabs>
    </div>
  );
}
