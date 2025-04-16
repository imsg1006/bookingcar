import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className=" absolute margin-auto items-center w-screen h-screen">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin" />
        <p className="text-lg text-gray-700">Loading, please wait...</p>
      </div>
    </div>
  );
};

export default Loader;
