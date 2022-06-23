import {useQuery, gql} from '@apollo/client'

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      title
      teacher {
        name
        bio
      }
    }
  }
`
type lesson = {
  id: string;
  title: string;
}

type lessonsQuery = {
  lessons: lesson[]
}

function App() {
  const {data} = useQuery<lessonsQuery>(GET_LESSONS_QUERY)
  return (
    <ul>
      {data?.lessons.map(lesson => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  )
}

export default App
