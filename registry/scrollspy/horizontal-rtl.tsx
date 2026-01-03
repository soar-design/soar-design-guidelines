'use client';

import { useRef } from 'react';
import { Button } from '@soar-design/soar-react-components';
import { ScrollArea } from '@soar-design/soar-react-components';
import { Scrollspy } from '@soar-design/soar-react-components';

export default function Demo() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const nav = [
    {
      id: 'section-6',
      label: 'القسم 1',
    },
    {
      id: 'section-7',
      label: 'القسم 2',
    },
    {
      id: 'section-8',
      label: 'القسم 3',
    },
    {
      id: 'section-9',
      label: 'القسم 4',
    },
    {
      id: 'section-10',
      label: 'القسم 5',
    },
  ];

  return (
    <div className="space-y-5" dir="rtl">
      <div className="w-full flex gap-2">
        <Scrollspy offset={50} targetRef={parentRef} className="flex gap-2.5">
          {nav.map((item) => (
            <Button
              key={item.id}
              variant="outline"
              data-scrollspy-anchor={item.id}
              className={'data-[active=true]:bg-accent data-[active=true]:text-primary'}
            >
              {item.label}
            </Button>
          ))}
        </Scrollspy>
      </div>
      <div className="w-full h-[500px]">
        <ScrollArea className="h-full ps-5 -ms-5" viewportRef={parentRef}>
          <div className="space-y-8">
            {nav.map((item) => (
              <div key={item.id} id={item.id} className="space-y-2.5">
                <h3 className="text-foreground text-base">{item.label}</h3>
                <div className="bg-muted rounded-lg h-[350px]"></div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}

