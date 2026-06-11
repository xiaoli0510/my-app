"use client"

import { useParams } from "next/navigation"

export default function Shop() {
    const params = useParams();
    return (
        <div>
            <div>params:{params.id}</div>
            <div>shop</div>
        </div>
    )
}