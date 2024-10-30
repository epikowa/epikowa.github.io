export const UIStrings = {
    fr: new Map([
        ['about', 'À propos']
    ]),
    en: new Map([
        ['about', 'about']
    ])
};

export const getLang:(url:string)=> 'en' | 'fr' = (url: string) => {
    const parts = url.split('/');

    let language = 'en';

    parts.forEach((lang) => {
        switch (lang) {
            case 'en':
                language = 'en';
                break;
            case 'fr':
                language = 'fr';
                break;
        }
    })

    switch (language) {
        case 'en':
            return 'en';
        case 'fr':
            return 'fr';
    }

    return 'en';
}

const defaultLanguage = 'en';
export const getLocaleString = (key:string, lang:'en' | 'fr') => {
    return UIStrings[lang].get(key) || UIStrings[defaultLanguage].get(key);
}