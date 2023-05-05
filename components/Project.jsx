export default function Project({ name, date, imgSrc, children }) {
  return (
    <div className='mb-5 w-[100%]'>
      <h2 className='mb-3 text-3xl font-bold'>{name}</h2>
      <img className='w-[100%] mb-3' src={imgSrc} />
      <h3 className='text-sm text-grey'>{date}</h3>
      <p>{children}</p>
    </div>
  );
}
