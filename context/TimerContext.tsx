import { createContext, Dispatch, SetStateAction, useState } from 'react'

export interface TimerContextType {
  duration: number
  setDuration: Dispatch<SetStateAction<number>>
}

export const TimerContext = createContext<TimerContextType>({
  duration: 10,
  setDuration: () => {},
})

interface TimerProviderProps {
  children: React.ReactNode
}

const TimerProvider = ({ children }: TimerProviderProps) => {
  const [duration, setDuration] = useState(10)

  return (
    <TimerContext.Provider value={{ duration, setDuration }}>
      {children}
    </TimerContext.Provider>
  )
}

export default TimerProvider
