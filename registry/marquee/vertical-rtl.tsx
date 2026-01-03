import { Avatar, AvatarFallback, AvatarImage } from '@soar-design/soar-react-components';
import { Card, CardContent } from '@soar-design/soar-react-components';
import { Marquee } from '@soar-design/soar-react-components';

// Unique reviews data
const testimonials = [
  {
    name: 'أفا غرين',
    username: '@ava',
    body: 'جعل Cascade AI سير عملي أسرع 10 مرات!',
    img: 'https://randomuser.me/api/portraits/women/32.jpg',
    country: '🇦🇺 أستراليا',
  },
  {
    name: 'آنا ميلر',
    username: '@ana',
    body: 'الماركيز العمودي يغير قواعد اللعبة!',
    img: 'https://randomuser.me/api/portraits/women/68.jpg',
    country: '🇩🇪 ألمانيا',
  },
  {
    name: 'ماتيو روسي',
    username: '@mat',
    body: 'الرسوم المتحركة سلسة جدًا!',
    img: 'https://randomuser.me/api/portraits/men/51.jpg',
    country: '🇮🇹 إيطاليا',
  },
  {
    name: 'مايا باتيل',
    username: '@maya',
    body: 'كان الإعداد سهلاً جدًا!',
    img: 'https://randomuser.me/api/portraits/women/53.jpg',
    country: '🇮🇳 الهند',
  },
  {
    name: 'نوح سميث',
    username: '@noah',
    body: 'أفضل مكون ماركيز!',
    img: 'https://randomuser.me/api/portraits/men/33.jpg',
    country: '🇺🇸 الولايات المتحدة',
  },
  {
    name: 'لوكاس ستون',
    username: '@luc',
    body: 'قابل للتخصيص وسلس جدًا.',
    img: 'https://randomuser.me/api/portraits/men/22.jpg',
    country: '🇫🇷 فرنسا',
  },
  {
    name: 'هاروتو ساتو',
    username: '@haru',
    body: 'أداء مثير للإعجاب على الهاتف المحمول!',
    img: 'https://randomuser.me/api/portraits/men/85.jpg',
    country: '🇯🇵 اليابان',
  },
  {
    name: 'إيما لي',
    username: '@emma',
    body: 'أحب ميزة الإيقاف عند التمرير!',
    img: 'https://randomuser.me/api/portraits/women/45.jpg',
    country: '🇨🇦 كندا',
  },
  {
    name: 'كارلوس راي',
    username: '@carl',
    body: 'رائع للشهادات والشعارات.',
    img: 'https://randomuser.me/api/portraits/men/61.jpg',
    country: '🇪🇸 إسبانيا',
  },
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  return (
    <Card className="w-64" dir="rtl">
      <CardContent>
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9">
            <AvatarImage src={img} alt="@reui_io" />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium text-foreground flex items-center gap-1">
              {name} <span className="text-xs">{country}</span>
            </figcaption>
            <p className="text-xs font-medium text-muted-foreground">{username}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-sm text-econdary-foreground">{body}</blockquote>
      </CardContent>
    </Card>
  );
}

export default function Component() {
  return (
    <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden gap-1.5" dir="rtl">
      {/* Vertical Marquee (downwards) */}
      <Marquee vertical pauseOnHover repeat={3} className="[--duration:40s]">
        {testimonials.map((review) => (
          <TestimonialCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* Vertical Marquee (upwards) */}
      <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
        {testimonials.map((review) => (
          <TestimonialCard key={review.username} {...review} />
        ))}
      </Marquee>
      {/* Gradient overlays for vertical marquee */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}

