'use client';

import { useRef } from 'react';
import { Button } from '@soar-design/soar-react-components';
import { ScrollArea } from '@soar-design/soar-react-components';
import { Scrollspy } from '@soar-design/soar-react-components';

export default function Demo() {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const nav = [
    {
      id: 'section-1',
      label: 'القسم 1',
    },
    {
      id: 'section-2',
      label: 'القسم 2',
    },
    {
      id: 'section-3',
      label: 'القسم 3',
    },
    {
      id: 'section-4',
      label: 'القسم 4',
    },
    {
      id: 'section-5',
      label: 'القسم 5',
    },
  ];

  return (
    <div className="flex grow gap-5 h-[500px]" dir="rtl">
      <div className="flex flex-col gap-2 w-[150px]">
        <Scrollspy offset={50} targetRef={parentRef} className="flex flex-col gap-2.5">
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
      <div className="grow">
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

