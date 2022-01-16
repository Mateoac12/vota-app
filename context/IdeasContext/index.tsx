import React, { useState } from 'react'
import { TargetProp } from 'types/target'

export const IdeasContext = React.createContext({} as any)

export const IdeasContextProvider: React.FC = ({ children }) => {
  const [ideas, setIdeas] = useState<TargetProp | []>([])

  return (
    <IdeasContext.Provider value={{ ideas, setIdeas }}>
      {children}
    </IdeasContext.Provider>
  )
}
