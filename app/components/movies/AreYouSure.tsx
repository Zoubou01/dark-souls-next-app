import { bonfireStepOne, bonfireStepTwo, bonfireText } from "@/lib/features/bonfire/bonfireSlice"
import { useDispatch } from "react-redux"

interface props {
    step: number
}


const AreYouSure = (props:props) => {

    const dispatch = useDispatch()

    const handleStep = (value:boolean) =>{
        if (value){ 
        dispatch(bonfireStepOne(false))
        dispatch(bonfireStepTwo(true))
        }
        if (!value){
            dispatch(bonfireText('take'))
        }
    }

    return (
        
        <div className="text-center text-white">
        <h1>Are you sure Undead?</h1>
      <button className="mr-5" onClick={() => handleStep(true)}  style={{textDecoration: 'underline'}}>yes</button>
      <button onClick={() => handleStep(false)} style={{textDecoration: 'underline'}}>no</button>
      </div>
    )
}
export default AreYouSure



