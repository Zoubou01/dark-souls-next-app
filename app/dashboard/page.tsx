'use client'

import { useAppSelector } from "@/lib/hooks";
import Quest from "../components/movies/Quest";
import styles from "../dashboard/dashboard.module.css"
import MoviesFilter from "../components/movies/MoviesFilter";



const Dashboard = () => {

  const showQuest = useAppSelector((state: any) => state.bonfire.show);
  console.log('show', showQuest)

  return(
    <div className={styles.dashboard}>
      <div className={styles.height}> 
      {showQuest ? <Quest/> : <><MoviesFilter/></>}

      </div>

    </div>
  )
};

export default Dashboard;


