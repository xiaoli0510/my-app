import SwitchI18n from "@/app/@team/switchI18n";
import { getDictionary } from "@/dictionaries";

export default async function LangHomePage({params }:{params :Promise<{lang:string}>}) {
    const {lang} = await params;
    console.log('lang',lang);

    const dir = await getDictionary(lang);
    console.log('44444444',dir);

    return (
        <div>
            <SwitchI18n lang={lang}/>
            {dir.title}
           
        </div>
    )

}