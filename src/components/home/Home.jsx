import AnswersCard from '../answers/AnswersCard';
import Card from '../card/Card';
import QuestionsCard from '../questions/QuestionsCard';
import './home.css';

const Home = () => {
  return (
    <div className='home'>
      <Card type='Overview' />
      <QuestionsCard />
      <AnswersCard />
    </div>
  );
};

export default Home;
