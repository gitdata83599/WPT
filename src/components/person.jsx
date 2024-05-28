function Person({ personName, email, age, address }) {
  return (
    <div>
      <div>Name: {personName}</div>
      <div>Age: {age}</div>
      <div>Address: {address}</div>
      <div>Email: {email}</div>
      <hr />
    </div>
  )
}

export default Person
