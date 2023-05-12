import dayjs from "dayjs";
import { useEffect, useState } from "react";

function DayPlanner() {
  
  const [date] = useState( dayjs());

  

  return (
    <>
      
      {date.toISOString()}

      <p></p>
      <p>Test</p>
    </>
    
  );
}

export default DayPlanner;
