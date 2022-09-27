
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Colors from './Colors/Colors.jsx';
import Orange from './Orange/Orange.jsx';
import Blue from './Blue/Blue.jsx';
import Layout from './Page/Layout.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />} >
          <Route index element={<Colors />} />
          <Route path="orange" element={<Orange />} />
          <Route path="blue" element={<Blue />} />
        </Route>


        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
