import {useState, useEffect} from 'react';
import StatusService from "../statusService";
const TEN_SEC = 10 * 1000;

export default function useServerStatus(){
    const [status, setStatus] = useState(false);
    
    // Get Status
    StatusService.status().then((res => {
        setStatus(res.data.status);
    }));

    useEffect(() => {
        const interval = setInterval(function (){
            // Get Status
            StatusService.status().then((res => {
                setStatus(res.data.status);
            }));
        }, TEN_SEC);

        return () => {
            clearInterval(interval);
        }
    },[]);

    return status;
}