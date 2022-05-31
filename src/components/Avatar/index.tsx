import { Cover, StylesImage } from './styles';

interface IActorsProps {
    image: string;
}
const Avatar: React.FC<IActorsProps> = ({ image }) => {
    return (
        <Cover className="">
            <StylesImage
                className="me-3 d-inline-flex subway-item border border-2 border-white"
                style={{
                    width: 70,
                    height: 70,
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                }}
            />
        </Cover>
    );
};

export default Avatar;
