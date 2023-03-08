import { renderHook, act, waitFor } from "@testing-library/react";
import useIndexedDB from "../useIndexedDB.hook";

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

describe("useIndexedDB", () => {
  const key = "test-key";
  const initialValue = "test-value";
  const newValue = "new-value";

  beforeAll(async () => {
    const db = await openDB("podcaster", 1);
    const tx = db.transaction("store", "readwrite");
    const store = tx.objectStore("store");
    await store.put(initialValue, key);
    await tx.complete;
  });

  it("returns the initial value", async () => {
    const { result, rerender } = renderHook(() =>
      useIndexedDB(key, initialValue)
    );

    expect(result.current[0]).toEqual(initialValue);

    rerender();
  });

  it("sets and gets a new value", async () => {
    const { result, rerender } = renderHook(() =>
      useIndexedDB(key, initialValue)
    );

    act(() => {
      result.current[1](newValue);
    });

    rerender();

    const db = await openDB("podcaster", 1);
    const tx = db.transaction("store", "readonly");
    const store = tx.objectStore("store");
    const value = await store.get(key);
    expect(value).toEqual(newValue);
  });
});
