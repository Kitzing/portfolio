import '../styles/Portfolio.css';

function PortfolioInfo({ name, date, info, left }) {
    return (
        <div style={{textAlign: left ? 'left' : 'right'}}>
            <h2>{name}</h2>
            <p className='date-text' style={{textAlign: left ? 'left' : 'right'}}>{date}</p>
            <p style={{textAlign: left ? 'left' : 'right'}}>{info}</p>
        </div>

    )
    ;}

export default PortfolioInfo;