import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodReview = () => {
    setGood(good + 1)
  }

  const neutralReview = () => {
    setNeutral(neutral + 1)
  }

  const badReview = () => {
    setBad(bad + 1)
  }

  const totalReviews = good + neutral + bad
  const averageScore = totalReviews === 0 ? 0 : (good - bad) / totalReviews
  const positivePercentage = totalReviews === 0 ? 0 : (good / totalReviews) * 100

  return (
    <div>
      <Header text="Give Feedback" />
      <Button handleClick={goodReview} text="Good" />
      <Button handleClick={neutralReview} text="Neutral" />
      <Button handleClick={badReview} text="Bad" />
      <Header text="Statistics" />
      {totalReviews > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalReviews}
          average={averageScore.toFixed(2)}
          positive={positivePercentage.toFixed(2) + '%'}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}

const Header = (props) => <h1>{props.text}</h1>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  return (
    <table>
      <tbody>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="Total" value={total} />
        <StatisticLine text="Average Score" value={average} />
        <StatisticLine text="Positive Percentage" value={positive} />
      </tbody>
    </table>
  )
}

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

export default App
