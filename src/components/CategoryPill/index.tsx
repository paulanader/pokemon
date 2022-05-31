import { CategoryType } from '../../@type/CategoryType';
import { slugToCapitalized } from '../../utils/data';
import { OverFlow, StylesPill } from './styles';

interface ICategoriesProps {
    categories?: CategoryType[];
    color: string;
}

export const CategoriesPill: React.FC<ICategoriesProps> = ({
    categories,
    color,
}) => {
    return (
        <OverFlow className="d-flex m-0 mb-3 list-unstyled align-items-start">
            {Array.isArray(categories) &&
                categories.length > 0 &&
                categories.map(category => (
                    <li key={category.slot} className="text-white">
                        <StylesPill className={`pill-${color}`}>
                            {slugToCapitalized(category.type.name)}
                        </StylesPill>
                    </li>
                ))}
        </OverFlow>
    );
};
