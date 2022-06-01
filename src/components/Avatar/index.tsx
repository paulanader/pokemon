import { StylesImage } from './styles';

interface IActorsProps {
    image: string;
}
const Avatar: React.FC<IActorsProps> = ({ image }) => {
    return (
        <div className="d-flex justify-content-center">
            <StylesImage
                className="border border-2 border-white"
                style={{
                    backgroundImage: `url(${image})`,
                }}
            />
        </div>
    );
};

export default Avatar;
