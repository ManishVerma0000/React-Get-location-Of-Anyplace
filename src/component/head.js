import { useState } from 'react'
import '../index.css'

//(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBr4fC60qcaJzTdfJJLWdIRDjXy9IohH4s`)
function Head() {

    const [location, setlocation] = useState('')
    const [data, setData] = useState('')
    const [formatted_address, setFormatted_address] = useState('')
    const[place_id,setPlace_id]= useState('')
    // const[geometry,setGeometry]= useState('')
    const [let1,setLet]= useState("");
    const[lng,setLng]= useState('')
        const getValue = () => {
        console.log(location)
    }
   
    const getgeolocation = () => {
        
        console.log(location, "this is the location value")
        const address = location.replaceAll(' ', '+')

        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyBr4fC60qcaJzTdfJJLWdIRDjXy9IohH4s`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                setData(data.results[0])
                console.log(data.results[0]
                )
            })
            setFormatted_address(data.formatted_address)
            setPlace_id(data.place_id)
            // setGeometry(data.geometry)
            console.log(formatted_address, "this is the value of thr data")
            console.log(data.place_id,"this is the place id");
            // console.log(data.geometry
            //     ,"this is the location ")
            console.log(data.geometry.location.lat
                ,'this is the data')
                setLet(data.geometry.location.lat);
                setLng(data.geometry.location.lng)
    }
 
    return (
        <>
            <div className="maindiv">
                <div className="seconddiv">
                    <h1 className='heading'>Welcome to the weather App</h1>
                    <div className='inputtag'>
                        <form>
                            <div class="row">
                                <div class="col">
                                    <input type="text" class="form-control" placeholder="enter the location" value={location} onClick={getValue} onChange={ (e)=>setlocation(e.target.value)} />
                                      

                                </div>
                            </div>
                        </form>
                        <div className='btndiv'>
                        <button className='btn1' onClick={getgeolocation}> click here</button>
                        </div>
                        
                        <div className='conatainer'>
                            <h4>formatted_address {formatted_address} </h4>
                            <h4>place_id {place_id} </h4>
                            <h4> latitude {let1}</h4>
                            <h4>longitude {lng}</h4>
                            {/* <h4>geometry {geometry} </h4> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Head