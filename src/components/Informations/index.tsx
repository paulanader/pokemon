import { FaWeight } from 'react-icons/fa';
import { BiRuler, BiMaleSign, BiFemaleSign } from 'react-icons/bi';
import { useMemo } from 'react';
import {
    divisionBy10,
    femaleGenderPercent,
    getFlavorText,
    maleGenderPercent,
    slugToCapitalized,
} from '../../utils/data';
import { BlockStyles, Container } from './styles';
import { ProgressBar } from '../ProgressBar';
import { PokemonType } from '../../@types/PokemonType';
import { PokemonSpecieType } from '../../@types/PokemonSpecieType';

interface IInformationsProps {
    pokemon: PokemonType;
    pokemonSpecie: PokemonSpecieType;
}

const Informations: React.FC<IInformationsProps> = ({
    pokemon,
    pokemonSpecie,
}) => {
    const totalStats = useMemo(
        () => pokemon.stats.reduce((acc, cur) => acc + cur.base_stat, 0),
        [pokemon.stats]
    );

    return (
        <Container className="mt-3">
            <h2 className={`mb-3 fw-bold color-${pokemonSpecie.color.name}`}>
                Description
            </h2>
            <p className="mb-4">
                {getFlavorText(pokemonSpecie?.flavor_text_entries, 'ruby')}
            </p>
            <BlockStyles className="row row-cols-3 mb-4">
                <div className="col d-flex flex-column border-end text-center">
                    <div className="d-flex align-items-center justify-content-center">
                        <FaWeight className="me-3" />
                        {`${divisionBy10(pokemon.weight)} Kg`}
                    </div>
                    <div className="fw-lighter mt-auto">Weight</div>
                </div>
                <div className="col d-flex flex-column border-end text-center">
                    <div className="d-flex align-items-center justify-content-center">
                        <BiRuler className="me-3" size={19} />
                        {`${divisionBy10(pokemon.height)} m`}
                    </div>
                    <div className="fw-lighter mt-auto">Height</div>
                </div>
                <div className="col d-flex flex-column text-center">
                    <div className="d-flex align-items-center justify-content-center">
                        <p>{slugToCapitalized(pokemon.moves[0].move.name)}</p>
                    </div>
                    <div className="fw-lighter mt-auto">Main Power</div>
                </div>
            </BlockStyles>
            <div>
                <h3 className="mb-3">Features</h3>
                <div>
                    <div className="align-items-center mb-1">
                        <div className="row row-cols-2">
                            <div className="col-4">
                                <span className="me-5">Gender</span>
                            </div>
                            <div className="col-8">
                                <BiMaleSign className="colorPurple" />
                                <span className="me-3">
                                    {maleGenderPercent(
                                        pokemonSpecie.gender_rate
                                    )}
                                </span>
                                <BiFemaleSign className="colorPink" />
                                <span>
                                    {femaleGenderPercent(
                                        pokemonSpecie.gender_rate
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        {pokemon.stats.map(stat => {
                            return (
                                <div key={stat.stat.name} className="mb-1">
                                    <div className="row row-cols-3 align-items-center justify-content-start">
                                        <div className="col-3">
                                            <span>
                                                {slugToCapitalized(
                                                    stat.stat.name
                                                )}
                                            </span>
                                        </div>
                                        <div className="col-1 align-items-center justify-content-around">
                                            <span>{stat.base_stat}</span>
                                        </div>
                                        <div className="col-8">
                                            <ProgressBar
                                                value={stat.base_stat}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="mb-1">
                            <div className="row row-cols-3 align-items-center justify-content-start">
                                <div className="col-3">
                                    <span>Total</span>
                                </div>
                                <div className="col-1 align-items-center justify-content-around text-start">
                                    <span>{totalStats}</span>
                                </div>
                                <div className="col-8">
                                    <ProgressBar
                                        value={
                                            totalStats / pokemon.stats.length
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div />
        </Container>
    );
};

export default Informations;
