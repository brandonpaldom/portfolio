import Image from 'next/image'

interface Props {
  squareImage?: boolean
  images: string[]
}

export default function Gallery({ squareImage, images }: Props) {
  return (
    <div
      className={
        squareImage
          ? 'grid grid-cols-1 gap-4 sm:grid-cols-2'
          : 'flex flex-col gap-4'
      }
    >
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
