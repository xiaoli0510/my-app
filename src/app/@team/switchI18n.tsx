'use client'

import { usePathname, useRouter } from "next/navigation"
import { ReactEventHandler } from "react"

type Props  = {
    lang: string
}

export default function SwitchI18n({lang }: Props){
    const optionArr = [
        'zh','en','ja','ko'
    ]

    const pathname = usePathname();
    const router = useRouter();
    const handleChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = event.target.value;
        console.log(event.target.value);
        console.log('pathname', pathname);
        //服务器组件不能给客户端组件传递参数，所以这里使用的是router来实现

        //替换
        const newPath = pathname.replace(`/${lang}`,`/${newLang}`);
        router.push(newPath);

    }
    return (
        <div>
            <select value={lang} onChange={handleChange}>
                {
                    optionArr.map(item => (
                        <option key={item} value={item}>{item}</option>
                    ))
                }
            </select>
        </div>
    )
}