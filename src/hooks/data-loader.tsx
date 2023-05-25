import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getTags } from "../features/tags-slice";

function DataLoader({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();
  const tagsState = useAppSelector((state) => state.tags);
  useEffect(() => {
    if (!tagsState.tags.length) {
      dispatch(getTags());
    }
  }, [dispatch, tagsState.tags]);
  return <>{children}</>;
}

export default DataLoader;
