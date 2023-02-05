import {Sub} from '../../types'

interface Props {
    subs: Array<Sub>
}

export default function Subs ({subs} : Props) {
    return(
      <div className='w-screen flex flex-wrap gap-10 items-center mb-10 justify-center'>
        {
          subs.map(sub => (
            <div className="card card-side bg-base-100 shadow-xl" key={sub.nick}>
              <figure><img src={sub.avatar} alt={sub.nick} className="w-40"/></figure>
              <div className="card-body">
                <h2 className="card-title">{sub.nick}</h2>
                <p>Meses subscrito: {sub.subMonths}</p>
                <p>{sub.description}.</p>
              </div>
            </div>
          ))
        }
      </div>
    )
}