import React from 'react';

function TimeAndLocation({text}) {
  return (
    <div>
    <div className="flex items-center justify-center my-6">
      <p className="text-white text-xl font-extralight">
        {}
      </p>
    </div>

    <div className="flex items-center justify-center my-3">
      <p className="text-white text-3xl font-medium capitalize">
        {`${text.name}, ${text.country}`}
      </p>
    </div>
  </div>
  )
}

export default TimeAndLocation
