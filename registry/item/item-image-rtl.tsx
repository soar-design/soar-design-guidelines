import Image from "next/image";

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@soar-design/soar-react-components";

const music = [
  {
    title: "أضواء المدينة في منتصف الليل",
    artist: "أحلام النيون",
    album: "ليالي كهربائية",
    duration: "3:45",
  },
  {
    title: "محادثات مقهى",
    artist: "مشروب الصباح",
    album: "قصص حضرية",
    duration: "4:05",
  },
  {
    title: "المطر الرقمي",
    artist: "سيمفونية السيبرانية",
    album: "إيقاعات ثنائية",
    duration: "3:30",
  },
];

export function ItemImageDocsRTL() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6" dir="rtl">
      <ItemGroup className="gap-4">
        {music.map((song) => (
          <Item key={song.title} variant="outline" asChild role="listitem">
            <a href="#">
              <ItemMedia variant="image">
                <Image
                  src={`https://avatar.vercel.sh/${song.title}`}
                  alt={song.title}
                  width={32}
                  height={32}
                  className="object-cover grayscale"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="line-clamp-1">
                  {song.title} -{" "}
                  <span className="text-muted-foreground">{song.album}</span>
                </ItemTitle>
                <ItemDescription>{song.artist}</ItemDescription>
              </ItemContent>
              <ItemContent className="flex-none text-center">
                <ItemDescription>{song.duration}</ItemDescription>
              </ItemContent>
            </a>
          </Item>
        ))}
      </ItemGroup>
    </div>
  );
}
