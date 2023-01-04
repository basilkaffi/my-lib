
/* eslint-disable-next-line */
enum Color {
  BLUE = 'blue',
  CYAN =  'cyan',
  GREEN = 'green',
  PURPLE = 'purple',
  RED = 'red',
  YELLOW = 'yellow',
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ButtonProps {
  children: React.ReactNode;
  classname?: string;
  color?: `${Color}`;
}

export function Button({ children, color = Color.BLUE, classname }: ButtonProps) {
  const colorButton = {
    [Color.BLUE]: 'bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700',
    [Color.CYAN]: 'bg-indigo-300 text-white hover:bg-indigo-400 focus:bg-indigo-400 active:bg-indigo-500',
    [Color.GREEN]: 'bg-green-400 text-white hover:bg-green-500 focus:bg-green-500 active:bg-green-600',
    [Color.PURPLE]: 'bg-purple-500 text-white hover:bg-purple-600 focus:bg-purple-600 active:bg-purple-700',
    [Color.RED]: 'bg-pink-600 text-white hover:bg-pink-700 focus:bg-pink-700 active:bg-pink-800',
    [Color.YELLOW]: 'bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700',
    [Color.LIGHT]: 'bg-gray-200 text-gray-700 hover:bg-grey-300 focus:bg-grey-300 active:bg-grey-400',
    [Color.DARK]: 'bg-grey-800 text-white hover:bg-grey-900 focus:bg-grey-900 active:bg-grey-900',
  }
  return (
    <button 
      type="button"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className={`${colorButton[color]} inline-block px-6 py-2.5 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" ${classname}`}
    >
      {children}
    </button>
  )
}

export default Button;
