import Image from 'next/image'
import { Resume } from '@/interfaces/resume'

interface Props extends Resume {}

export default function ResumeInfo({
  image,
  title,
  organization,
  date,
  summary,
  activities,
}: Props) {
  return (
    <>
      <div className="flex items-start gap-4">
        <Image
          src={image}
          alt=""
          width={48}
          height={48}
          quality={100}
          priority
          className="rounded-lg"
        />
        <div>
          <p className="font-medium text-neutral-50">{title}</p>
          <p className="text-[0.875rem]">
            {organization} • {date}
          </p>
        </div>
      </div>
      {summary && <p className="text-[0.875rem]">{summary}</p>}
      {activities && (
        <ul className="list-inside list-disc text-[0.875rem]">
          {activities.map((activity) => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      )}
    </>
  )
}
