import { CollectionConfig } from 'payload/types';

const Equipment: CollectionConfig = {
  slug: 'equipment',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Название техники',
      type: 'text',
      required: true,
    },
    {
      name: 'inventoryNumber',
      label: 'Инвентарный номер',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      label: 'Тип техники',
      type: 'select',
      required: true,
      options: [
        { label: 'Компьютер', value: 'computer' },
        { label: 'Ноутбук', value: 'laptop' },
        { label: 'Принтер', value: 'printer' },
        { label: 'Другое', value: 'other' },
      ],
    },
    {
      name: 'location',
      label: 'Местоположение',
      type: 'text',
    },
    {
      name: 'responsible',
      label: 'Ответственный сотрудник',
      type: 'text',
    },
    {
      name: 'note',
      label: 'Примечание',
      type: 'textarea',
    },
  ],
};

export default Equipment;
