import  { useState } from 'react';
import './App.css'
const NestedList = ({ data }) => {
  const [expandedItems, setExpandedItems] = useState({});

  // Function to handle toggling of child lists
  const handleToggle = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Recursive function to render the list
  const renderList = (items) => {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <div onClick={() => handleToggle(item.id)} className="item">
              {item.label}
              {item.children && (
                <span style={{ marginLeft: '8px' }}>
                  {expandedItems[item.id] ? '-' : '+'}
                </span>
              )}
            </div>
            {/* Render children if item is expanded */}
            {expandedItems[item.id] && item.children && (
              <div style={{ paddingLeft: '20px' }}>
                {renderList(item.children)}
              </div>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return <div>{renderList(data)}</div>;
};

export default NestedList;
