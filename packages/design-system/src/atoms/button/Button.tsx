import '../../tailwind.css';

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

enum Size {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
}

enum Shape {
  ROUND = 'round',
  CIRCLE = 'circle',
  SQUARE = 'square',
}

export interface ButtonProps {
  children: React.ReactNode;
  classname?: string;
  color?: `${Color}`;
  size?: `${Size}`;
  shape?: `${Shape}`;
  disabled?: boolean;
  onClick?: () => void;
}

function Button({ children, color = 'blue', classname, onClick, shape = 'round', size = 'md', disabled = false }: ButtonProps) {

  const buttonColor = {
    [Color.BLUE]: 'bg-blue-500 text-white hover:bg-blue-600 focus:bg-blue-600 active:bg-blue-700 disabled:opacity-50 disabled:bg-blue-600',
    [Color.INDIGO]: 'bg-indigo-400 text-white hover:bg-indigo-500 focus:bg-indigo-500 active:bg-indigo-600 disabled:opacity-50 disabled:bg-indigo-500',
    [Color.GREEN]: 'bg-green-500 text-white hover:bg-green-600 focus:bg-green-600 active:bg-green-700 disabled:opacity-50 disabled:bg-green-600',
    [Color.PURPLE]: 'bg-purple-500 text-white hover:bg-purple-600 focus:bg-purple-600 active:bg-purple-700 disabled:opacity-50 disabled:bg-purple-600',
    [Color.RED]: 'bg-pink-600 text-white hover:bg-pink-700 focus:bg-pink-700 active:bg-pink-800 disabled:opacity-50 disabled:bg-pink-700',
    [Color.YELLOW]: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:bg-yellow-600 active:bg-yellow-700 disabled:opacity-50 disabled:bg-yellow-600',
    [Color.LIGHT]: 'bg-gray-200 text-gray-700 hover:bg-gray-300 focus:bg-gray-300 active:bg-gray-400 disabled:opacity-50 disabled:bg-gray-300',
    [Color.DARK]: 'bg-gray-700 text-white hover:bg-gray-900 focus:bg-gray-900 active:bg-gray-900 disabled:opacity-50 disabled:bg-gray-800',
  };

  const buttonSize = {
    [Size.SMALL]: 'px-4 py-2 text-xs leading-none',
    [Size.MEDIUM]: 'px-6 py-2.5 text-sm leading-tight',
    [Size.LARGE]: 'px-7 py-2.5 text-lg leading-tight',
  }
  
  const buttonShape = {
    [Shape.ROUND]: 'rounded-md',
    [Shape.CIRCLE]: 'rounded-full',
    [Shape.SQUARE]: 'rounded-none',
  }
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${buttonColor[color]} ${buttonSize[size]} ${buttonShape[shape]} font-medium py inline-block shadow-md disabled:shadow-none hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out ${classname}`}
    >
      {children}
    </button>
  )
}

export default Button;
