import { useState } from 'react'
import './App.css'
import { ContactList } from './components/contact-list'
import { SelectedContact } from "./components/selected-contact";

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ? (
      <div>Selected Contact View
      <SelectedContact 
      selectedContactId={selectedContactId} 
      setSelectedContactId={setSelectedContactId}
      />
      </div>
      ) : (
        <ContactList
          setSelectedContactId={setSelectedContactId}
        />
      )}
    </>
  );
}

export default App
