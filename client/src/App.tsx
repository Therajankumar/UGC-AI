import Navbar from './components/Navbar';
import Home from './pages/Home';
import SoftBackdrop from './components/SoftBackdrop';
import Footer from './components/Footer';
import LenisScroll from './components/lenis';
import { Route, Routes } from 'react-router-dom';
import Generator from './pages/Generator';
import Result from './pages/Result';
import Mygenerations from './pages/Mygenerations';
import Plans from './pages/Plans';
import Loading from './pages/Loading';
import Community from './pages/community';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
	return (
		<>
			<SoftBackdrop />
			<LenisScroll />
			<Navbar />
			<Routes> 
				<Route path='/' element={<Home />}/>
				<Route path='/generate' element={<ProtectedRoute><Generator /></ProtectedRoute>}/>
				<Route path='/result/:projectId' element={<ProtectedRoute><Result /></ProtectedRoute>}/>
				<Route path='/my-generations' element={<ProtectedRoute><Mygenerations /></ProtectedRoute>}/>
				<Route path='/plans' element={<Plans />}/>
				<Route path='/loading' element={<Loading/>}/>
				<Route path='/community' element={<Community />} />
				<Route path='*' element={<NotFound />} />


			</Routes>
			
			<Footer />
		</>
	);
}
export default App;