import Image from 'next/image'

interface Props {
  images: string[]
}

export default function Gallery({ images }: Props) {
  return (
    <div className="flex flex-col gap-4">
      {images.map((image) => (
        <Image
          key={image}
          src={image}
          alt=""
          width={1200}
          height={900}
          quality={100}
          priority
          className="rounded-lg"
        />
      ))}
    </div>
  )
}
