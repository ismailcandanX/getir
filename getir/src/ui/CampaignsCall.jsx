export default function CampaignsCall({ bannersCall: { id, image, src } }) {
  return (
    <div >
      <a href={src} >
        <img src={image} className="rounded-2xl px-2" />
      </a>
    </div>
  )
}
