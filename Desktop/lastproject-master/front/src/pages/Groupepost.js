import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getgroupe } from '../action/groupeaction'
import { getPosts } from '../action/postaction'
import Modalgroupe from "./Modalgroupe"
import Posts from "./Posts";

const Groupepost = ({match}) => {
    const groupe = useSelector(state => state.groupe.groupe)
    const posts = useSelector(state => state.posts.posts)
    const newPosts = posts.filter(post => post.groupe==groupe._id) || []
    const dispatch = useDispatch()


    useEffect(() => {
       dispatch(getgroupe(match.params.id))
       dispatch(getPosts())
    }, [])

    return (
        <div>
        
        <Modalgroupe groupeId={match.params.id}/>
            <h1>{groupe.Name}</h1>
            {newPosts.map(post => <Posts post={post}/>)}
           

        </div>
    )
}

export default Groupepost
