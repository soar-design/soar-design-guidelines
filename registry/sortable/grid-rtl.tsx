'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@soar-design/soar-react-components';
import { Sortable, SortableItem, SortableItemHandle } from '@soar-design/soar-react-components';
import { FileTextIcon, GripVertical, ImageIcon, MusicIcon, StarIcon, VideoIcon } from 'lucide-react';
import { toast } from 'sonner';

interface GridItem {
  id: string;
  title: string;
  description: string;
  type: 'image' | 'document' | 'audio' | 'video' | 'featured';
  size: string;
  priority: 'high' | 'medium' | 'low';
}

const defaultGridItems: GridItem[] = [
  {
    id: '1',
    title: 'صورة البطل',
    description: 'صورة البانر الرئيسية',
    type: 'image',
    size: '2.4 ميجابايت',
    priority: 'high',
  },
  {
    id: '2',
    title: 'مواصفات المنتج',
    description: 'الوثائق التقنية',
    type: 'document',
    size: '1.2 ميجابايت',
    priority: 'medium',
  },
  {
    id: '3',
    title: 'فيديو العرض',
    description: 'عرض المنتج',
    type: 'video',
    size: '15.7 ميجابايت',
    priority: 'high',
  },
  {
    id: '4',
    title: 'دليل صوتي',
    description: 'تعليمات صوتية',
    type: 'audio',
    size: '8.3 ميجابايت',
    priority: 'low',
  },
  {
    id: '5',
    title: 'صورة المعرض 1',
    description: 'منظر المنتج 1',
    type: 'image',
    size: '3.1 ميجابايت',
    priority: 'medium',
  },
  {
    id: '6',
    title: 'صورة المعرض 2',
    description: 'منظر المنتج 2',
    type: 'image',
    size: '2.8 ميجابايت',
    priority: 'medium',
  },
  {
    id: '7',
    title: 'دليل المستخدم',
    description: 'دليل التثبيت',
    type: 'document',
    size: '4.2 ميجابايت',
    priority: 'high',
  },
  {
    id: '8',
    title: 'موسيقى الخلفية',
    description: 'موسيقى محيطة',
    type: 'audio',
    size: '12.1 ميجابايت',
    priority: 'low',
  },
  {
    id: '9',
    title: 'تسليط الضوء على الميزة',
    description: 'ميزات المنتج الرئيسية',
    type: 'featured',
    size: 'غير متاح',
    priority: 'high',
  },
];

const getTypeIcon = (type: GridItem['type']) => {
  switch (type) {
    case 'image':
      return <ImageIcon className="h-4 w-4" />;
    case 'document':
      return <FileTextIcon className="h-4 w-4" />;
    case 'audio':
      return <MusicIcon className="h-4 w-4" />;
    case 'video':
      return <VideoIcon className="h-4 w-4" />;
    case 'featured':
      return <StarIcon className="h-4 w-4" />;
  }
};

const getTypeColor = (type: GridItem['type']) => {
  switch (type) {
    case 'image':
      return 'primary';
    case 'document':
      return 'success';
    case 'audio':
      return 'destructive';
    case 'video':
      return 'info';
    case 'featured':
      return 'warning';
  }
};

const getPriorityColor = (priority: GridItem['priority']) => {
  switch (priority) {
    case 'high':
      return 'text-red-600 bg-red-50 border-red-200';
    case 'medium':
      return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    case 'low':
      return 'text-green-600 bg-green-50 border-green-200';
  }
};

const getItemSize = (type: GridItem['type']) => {
  switch (type) {
    case 'featured':
      return 'col-span-2 row-span-2';
    case 'image':
    case 'video':
      return 'col-span-1 row-span-1';
    case 'document':
    case 'audio':
      return 'col-span-1 row-span-1';
    default:
      return 'col-span-1 row-span-1';
  }
};

const typeLabels: Record<GridItem['type'], string> = {
  image: 'صورة',
  document: 'مستند',
  audio: 'صوت',
  video: 'فيديو',
  featured: 'مميز',
};

export default function SortableGrid() {
  const [items, setItems] = useState<GridItem[]>(defaultGridItems);

  const handleValueChange = (newItems: GridItem[]) => {
    console.log('🔴 GRID VALUE CHANGED:', newItems);
    setItems(newItems);

    // Show toast with new order
    toast.success('تم إعادة ترتيب عناصر الشبكة بنجاح!', {
      description: `الترتيب الجديد: ${newItems.map((item, index) => `${index + 1}. ${item.title}`).join('، ')}`,
      duration: 4000,
    });
  };

  const getItemValue = (item: GridItem) => item.id;

  return (
    <div className="w-full max-w-5xl mx-auto p-4 space-y-6" dir="rtl">
      <Sortable
        value={items}
        onValueChange={handleValueChange}
        getItemValue={getItemValue}
        strategy="grid"
        className="grid grid-cols-3 gap-3 auto-rows-fr"
      >
        {items.map((item) => (
          <SortableItem key={item.id} value={item.id}>
            <div
              className={cn(
                'group relative p-3 bg-background border border-border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer',
                getItemSize(item.type),
                'min-h-[100px] flex flex-col',
              )}
              onClick={() => console.log('🔴 GRID ITEM CLICKED:', item.id)}
            >
              <SortableItemHandle className="absolute top-2.5 start-1.5 text-muted-foreground hover:text-foreground z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <GripVertical className="h-3.5 w-3.5" />
              </SortableItemHandle>

              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm truncate">{item.title}</h4>
                <p className="text-xs text-muted-foreground truncate mt-0.5">{item.description}</p>
              </div>

              <div className="flex items-center justify-between mt-2">
                <Badge variant={getTypeColor(item.type)} appearance="outline" size="sm">
                  {typeLabels[item.type]}
                </Badge>
                {item.type !== 'featured' && <span className="text-xs text-muted-foreground">{item.size}</span>}
              </div>
            </div>
          </SortableItem>
        ))}
      </Sortable>
    </div>
  );
}

