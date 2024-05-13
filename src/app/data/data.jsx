export const languageData = () => [
    { label: 'Español', code: 'es' },
    { label: 'Ingles', code: 'en' }
];

class LanguageType {
    constructor(label, code) {
        this.label = label;
        this.code = code;
    }
}
