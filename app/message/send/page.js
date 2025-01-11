"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { socket } from "@/utils/socket-io/socket";
import { useEffect, useState } from "react";

const SendMessage = () => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({ text });
    console.log(socket);

    socket.emit("send-message", text);
  };

  useEffect(() => {
    socket.on("receive-message", (data) => {
      alert(data);
    });
  }, [socket]);

  return (
    <div className="py-36">
      <div className="max-w-lg mx-auto text-center">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Send a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button type="submit">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default SendMessage;
