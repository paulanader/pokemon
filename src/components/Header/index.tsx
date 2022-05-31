import { BsEmojiSmileFill } from 'react-icons/bs';
import Avatar from '../Avatar';
import { DarkHeader } from './styles';

const Header: React.FC = () => {
    return (
        <DarkHeader>
            <div className="container py-3">
                <div className=" row row-cols-2 text-white align-items-center justify-content-between">
                    <div className="col">
                        <h1>Olá, Ash Ketchum</h1>
                        <div className="align-items-center">
                            <span className="me-1 text-center">Bem-vindo!</span>
                            <BsEmojiSmileFill className="text-warning text-center" />
                        </div>
                    </div>
                    <div className="col text-end">
                        <Avatar image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                    </div>
                </div>
            </div>
        </DarkHeader>
    );
};

export default Header;
