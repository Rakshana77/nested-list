
import NestedList from './NestedList';

const data = [
  {
    id: '1',
    label: 'India',
    children: [
      {
        id: '1-1',
        label: 'Tamil Nadu',
        children: [
          { id: '1-1-1', label: 'Chennai' },
          { id: '1-1-2', label: 'Coimbatore' },
          { id: '1-1-3', label: 'Madurai' },
        ],
      },
      {
        id: '1-2',
        label: 'Karnataka',
        children: [
          { id: '1-2-1', label: 'Bangalore' },
          { id: '1-2-2', label: 'Mysore' },
        ],
      },
    ],
  },
  {
    id: '2',
    label: 'USA',
    children: [
      {
        id: '2-1',
        label: 'California',
        children: [
          { id: '2-1-1', label: 'Los Angeles' },
          { id: '2-1-2', label: 'San Francisco' },
        ],
      },
      {
        id: '2-2',
        label: 'Texas',
        children: [
          { id: '2-2-1', label: 'Houston' },
          { id: '2-2-2', label: 'Dallas' },
        ],
      },
    ],
  },
];

function App() {
  return (
    <div>
      <h1>Country, State, District Nested List</h1>
      <NestedList data={data} />
    </div>
  );
}

export default App;
