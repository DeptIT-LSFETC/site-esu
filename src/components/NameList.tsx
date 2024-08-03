const NameList = ({ names }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 gap-2">
        {names.map((name, index) => (
          <div key={index} className="flex items-center bg-gray-300 p-2 gap-2 rounded-lg" lang={'ro'}>
            <div className="w-auto text-xl font-bold">{index + 1}.</div>
            <div className="w-1 h-full bg-primary-0"></div>
            <div className="w-5/12 text-xl font-semibold hyphens-auto">{name[0]}</div>
            <div className="w-1 h-full bg-primary-0"></div>
            <div className="w-5/12 text-xl font-semibold hyphens-auto">{name[1]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NameList;
