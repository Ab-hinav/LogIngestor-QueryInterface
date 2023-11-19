
import LogItem from './LogItem';

const LogList = ({ logs }) => {
  return (
    <ul className='border p-2 rounded border-primary' >
      {logs.map((log, index) => (
        <LogItem key={index} log={log} />
      ))}
    </ul>
  );
};

export default LogList;
