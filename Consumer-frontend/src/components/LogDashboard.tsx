import  { useState } from 'react';
import LogList from './LogList';
import LogFilter from './LogFilter';
import axios from 'axios';



const LogDashboard = () => {
  const [logs, setLogs] = useState([]);
  const [filters, setFilters] = useState({});

  async function searchLogs(cfilters):Promise<object>{
    try {
    const data = await axios.get('http://localhost:8081/getLogs',{
        params:{...cfilters}
    });
    const logData = data.data;
    setLogs(JSON.parse(logData.data))
    }catch(error){
        throw new Error(error);
    }
    
  }



  const applyFilters = async (filters: { level: any; message: any; resourceId: any; startDate: number; endDate: number; traceId:string; spanId:string; commitId:string; parentResourceId:string }) => {
    
    console.log(filters)
    setFilters((prevFilters) => {
        const curr = {...prevFilters, ...filters};
        searchLogs(curr);
        return curr;
    });

  };

  return (
    <div>
      <LogFilter applyFilters={applyFilters} />
      <LogList logs={logs} />
    </div>
  );
};

export default LogDashboard;
