import { useCallback, useEffect, useState } from "react";
import { getCollection } from "../scripts/firestore";

export default function useFetch(path: string) {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  const fetchData = useCallback(
    async (path) => {
     
      setLoading("loading...");
      try {
        const fetchData = await getCollection(path);
        
        setData(fetchData);
        
        setLoading(false);
      } catch {
    
        setError("An error occurred.");
      }
    },
    []
  );
  useEffect(() => {
    fetchData(path);
    console.log("useFetch");
  }, [fetchData,path]);
  return { data, loading, error };
}
