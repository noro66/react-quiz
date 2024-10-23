function Options({ question, dispatch, answer }) {
  const hasAnswer =  answer !== null;
  console.log(answer)
  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : '' } ${hasAnswer ? question.correctOption === index ? 'correct' : 'wrong' : ''}`}
          key={option}
          onClick={() => dispatch({ type: "answerAdd", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
