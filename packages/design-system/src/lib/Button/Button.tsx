
/* eslint-disable-next-line */
enum Color {
  BLUE = 'blue',
  INDIGO =  'indigo',
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
  onClick?: () => void;
}

export function Button({ children, color = Color.BLUE, classname, onClick }: ButtonProps) {
  const colorButton = {
    [Color.BLUE]: 'bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700',
    [Color.INDIGO]: 'bg-indigo-400 text-white hover:bg-indigo-500 focus:bg-indigo-500 active:bg-indigo-600',
    [Color.GREEN]: 'bg-green-500 text-white hover:bg-green-600 focus:bg-green-600 active:bg-green-700',
    [Color.PURPLE]: 'bg-purple-500 text-white hover:bg-purple-600 focus:bg-purple-600 active:bg-purple-700',
    [Color.RED]: 'bg-pink-600 text-white hover:bg-pink-700 focus:bg-pink-700 active:bg-pink-800',
    [Color.YELLOW]: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:bg-yellow-600 active:bg-yellow-700',
    [Color.LIGHT]: 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400',
    [Color.DARK]: 'bg-gray-700 text-white hover:bg-gray-900 focus:bg-gray-900 active:bg-gray-900',
  }
  return (
    <button 
      type="button"
      onClick={onClick}
      className={`${colorButton[color]} inline-block px-6 py-2.5 font-medium text-xs leading-tight rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out" ${classname}`}
    >
      {children}
    </button>
  )
}

export default Button;
