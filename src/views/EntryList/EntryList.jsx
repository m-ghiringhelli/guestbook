import React, { useEffect, useState } from 'react'
import { getEntries } from '../../services/entries'

export default function EntryList() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await getEntries();
      console.log(data);
      setEntries(data);
    }
    getData();
  }, [])

  return (
    <>
      {entries.map((entry) => (
        <div key={entry.id}>
          <p>{entry.content}</p>
          <p>{entry.created_at}</p>
        </div>
      ))}
    </>
  )
}
