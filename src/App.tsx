import React, { useState, useEffect } from "react";
import { ListingInfo } from "./utils/Types";
import LoadingSkeleton from "./components/LoadingSkeleton";
import ErrorComponent from "./components/ErrorComponent";
import List from "./components/List";

const App = () => {
  const [data, setData] = useState<ListingInfo[]>();
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  console.log("data", data);
  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetch("./api/saved-listings")
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="calendar-container">
      {!isLoading && <LoadingSkeleton />}
      {error && !isLoading && <ErrorComponent />}
      {!isLoading && data && <List data={data} />}
    </div>
  );
};

export default App;
