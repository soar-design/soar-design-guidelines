'use client';

import { useState } from 'react';
import { Badge } from '@soar-design/soar-react-components';
import { Sortable, SortableItem, SortableItemHandle } from '@soar-design/soar-react-components';
import { FileTextIcon, GripVertical, ImageIcon, MusicIcon, VideoIcon } from 'lucide-react';
import { toast } from 'sonner';

interface SortableItem {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'document' | 'audio' | 'video';
  size: string;
}

const defaultItems: SortableItem[] = [
  {
    id: '1',
    title: 'عرض المنتج',
    description: 'صورة المنتج الرئيسية',
    type: 'image',
    size: '2.4 ميجابايت',
  },
  {
    id: '2',
    title: 'مواصفات المنتج',
    description: 'مستند التفاصيل التقنية',
    type: 'document',
    size: '1.2 ميجابايت',
  },
  {
    id: '3',
    title: 'فيديو عرض المنتج',
    description: 'كيفية استخدام المنتج',
    type: 'video',
    size: '15.7 ميجابايت',
  },
  {
    id: '4',
    title: 'دليل صوتي للمنتج',
    description: 'تعليمات صوتية',
    type: 'audio',
    size: '8.3 ميجابايت',
  },
  {
    id: '5',
    title: 'مواصفات المنتج',
    description: 'منظر إضافي للمنتج',
    type: 'image',
    size: '3.1 ميجابايت',
  },
];

const getTypeIcon = (type: SortableItem['type']) => {
  switch (type) {
    case 'image':
      return <ImageIcon className="h-4 w-4" />;
    case 'document':
      return <FileTextIcon className="h-4 w-4" />;
    case 'audio':
      return <MusicIcon className="h-4 w-4" />;
    case 'video':
      return <VideoIcon className="h-4 w-4" />;
  }
};

const getTypeColor = (type: SortableItem['type']) => {
  switch (type) {
    case 'image':
      return 'primary';
    case 'document':
      return 'success';
    case 'audio':
      return 'destructive';
    case 'video':
      return 'info';
  }
};

const typeLabels: Record<SortableItem['type'], string> = {
  image: 'صورة',
  document: 'مستند',
  audio: 'صوت',
  video: 'فيديو',
};

export default function SortableDefault() {
  const [items, setItems] = useState<SortableItem[]>(defaultItems);

  const handleValueChange = (newItems: SortableItem[]) => {
    console.log('🔴 VALUE CHANGED:', newItems);
    setItems(newItems);

    // Show toast with new order
    toast.success('تم إعادة ترتيب العناصر بنجاح!', {
      description: `${newItems.map((item, index) => `${index + 1}. ${item.title}`).join('، ')}`,
      duration: 4000,
    });
  };

  const getItemValue = (item: SortableItem) => item.id;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8" dir="rtl">
      <Sortable
        value={items}
        onValueChange={handleValueChange}
        getItemValue={getItemValue}
        strategy="vertical"
        className="space-y-2"
      >
        {items.map((item) => (
          <SortableItem key={item.id} value={item.id}>
            <div
              className="flex items-center gap-3 p-3 bg-background border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
              onClick={() => console.log('🔴 ITEM CLICKED:', item.id)}
            >
              <SortableItemHandle className="text-muted-foreground hover:text-foreground">
                <GripVertical className="h-4 w-4" />
              </SortableItemHandle>

              <div className="flex items-center gap-2 text-muted-foreground">{getTypeIcon(item.type)}</div>

              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm truncate">{item.title}</h4>
                <p className="text-xs text-muted-foreground truncate">{item.description}</p>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant={getTypeColor(item.type)} appearance="outline">
                  {typeLabels[item.type]}
                </Badge>
                <span className="text-xs text-muted-foreground">{item.size}</span>
              </div>
            </div>
          </SortableItem>
        ))}
      </Sortable>
    </div>
  );
}

