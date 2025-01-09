import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0); // Initialize count to 0

  useEffect(() => {
    // Perform actions that depend on 'count' here
    console.log('Count:', count);
  }, [count]); // Only re-run effect if 'count' changes

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default MyComponent; 