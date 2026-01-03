'use client';

import { useState } from 'react';
import { Card, CardContent } from '@soar-design/soar-react-components';
import { Sortable, SortableItem, SortableItemHandle } from '@soar-design/soar-react-components';
import { GripVertical } from 'lucide-react';
import { toast } from 'sonner';

interface OptionValue {
  id: string;
  value: string;
}

interface OptionGroup {
  id: string;
  name: string;
  values: OptionValue[];
}

const defaultOptionGroups: OptionGroup[] = [
  {
    id: '1',
    name: 'الألوان',
    values: [
      { id: '1-1', value: 'أبيض' },
      { id: '1-2', value: 'أسود' },
      { id: '1-3', value: 'رمادي' },
      { id: '1-4', value: 'أخضر' },
    ],
  },
  {
    id: '2',
    name: 'المقاسات',
    values: [
      { id: '2-1', value: 'صغير' },
      { id: '2-2', value: 'متوسط' },
      { id: '2-3', value: 'كبير' },
    ],
  },
  {
    id: '3',
    name: 'المواد',
    values: [
      { id: '3-1', value: 'قطن' },
      { id: '3-2', value: 'بوليستر' },
      { id: '3-3', value: 'صوف' },
    ],
  },
];

export default function SortableNested() {
  const [optionGroups, setOptionGroups] = useState<OptionGroup[]>(defaultOptionGroups);

  const handleParentReorder = (newGroups: OptionGroup[]) => {
    console.log('🔴 PARENT REORDERED:', newGroups);
    setOptionGroups(newGroups);

    toast.success('تم إعادة ترتيب مجموعات الخيارات بنجاح!', {
      description: `${newGroups.map((group, index) => `${index + 1}. ${group.name}`).join('، ')}`,
      duration: 4000,
    });
  };

  const getParentValue = (group: OptionGroup) => group.id;
  const getChildValue = (value: OptionValue) => value.id;

  const handleChildReorder = (groupId: string, newValues: OptionValue[]) => {
    console.log('🔴 CHILD REORDERED:', groupId, newValues);
    setOptionGroups((prev) => prev.map((group) => (group.id === groupId ? { ...group, values: newValues } : group)));

    toast.success('تم إعادة ترتيب القيم بنجاح!', {
      description: `${newValues.map((value, index) => `${index + 1}. ${value.value}`).join('، ')}`,
      duration: 4000,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-6" dir="rtl">
      <Sortable
        value={optionGroups}
        onValueChange={handleParentReorder}
        getItemValue={getParentValue}
        strategy="vertical"
        className="space-y-4"
      >
        {optionGroups.map((group) => (
          <SortableItem key={group.id} value={group.id}>
            <Card>
              <CardContent>
                {/* Group Header */}
                <div className="flex items-center gap-2 mb-4">
                  <SortableItemHandle className="text-muted-foreground hover:text-foreground cursor-grab">
                    <GripVertical className="h-4 w-4" />
                  </SortableItemHandle>
                  <h3 className="font-semibold text-base">{group.name}</h3>
                </div>

                {/* Option Values - Child Level */}
                <div className="pe-2.5">
                  <Sortable
                    value={group.values}
                    onValueChange={(newValues) => handleChildReorder(group.id, newValues)}
                    getItemValue={getChildValue}
                    strategy="vertical"
                    className="space-y-2"
                  >
                    {group.values.map((value) => (
                      <SortableItem key={value.id} value={value.id}>
                        <div className="flex items-center gap-2 p-2 border border-border rounded-md">
                          <SortableItemHandle className="text-muted-foreground hover:text-foreground cursor-grab">
                            <GripVertical className="h-4 w-4" />
                          </SortableItemHandle>
                          <span className="flex-1 text-sm">{value.value}</span>
                        </div>
                      </SortableItem>
                    ))}
                  </Sortable>
                </div>
              </CardContent>
            </Card>
          </SortableItem>
        ))}
      </Sortable>
    </div>
  );
}

