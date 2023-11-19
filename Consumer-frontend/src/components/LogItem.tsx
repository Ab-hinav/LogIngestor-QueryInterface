
const LogItem = ({ log }) => {
    console.log(log);
    return (
      <li className="text-white flex gap-3 mb-2 flex-col md:flex-row border p-2 rounded" >
        <p><span className="text-purple-400" >Level:</span> {log.level}</p>
        <p><span className="text-purple-400" >Message:</span> {log.message}</p>
        <p><span className="text-purple-400" >ResourceId:</span> {log.resourceId}</p>
        <p><span className="text-purple-400" >Timestamp:</span>{log.timestamp}</p>
        <p><span className="text-purple-400" >CommitId:</span> {log.commit}</p>
        <p><span className="text-purple-400" >Trace:</span> {log.traceId}</p>
        <p><span className="text-purple-400" >SpanId:</span> {log.spanId}</p>
        <p><span className="text-purple-400" >ParentResourceId:</span> {log.parentResourceId}</p>
      </li>
    );
  };
  
  export default LogItem;