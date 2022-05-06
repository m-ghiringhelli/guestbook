import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { addEntry, getEntries } from '../../services/entries'

export default function EntryList() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');
  const location = useLocation();
  const auth = useAuth();
  
  useEffect(() => {
    const getData = async () => {
      const { data } = await getEntries();
      console.log(data);
      setEntries(data);
    }
    getData();
  }, [])

  const handleSave = async (entry) => {
    try {
      await addEntry(entry);
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <textarea onChange={(e) => setNewEntry(e.target.value)} />
      <button onClick={() => handleSave(newEntry)}>Add entry</button>
      {entries.map((entry) => (
        <div key={entry.id}>
          <p>{entry.content}</p>
          <p>{entry.created_at}</p>
        </div>
      ))}
    </>
  )
}
