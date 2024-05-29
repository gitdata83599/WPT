import { useState } from "react"
import Navbar from './components/navbar'

function AddProperty(){
  const [title , settitle] = useState('')
  const [contactName , setContactName] = useState('')
  const [contactNumber , setontactName] = useState('')
  const [details , setDetails] = useState('')
  const [address , setAddress] = useState('')
  const [guests , setGuests] = useState('')
  const [bedrooms , setBedrooms] = useState('')
  const [beds , setbeds] = useState('')

  onst [isLakeView, setLakeView] = useState(false)
  const [isTV, setTV] = useState(false)
  const [isAC, setAC] = useState(false)
  const [isWiFi, setWifi] = useState(false)
  const [isMinibar, setMinibar] = useState(false)
  const [isBreakfast, setBreakfast] = useState(false)
  const [isParking, setParking] = useState(false)

  const [bathrooms, setBathrooms] = useState('')
  const [rent, setRent] = useState('')

  const [image, setImage] = useState(undefined)

  const navigate = useNavigate()

  const onSave = async () => {
    if (title.length == 0){
        toast.warn('please enter title')
    }else if (contactName.length == 0){
        toast.warn('please enter contact name')
    }else if (contactNumber.length ==0){
      toast.warn('please enter contact number')
    } else if (!image){
      toast.warn('please select a property photo')
    }else{
      const result =await AddProperty(
        
      )
    }

  }










    return (
        <div>
      {/* < Navbar /> */}
    <h2 className="page-header"></h2>    
        </div>
    )


}
export default AddProperty