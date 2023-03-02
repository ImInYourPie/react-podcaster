import { renderHook, act } from "@testing-library/react-hooks";
import useLocalStorage from "../useLocalStorage.hook";

describe("useLocalStorage", () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  it("should return default value when key is not present in localStorage", () => {
    const { result } = renderHook(() => useLocalStorage("test-key", "initial"));
    expect(result.current[0]).toBe("initial");
  });

  it("should return value from localStorage if key is present", () => {
    window.localStorage.setItem("test-key", JSON.stringify("stored"));
    const { result } = renderHook(() => useLocalStorage("test-key", "initial"));
    expect(result.current[0]).toBe("stored");
  });

  it("should update localStorage with new value", () => {
    const { result } = renderHook(() => useLocalStorage("test-key", "initial"));
    act(() => {
      result.current[1]("new value");
    });
    expect(window.localStorage.getItem("test-key")).toBe(
      JSON.stringify("new value")
    );
  });

  it("should update the state with new value", () => {
    const { result } = renderHook(() => useLocalStorage("test-key", "initial"));
    act(() => {
      result.current[1]("new value");
    });
    expect(result.current[0]).toBe("new value");
  });
});
