import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>first name: {props.name}</h1>
      <h2>last name: {props.lastName}</h2>
      <h1>age: {props.age}</h1>
    </>
  )
} 

const App = () => {
  return (
    <div>
      <Person 
        name={'Jenkins'} 
        lastName={'Nyuma'} 
        age={30}
      />
      <Person 
        name={'Mary'} 
        lastName={'Jane'} 
        age={23}
      />
      
    </div>
  );
}

export default App;
