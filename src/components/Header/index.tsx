import { BsEmojiSmileFill } from 'react-icons/bs';
import Avatar from '../Avatar';
import { AvatarContainer, DarkHeader } from './styles';

const Header: React.FC = () => {
    return (
        <DarkHeader>
            <div className="container">
                <div className="d-flex text-white align-items-center justify-content-between">
                    <div className="py-3">
                        <h1 className="m-0 fs-5">Olá, Ash Ketchum</h1>
                        <div className="d-flex align-items-center">
                            <span className="me-1 text-center fs-6">
                                Bem-vindo!
                            </span>
                            <BsEmojiSmileFill className="text-warning text-center" />
                        </div>
                    </div>
                    <AvatarContainer className="d-flex align-self-stretch align-items-center justify-content-center">
                        <Avatar image="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                    </AvatarContainer>
                </div>
            </div>
        </DarkHeader>
    );
};

export default Header;
