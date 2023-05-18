import { useMemo } from "react";
import { useLocation } from "react-router-dom";

function useQueryParams() {
  const { search } = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(search), [search]);
  return queryParams;
}

export { useQueryParams };
