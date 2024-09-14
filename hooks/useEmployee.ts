import { useParams } from "next/navigation"
import { useMemo } from "react";


const useEmployee = ()=> {
    const params = useParams();

    const employeeId = useMemo(()=>{
        if(!params?.employeeId){
            return ''
        }

        return params?.employeeId as string;
    },[params?.employeeId]);


    return useMemo(()=>({
        employeeId
    }),[employeeId])
}


export default useEmployee