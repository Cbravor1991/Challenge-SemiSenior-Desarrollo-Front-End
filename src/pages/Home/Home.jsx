import React, {useEffect}  from 'react';
import { PostTable } from './components';
import { useDispatch } from 'react-redux';
import {addPost} from '../../redux/states'





function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await response.json();
      
        dispatch(addPost(data)); 
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
 
    fetchPosts(); 
    
  }, [dispatch]); 


 
  return (
    <PostTable/>
  );
};
export default Home;
