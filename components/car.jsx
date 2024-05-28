function Car({ car }) {
    //s:destuctor syntax {car} is used to directly extract the car object from the props
      return (
        <div>
          <div>Model: {car.model}</div>
          <div>Company: {car.company}</div>
          <div>Price: {car.price}</div>
          <hr />
        </div>
      )
    }
    
    export default Car
    