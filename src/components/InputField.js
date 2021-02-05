const InputField = ({ text, children }) => {
  return (
    <div className="flex items-center w-full px-3 py-2 text-gray-600 border-b border-gray-200 md:px-4 flex-row">
      <p className="select-none w-2/5 md:p-0">{text}</p>
      {children}
    </div>
  );
};

export default InputField;
