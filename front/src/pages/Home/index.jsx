
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { showGang } from '../../slices/studentSlice';

export const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(showGang())
    },[])
    const {gang} = useSelector((state) => state.gang)
    console.log(gang)
    return (
      <div>
        <h1>Home</h1>
        {gang &&
          gang.map((gang) => (
            <>
              <h1>{gang.gang}</h1>
              <h3>{gang.Student.length}</h3>
            </>
          ))
        }
      </div>

    )
}
