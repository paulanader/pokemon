/* eslint-disable camelcase */
export const getUppercase = (value: string): string =>
    value.replace(value[0], value[0].toUpperCase());

export const getNumber = (value: number): string => {
    let myArray = [];

    if (value < 99) {
        for (let i = 0; i < 3 - value.toString().length; i += 1) {
            myArray.push(0);
        }
        myArray[2] = value;
    } else {
        myArray = [value];
    }
    const myNumber = myArray.toString();
    return myNumber.replaceAll(',', '');
};

export const divisionBy10 = (value: number): number => {
    return value / 10;
};

export const femaleGenderPercent = (value: number): number => {
    return (value / 8) * 100;
};

export const maleGenderPercent = (value: number): number => {
    return 100 - (value / 8) * 100;
};

export const removeHyphen = (value: string): string => {
    return value.replace('-', '');
};

type flavorTextEntry = {
    flavor_text: string;
    version: {
        name: string;
    };
};

export const getFlavorText = (
    texts: flavorTextEntry[],
    version: string
): string => {
    const versionText = texts.find(item => item?.version?.name === version);

    return versionText ? versionText.flavor_text : texts[0].flavor_text;
};

export const slugToCapitalized = (slug: string): string => {
    return slug
        .split('-')
        .map(word => getUppercase(word))
        .join(' ');
};

export const convertUrlToId = (url: string): string => {
    const baseUrl = process.env.REACT_APP_API_BASE_URL;

    const id = url.replace(`${baseUrl}/pokemon/`, '');
    return id.substring(0, id.length - 1);
};
