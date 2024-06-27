import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [name, setName] = useState("");
  const { toast } = useToast();

  const handleGreet = () => {
    toast({
      title: "Hello!",
      description: `Hello, ${name}!`,
    });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="space-y-4">
        <h1 className="text-3xl text-center">Greeting App</h1>
        <Input
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button onClick={handleGreet}>Greet</Button>
      </div>
    </div>
  );
};

export default Index;