import { ScrollArea } from "@soar-design/soar-react-components";
import { Avatar } from "@soar-design/soar-react-components";

const messages = [
  { id: 1, user: "أحمد", message: "مرحباً! كيف حالك؟", time: "10:30 ص" },
  { id: 2, user: "فاطمة", message: "أنا بخير، شكراً لك!", time: "10:32 ص" },
  { id: 3, user: "أحمد", message: "رائع أن أسمع ذلك!", time: "10:33 ص" },
  { id: 4, user: "فاطمة", message: "ماذا عنك؟", time: "10:34 ص" },
  { id: 5, user: "أحمد", message: "أنا بخير أيضاً!", time: "10:35 ص" },
  { id: 6, user: "فاطمة", message: "هل رأيت الميزة الجديدة؟", time: "10:36 ص" },
  { id: 7, user: "أحمد", message: "نعم! إنها رائعة!", time: "10:37 ص" },
  { id: 8, user: "فاطمة", message: "أوافقك تماماً", time: "10:38 ص" },
  { id: 9, user: "أحمد", message: "دعنا نتحدث لاحقاً", time: "10:39 ص" },
  { id: 10, user: "فاطمة", message: "يبدو جيداً!", time: "10:40 ص" },
];

export default function ScrollAreaChat() {
  return (
    <ScrollArea className="h-72 w-full rounded-md border" dir="rtl">
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

