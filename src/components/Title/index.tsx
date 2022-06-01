import { TitleStyle } from './style';

interface ITitleProps {
    title: string;
}

const Title: React.FC<ITitleProps> = ({ title }) => {
    return (
        <TitleStyle className="fw-bold fs-6 mt-4 mb-4 text-wrap">
            {title}
        </TitleStyle>
    );
};

export default Title;
