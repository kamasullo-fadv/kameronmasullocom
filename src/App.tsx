import './App.css'
import TopBar from "./components/topbar/TopBar.tsx";
import Listen from "./components/listen/Listen.tsx";
import Blogs from "./components/blogs/Blogs.tsx";
import Albums from "./components/albums/Albums.tsx";
import Footer from "./components/footer/Footer.tsx";

function App() {

  return (
      <div className="app">
          <TopBar/>
          <Listen/>
          <Blogs/>
          <Albums/>
          <Footer/>
      </div>
  );
}

export default App
