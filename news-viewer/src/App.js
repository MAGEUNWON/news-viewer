// import { useState, useCallback } from "react";
// import NewsList from "./components/NewsList";
// import Categoreis from "./components/Categories";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

// const App= () => {
//   const [category, setCategory] = useState('all');
//   const onSelect = useCallback(category => setCategory(category), []);

//   return (
//     <>
//       <Categoreis category={category} onSelect={onSelect} />
//       <NewsList category={category} />
//     </>
//   );
// };

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NewsPage />} />
      <Route path='/:category' element={<NewsPage />} />
    </Routes>
  );
};

export default App;