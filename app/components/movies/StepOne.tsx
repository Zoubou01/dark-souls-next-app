import { bonfireRadioButton } from "@/lib/features/bonfire/bonfireSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from './stepone.module.css'
import AreYouSure from "./AreYouSure";

const StepOne = () =>{ 

    const dispatch = useDispatch();

    const valueButton = useSelector((state:any) => state.bonfire.radio)

    const text = useSelector((state:any) => state.bonfire.text)

    const isSelected = (value: string): boolean => valueButton === value;
    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void =>{
    dispatch(bonfireRadioButton(e.currentTarget.value));
    }

    return (
    <div className="flex flex-col justify-center items-center rounded-md shadow-sm text-white" role="group">
      {text == '' ? <h1 className={styles.typewriter}>Tell me what do you prefer?</h1> : <h1 className={styles.typewriter}>Take your time..</h1>}
      <div className="flex flex-row justify-center mb-5 mt-5">
      
      <button color="dark" className="mr-5">
      <input
        className="text-white"
        type="checkbox"
        name="react-radio-btn"
        value="movie"
        checked={isSelected("movie")}
        onChange={handleRadioClick}
      />
      Movies
      </button>
      <button color="dark" >
      <input
        className="text-white"
        type="checkbox"
        name="react-radio-btn"
        value="series"
        checked={isSelected("series")}
        onChange={handleRadioClick}
      />
      Series
      </button>
      </div>

      {valueButton != '' && <AreYouSure step={1} />}
      
      </div>
      
     
    )
}

export default StepOne