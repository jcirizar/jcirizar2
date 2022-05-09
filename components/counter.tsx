interface Props {
  label: string;
  value: number;
  onChange: (value: number) => void;
}

const CounterComponent = ({ label, value = 0, onChange }: Props) => {

  const increase = () => {
    onChange(++value);
  };

  const decrease = () => {
    onChange(value > 0 ? --value : 0);
  };

  const inputOnChange = (val: string) => {
    let parsed = parseInt(val, 10);
    if(isNaN(parsed)) {
      console.log('about to call onChange with 0')
      onChange(0);
    } else {
      console.log('about to call onChange with',parsed)
      onChange(parsed);
    }
  }

  return (
    <div className="custom-number-input h-10 w-32">
      <label htmlFor="custom-input-number" className="w-full font-semibold">{label}:</label>
      <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
        <button
          onClick={() => decrease()}
          className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
          <span className="m-auto text-2xl font-thin">−</span>
        </button>
        <input type="number"
               step="1"
               onChange={(e) => inputOnChange(e.target.value)}
               className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
               name="custom-input-number" value={value}></input>
        <button
          onClick={() => increase()}
          className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
          <span className="m-auto text-2xl font-thin">+</span>
        </button>
      </div>
    </div>
  );
};

export default CounterComponent;
