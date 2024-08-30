import { useState } from 'react';

export function Timer() {
  const [now, setNow] = useState(new Date());
  setInterval(() => setNow(new Date(), 3000));

  return <h1 style={{'text-align': 'center'}}>Time: {now.toLocaleTimeString()}</h1>;
}
