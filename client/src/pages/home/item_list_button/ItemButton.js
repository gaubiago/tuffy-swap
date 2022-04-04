import item_pic from '../images/tuffy_2.jpeg';
import './ItemButton.css';

function Icon() {
  return (
    <div>
      <a
        href='https://reactjs.org' // This will need to be modified later
        target='_blank'
        rel='noopener noreferrer'
      >
        <img src={item_pic} className='item_pic' alt='pic' />

        <div className='item_info'>
          <p class='small'>
            <div className='text-item'>
              Tuffy Mascot Stickers <br></br>
              $10.00 <br></br>
            </div>
          </p>
          <p class='small'>
            <div className='text-location'>Fullerton, CA</div>
          </p>
        </div>
      </a>
    </div>
  );
}

export default Icon;
