import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Pokemon from '../pages/Pokemon';

export const PagesRoutes: React.FC = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:name" element={<Pokemon />} />
        </Routes>
    </BrowserRouter>
);
