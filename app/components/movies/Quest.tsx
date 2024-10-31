import styles from './quest.module.css'
import { useDispatch } from 'react-redux';
import { bonfireShow } from '@/lib/features/bonfire/bonfireSlice';

const Quest = () => {

    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(bonfireShow(false))

    }

    return (
        
    <div className='text-center'>
        <div className='mt-10'>
        <h1 className="font-mono text-white">Ah,brave Undead, i have a quest that beckons your valor:</h1>
        </div>
      
        <div className={styles.typewriter}>
        <h1 className="font-mono text-white"> Find a film that speaks to your heart.</h1>
        </div>

        <div className='flex flex-row justify-around'>
            <button className='text-white' onClick={handleChange} style={{textDecoration: 'underline'}}>accept</button>
            <button className='text-white' onClick={handleChange} style={{textDecoration: 'underline'}}>decline</button>
        </div>
        </div>
    ) 
}

export default Quest 