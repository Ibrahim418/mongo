import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getgroupes } from '../action/groupeaction'
import Groupes from './Groupes'

const GroupesList = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const groupe = useSelector(state => state.groupe)
    useEffect(() => {
      if (auth.user)
      dispatch(getgroupes())
      
    }, [])
   return(
     <div>
     {groupe && groupe.groupes.map((elm,i)=><Groupes key={i} groupe={elm}></Groupes>)}
     </div>
     
   )
}

export default GroupesList
