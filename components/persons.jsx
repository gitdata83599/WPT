import persons from '../dummy/persons.json'
import person from './person'

function Persons(){
    return(
        <div>
            <h2>Persons</h2>
            {persons.map((Person)=>{
                return (
                    <person
                    personName={person.personName}
                    address={person.address}
                    email={person.email}
                    age={person.personAge}
                    />
                )
            }
            )}
            </div>
 )
}
export default Persons