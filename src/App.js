import React from 'react';
import './App.css';
// import About from './components/About';
// import Contact from './components/Contact';
// import Gallery from './components/Gallery';
// import Modal from './components/Modal';
// import Nav from './components/Nav';
// import PhotoList from './components/PhotoList';
// import ContactForm from './components/Contact';
import PortfolioContainer from "./components/PortfolioContainer";
// import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => <PortfolioContainer />;



// function App() {
//   const [categories] = useState([
//     { name: 'portfolio'},
//     { name: 'resume', 
//       description: 'Front-end Proficiencies'
//     },
//   ]);

//   const [currentCategory, setCurrentCategory] = useState(categories[0]);

//   const [contactSelected, setContactSelected] = useState(false);

//   return (
//     <div>
//       <Nav
//         categories={categories}
//         setCurrentCategory={setCurrentCategory}
//         currentCategory={currentCategory}
//         contactSelected={contactSelected}
//         setContactSelected={setContactSelected}
//       ></Nav>
//       <main>
//         {!contactSelected ? (
//           <>
//             <Gallery currentCategory={currentCategory}></Gallery>
//             <About></About>
//           </>
//         ) : (
//           <ContactForm></ContactForm>
//         )}
//       </main>
//     </div>
//   );
// }

export default App;
