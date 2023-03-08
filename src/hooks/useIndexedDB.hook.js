import { useState, useEffect } from "react";

const useIndexedDB = (key, initialValue = null) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    async function getValue() {
      const db = await openDB("podcaster", 1);
      const tx = db.transaction("store", "readonly");
      const store = tx.objectStore("store");
      const result = await store.get(key);
      setValue(result ?? initialValue);
    }

    getValue();
  }, [key, initialValue]);

  async function setValueInDB(updatedValue) {
    const db = await openDB("podcaster", 1);
    const tx = db.transaction("store", "readwrite");
    const store = tx.objectStore("store");
    await store.put(updatedValue, key);
    setValue(updatedValue);
  }

  return [value, setValueInDB];
};

async function openDB(name, version) {
  const request = window.indexedDB.open(name, version);

  return new Promise((resolve, reject) => {
    request.onerror = (event) => {
      reject(event.target.error);
    };
    request.onsuccess = (event) => {
      resolve(event.target.result);
    };
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      db.createObjectStore("store");
    };
  });
}

export default useIndexedDB;
