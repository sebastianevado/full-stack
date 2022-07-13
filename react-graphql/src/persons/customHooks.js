import { useQuery } from "@apollo/client"
import { ALL_PERSONS } from "./graphql-queries"
export const usePersons = () => {
  const { data, loading, error } = useQuery(ALL_PERSONS)
  return { data, loading, error }
}