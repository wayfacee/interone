import { Button, Input } from "antd";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export const SearchPage = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [btnLoading, setBtnLoading] = useState(false);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);


  const handleSearch = useCallback(() => {
    setBtnLoading(true);

    setTimeout(() => {
      const results = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(results);
      setBtnLoading(false);
    }, 2000);
  }, [posts, searchTerm]);

  return (
    <div>
      <div className="my-4 flex items-center justify-center">
        <Input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-60" type="text" placeholder="Search..." />
        <Button loading={btnLoading} onClick={handleSearch} className="ml-2" type="primary">Поиск</Button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        (filteredPosts.length > 0 ? filteredPosts : posts).map(post =>
          <div key={post.id} className="flex flex-col mb-4">
            <div className="flex items-center">
              <p className="mr-2">{post.id}.</p>
              <h5 className="font-bold">{post.title}</h5>
            </div>

            <p>{post.body}</p>
          </div>
        )
      )}
    </div>
  );
};