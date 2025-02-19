import type { ComponentProps, ReactNode } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  children: ReactNode // children é o conteudo de um componente. O tipo 'ReactNode' indica que ele pode ser qualquer coisa
}

export function Button(props: ButtonProps) {
  return (
    <button
      className="flex justify-between items-center px-5 h-12 bg-gray-500 text-blue font-semibold rounded-xl w-full cursor-pointer hover:bg-blue hover:text-gray-900 transition-colors duration-300"
      {...props} // Ao passar os props dessa forma, não se faz necessário declarar o 'children' explicitamente dentro do botão, mas vamos deixar para saber como se faz caso seja requerido
    >
      {props.children}
    </button>
  )
}
