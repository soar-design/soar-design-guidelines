import { ScrollArea } from "@soar-design/soar-react-components";
import { Avatar } from "@soar-design/soar-react-components";

const messages = [
  { id: 1, user: "Alice", message: "Hey! How are you?", time: "10:30 AM" },
  { id: 2, user: "Bob", message: "I'm doing great, thanks!", time: "10:32 AM" },
  { id: 3, user: "Alice", message: "That's wonderful to hear!", time: "10:33 AM" },
  { id: 4, user: "Bob", message: "How about you?", time: "10:34 AM" },
  { id: 5, user: "Alice", message: "I'm good too!", time: "10:35 AM" },
  { id: 6, user: "Bob", message: "Did you see the new feature?", time: "10:36 AM" },
  { id: 7, user: "Alice", message: "Yes! It's amazing!", time: "10:37 AM" },
  { id: 8, user: "Bob", message: "I totally agree", time: "10:38 AM" },
  { id: 9, user: "Alice", message: "Let's catch up later", time: "10:39 AM" },
  { id: 10, user: "Bob", message: "Sounds good!", time: "10:40 AM" },
];

export default function ScrollAreaChat() {
  return (
    <ScrollArea className="h-72 w-full rounded-md border">
      <div className="flex flex-col gap-4 p-4">
        {messages.map((msg) => (
          <div key={msg.id} className="flex items-start gap-3">
            <Avatar>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {msg.user[0]}
              </div>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-semibold">{msg.user}</span>
                <span className="text-xs text-muted-foreground">{msg.time}</span>
              </div>
              <p className="text-sm text-muted-foreground">{msg.message}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}

