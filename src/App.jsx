import Entry from "./components/Entry";
import Header from './components/header';
import Posts from "./data/data"


function App() {

  return (
    <>
      <Header />
      <main className="container">
        <div className="entry-grid">
          {Posts.map(post => (
            <Entry key={post.id} post={post} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App
