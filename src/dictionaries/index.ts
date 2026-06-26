export type Dictionary = {
     title: string
    description: string
    keywords: string
}
export const locales = ['en', 'zh','ja','ko'];
export const defaultLocale  = 'en';
export function getDictionary(locale:string):Promise<Dictionary>{
    return import(`./${locale}.json`).then(module => module.default)
}