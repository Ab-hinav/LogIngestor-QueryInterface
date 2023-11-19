import { Button } from './ui/button';
import { Input } from './ui/input';
import { useRef, useState } from 'react';

const LogFilter = ({ applyFilters }) => {
   
    let levelRef = useRef();
    let messageRef = useRef();
    let resourceIdRef = useRef();
    let startDateRef = useRef();
    let endDateRef = useRef();
    let traceIdRef = useRef();
    let spanIdRef = useRef();
    let commitId = useRef();
    let parentResourceId = useRef();



    const clearFilterLevel = (ref) => {
        // console.log(filters);
        console.log(ref.current.value);
        ref.current.value = '';
        // handleSubmit();
       
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        applyFilters({
            level: levelRef.current.value,
            message: messageRef.current.value,
            resourceId: resourceIdRef.current.value,
            startDate: startDateRef.current.value,
            endDate: endDateRef.current.value,
            traceId: traceIdRef.current.value,
            spanId: spanIdRef.current.value,
            commitId: commitId.current.value,
            parentResourceId: parentResourceId.current.value
        });

    };

    return (
        <form className='text-white my-4 py-2 grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-4' onSubmit={(e) =>{handleSubmit(e);}}>
            <label className='  flex flex-col m-4 space-y-2 scroll-m-20 text-2xl font-semibold tracking-tight' >
                Level
                <Input ref={levelRef} type="text" className='text-black' name="level"  />
                <Button onClick={() => clearFilterLevel(levelRef)} onSubmit={(e) => e.preventDefault()} className='w-1/2' >Clear</Button>
            </label>
            <label className='flex flex-col space-y-2  m-4 scroll-m-20 text-2xl font-semibold tracking-tight' >
                Message
                <Input ref={messageRef} type="text" className='text-black' name="message"  />
                <Button onClick={()=> clearFilterLevel(messageRef)} className='w-1/2' >Clear</Button>
            </label>
            <label className='flex flex-col space-y-2  m-4 scroll-m-20 text-2xl font-semibold tracking-tight' >
                Resource ID
                <Input type="text" ref={resourceIdRef} className='text-black' name="resourceId"  />
                <Button onClick={() => clearFilterLevel(resourceIdRef)} className='w-1/2' >Clear</Button>
            </label>
            <label className='flex flex-col space-y-2  m-4 scroll-m-20 text-2xl font-semibold tracking-tight' >
                Start Date
                <Input type="datetime-local" ref={startDateRef} className='text-black' name="startDate"  />
                <Button onClick={() => clearFilterLevel(startDateRef)} className='w-1/2' >Clear</Button>
            </label>
            <label className='flex flex-col  space-y-2 m-4 scroll-m-20 text-2xl font-semibold tracking-tight' >
                End Date
                <Input type="datetime-local" ref={endDateRef}  className='text-black' name="endDate"  />
                <Button onClick={() => clearFilterLevel(endDateRef)} className='w-1/2' >Clear</Button>
            </label>
            <label className='flex flex-col space-y-2  m-4 scroll-m-20 text-2xl font-semibold tracking-tight' >
                Trace ID
                <Input type="text" ref={traceIdRef} className='text-black' name="resourceId"  />
                <Button onClick={() => clearFilterLevel(traceIdRef)} className='w-1/2' >Clear</Button>
            </label>
            <label className='flex flex-col space-y-2  m-4 scroll-m-20 text-2xl font-semibold tracking-tight' >
                Span ID
                <Input type="text" ref={spanIdRef} className='text-black' name="resourceId"  />
                <Button onClick={() => clearFilterLevel(spanIdRef)} className='w-1/2' >Clear</Button>
            </label>
            <label className='flex flex-col space-y-2  m-4 scroll-m-20 text-2xl font-semibold tracking-tight' >
                Commit ID
                <Input type="text" ref={commitId} className='text-black' name="resourceId"  />
                <Button onClick={() => clearFilterLevel(commitId)} className='w-1/2' >Clear</Button>
            </label>
            <label className='flex flex-col space-y-2  m-4 scroll-m-20 text-2xl font-semibold tracking-tight' >
                ParentResource ID
                <Input type="text" ref={parentResourceId} className='text-black' name="resourceId"  />
                <Button onClick={() => clearFilterLevel(parentResourceId)} className='w-1/2' >Clear</Button>
            </label>
            <div className='col-span-2  md:col-span-3 m-4 flex items-center justify-center'>
                <Button className='p-6' type="submit">Search Logs  <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></Button>
            </div>
        </form>
    );
};

export default LogFilter;
