import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../Dashboard/Dashboard.css';

function Dashboard(props) {
  const { push } = props.history;

  return (
    <div className='mainContainer'>
      <div className='header'>
        <h1>Net-Worth App</h1>
      </div>
      <div className='board'>
        <h2>Net Worth</h2>
        <h5>$0</h5>
      </div>
      <div className='categories'>
        <div className='income'>
          <Link to='/income'>
            <h3>Income</h3>
            <span>$0</span>
          </Link>
        </div>
        <div className='cash'>
          <Link to='/bank'>
            <h3>Cash</h3>
            <span>$0</span>
          </Link>
        </div>
        <div className='budget'>
          <Link to='/budget'>
            <h3>Budget</h3>
            <span>$0</span>
          </Link>
        </div>
      </div>

      <div className='navContainer'>
        <Button
          onClick={() => push('/bills')}
          className='bills'
          color='info'
          size='lg'
          block
        >
          Bills
        </Button>
        <Button
          onClick={() => push('/investments')}
          className='investments'
          color='info'
          size='lg'
          block
        >
          Investments
        </Button>
        <Button
          onClick={() => push('/bank')}
          className='bank'
          color='info'
          size='lg'
          block
        >
          Bank
        </Button>
      </div>
      <div className='quotes'>Motivational Quotes</div>
    </div>
  );
}

export default Dashboard;
