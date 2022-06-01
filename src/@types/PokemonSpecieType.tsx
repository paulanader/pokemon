import { FlavorTextEntries } from './FlavorTextEntries';

/* eslint-disable camelcase */
export type PokemonSpecieType = {
    name: string;
    gender_rate: number;
    flavor_text_entries: FlavorTextEntries[];
    color: {
        name: string;
        url: string;
    };
};
