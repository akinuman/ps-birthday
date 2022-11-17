import { renderHook } from "@testing-library/react";
import useSortedPartners from "../hooks/useSortedPartners";
import { PARTNERS } from "../constants/partners";

describe("useSortedPartners Hook", () => {
  it("length of data", () => {
    const { result } = renderHook(() => useSortedPartners(PARTNERS));
    expect(result.current.length).toEqual(32);
  });
});
