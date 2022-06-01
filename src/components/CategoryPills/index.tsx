import { CategoryType } from '../../@types/CategoryType';
import { Type } from '../../@types/Type';
import { slugToCapitalized } from '../../utils/data';
import { OverFlow, StylesPill } from './styles';

interface ICategoriesProps {
    categories?: CategoryType[] | Type[];
    color: string;
}

export const CategoryPills: React.FC<ICategoriesProps> = ({
    categories,
    color,
}) => {
    return (
        <OverFlow className="d-flex flex-wrap m-0 mb-3 list-unstyled align-items-start">
            {Array.isArray(categories) &&
                categories.length > 0 &&
                categories.map(category => (
                    <li key={category.type.name} className="text-white mb-1">
                        <StylesPill className={`pill-${color}`}>
                            {slugToCapitalized(category.type.name)}
                        </StylesPill>
                    </li>
                ))}
        </OverFlow>
    );
};
