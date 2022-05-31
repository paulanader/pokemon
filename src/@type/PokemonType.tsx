/* eslint-disable camelcase */
import { CategoryType } from './CategoryType';
import { MovesType } from './MovesType';
import { StatsType } from './StatsType';

export type PokemonType = {
    name: string;
    url: string;
    id: number;
    sprites: {
        other: { 'official-artwork': { front_default: string } };
    };
    types: CategoryType[];
    weight: number;
    height: number;
    moves: MovesType[];
    stats: StatsType[];
};
