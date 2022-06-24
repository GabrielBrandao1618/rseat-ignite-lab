import {useQuery, gql} from '@apollo/client'
import {Lesson} from '../components/Lesson'

const GET_LESSONS_QUERY = gql`
    query {
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            title
            slug
            availableAt
            lessonType
        }
    }
`
type lesson = {
    id: string;
    title: string;
    slug:string;
    availableAt:string;
    lessonType: 'live' | 'class';
}

type lessonsQueryType = {
    lessons: lesson[];
}

export function Sidebar(){
    const {data} = useQuery<lessonsQueryType>(GET_LESSONS_QUERY)
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8">
                {data?.lessons?.map(lesson => (
                    <Lesson 
                        key={lesson.id}
                        availableAt={new Date(lesson.availableAt)}
                        slug={lesson.slug}
                        title={lesson.title}
                        type={lesson.lessonType}
                    />
                ))}
            </div>
        </aside>
    )
}