const { useState, useEffect } = React
function Example() {
    // Déclare une nouvelle variable d'état,  « count »
    const [count, setCount] = useState(0);

    // Déclaration de multiples variables d'état est tjrs possible
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banane');
  const [todos, setTodos] = useState([{ text: 'Apprendre les Hooks' }]);


  
    // Équivalent à componentDidMount plus componentDidUpdate :
  useEffect(() => {
    // Mettre à jour le titre du document en utilisant l'API du navigateur
    document.title = `Vous avez cliqué ${count} fois`;
  });

    return (
      <div>
        <p>Vous avez cliqué {count} fois</p>
        <button onClick={() => setCount(count + 1)}>
          Cliquez ici
        </button>
      </div>
    );
  }
  ReactDOM.render(
    <Example />,
    document.getElementById('root3'))