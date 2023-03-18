import Chip from './Chip'

interface Props {
  tags: string[]
}

export default function Tags({ tags }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Chip key={tag} color="chip-purple">
          {tag}
        </Chip>
      ))}
    </div>
  )
}
