import React, { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/useAuth';
import { getEntries } from '../../services/entries'

export default function EntryList() {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState('');
  const auth = useAuth;

  useEffect(() => {
    const getData = async () => {
      const { data } = await getEntries();
      console.log(data);
      setEntries(data);
    }
    getData();
  }, [entries])

  return (
    <>
      <textarea onChange={(e) => setNewEntry(e.target.value)} />
      <button />
      {entries.map((entry) => (
        <div key={entry.id}>
          <p>{entry.content}</p>
          <p>{entry.created_at}</p>
        </div>
      ))}
    </>
  )
}
