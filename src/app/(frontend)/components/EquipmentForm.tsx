'use client';

import { useState } from 'react';

export default function EquipmentForm() {
  const [form, setForm] = useState({
    name: '',
    inventoryNumber: '',
    type: '',
    location: '',
    responsible: '',
    note: '',
  });

  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch('http://localhost:3000/api/equipment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'Authorization': 'Bearer YOUR_API_KEY', // если есть токен
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus('✅ Успешно отправлено!');
      setForm({
        name: '',
        inventoryNumber: '',
        type: '',
        location: '',
        responsible: '',
        note: '',
      });
    } else {
      setStatus('❌ Ошибка при отправке.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto p-4 border rounded-xl shadow">
      <h2 className="text-xl font-bold">Добавить технику</h2>

      <input name="name" placeholder="Название" value={form.name} onChange={handleChange} required className="w-full p-2 border rounded" />
      <input name="inventoryNumber" placeholder="Инвентарный номер" value={form.inventoryNumber} onChange={handleChange} required className="w-full p-2 border rounded" />
      
      <select name="type" value={form.type} onChange={handleChange} required className="w-full p-2 border rounded">
        <option value="">Выберите тип</option>
        <option value="computer">Компьютер</option>
        <option value="laptop">Ноутбук</option>
        <option value="printer">Принтер</option>
        <option value="other">Другое</option>
      </select>

      <input name="location" placeholder="Местоположение" value={form.location} onChange={handleChange} className="w-full p-2 border rounded" />
      <input name="responsible" placeholder="Ответственный" value={form.responsible} onChange={handleChange} className="w-full p-2 border rounded" />
      <textarea name="note" placeholder="Примечание" value={form.note} onChange={handleChange} className="w-full p-2 border rounded" />

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Сохранить
      </button>

      {status && <p className="text-sm mt-2">{status}</p>}
    </form>
  );
}
