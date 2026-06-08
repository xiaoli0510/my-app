"use client"
import { useSearchParams } from "next/navigation"

export default function Me2(){
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const age = searchParams.get('age');
    const ids = searchParams.getAll('id');
    console.log('id',id);
    console.log('age',age);
    console.log('ids',ids);
    console.log('has id', searchParams.has('id'));
    console.log('has c', searchParams.has('c'));
    return <div>me2</div>
}