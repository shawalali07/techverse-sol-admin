import { Badge, makeStyles } from '@mui/material';
import './card.css';
const useStyles = makeStyles((theme) => ({
  font3: {
    fontSize: '1.5rem',
  },
}));
const Card = ({ total, pending, approved, type }) => {
  const classes = useStyles();

  return (
    <div className='card'>
      <div className='cardContainer'>
        <div className='cardTop'>
          <h1 className='cardTitle'>{`${
            type === 'Overview' ? '' : 'Total'
          } ${type}`}</h1>
          <Badge color='secondary' badgeContent='1' showZero></Badge>
        </div>
        <div className='cardBottom'>
          <div className='pendingTitle'>{`${
            type === 'Overview' ? 'Total Users' : 'Pending Approval'
          }`}</div>
          <Badge
            classes={{
              badge: classes.font3,
            }}
            style={{ fontSize: '30px' }}
            color='info'
            badgeContent='1'
            showZero
          ></Badge>
        </div>
        <div className='cardBottom'>
          <div className='pendingTitle'>{`${
            type === 'Overview' ? 'Solutions Provided' : 'Approved'
          }`}</div>
          <Badge color='success' badgeContent='1' showZero></Badge>
        </div>
      </div>
    </div>
  );
};

export default Card;
