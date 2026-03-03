import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const QuizWrapper = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background: ${({ theme }) => theme.colors.bgSecondary};
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

const QuizHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`;

const QuizTitle = styled(motion.h2)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes['2xl']};
  }
`;

const QuizDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 auto;
`;

const QuizCard = styled(motion.div)`
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const QuestionCounter = styled.div`
  font-family: ${({ theme }) => theme.fonts.accent};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const QuestionText = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: 1.6;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const OptionButton = styled(motion.button)`
  padding: ${({ theme }) => theme.spacing.lg};
  border: 2px solid ${({ $selected, $isCorrect, $showResult, theme }) =>
    $showResult
      ? $isCorrect
        ? '#22c55e'
        : $selected
        ? '#ef4444'
        : theme.colors.border
      : $selected
      ? theme.colors.primary
      : theme.colors.border};
  background: ${({ $selected, $isCorrect, $showResult, theme }) =>
    $showResult
      ? $isCorrect
        ? '#22c55e15'
        : $selected
        ? '#ef444415'
        : 'white'
      : $selected
      ? theme.colors.primary + '10'
      : 'white'};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  cursor: pointer;
  text-align: left;
  transition: all 0.3s ease;
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary}10;
  }
`;

const OptionText = styled.span`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const OptionLetter = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ $selected, $isCorrect, $showResult, theme }) =>
    $showResult
      ? $isCorrect
        ? '#22c55e'
        : $selected
        ? '#ef4444'
        : theme.colors.border
      : $selected
      ? theme.colors.primary
      : theme.colors.border}20;
  color: ${({ $selected, $isCorrect, $showResult, theme }) =>
    $showResult
      ? 'white'
      : $selected
      ? theme.colors.primary
      : theme.colors.textSecondary};
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

const ActionButton = styled(motion.button)`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }
  
  &:disabled {
    background: ${({ theme }) => theme.colors.border};
    cursor: not-allowed;
    transform: none;
  }
`;

const ResultCard = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const ResultTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ResultScore = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ScoreHighlight = styled.span`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: 700;
  color: ${({ $score, theme }) =>
    $score >= 7 ? '#22c55e' : $score >= 5 ? '#eab308' : '#ef4444'};
`;

const questions = [
  {
    id: 1,
    question: "Theo quan điểm Mác - Lênin, yếu tố nào là quan trọng nhất trong sản xuất?",
    options: [
      "A. Tư bản",
      "B. Sức lao động",
      "C. Phương tiện sản xuất",
      "D. Tri thức"
    ],
    correct: 1,
    explanation: "Theo Mác - Lênin, sức lao động là yếu tố quan trọng nhất trong sản xuất vì chỉ có sức lao động mới tạo ra giá trị mới."
  },
  {
    id: 2,
    question: "Giá trị thặng dư là gì?",
    options: [
      "A. Số tiền lãi từ đầu tư",
      "B. Phần giá trị mới do lao động tạo ra bị tư bản chiếm đoạt",
      "C. Sự chênh lệch giữa giá cả và chi phí sản xuất",
      "D. Lợi nhuận từ kinh doanh"
    ],
    correct: 1,
    explanation: "Giá trị thặng dư là phần giá trị mới do lao động tạo ra mà tư bản chiếm đoạt không trả công."
  },
  {
    id: 3,
    question: "Hai thuộc tính của hàng hóa theo lý thuyết Mác - Lênin là gì?",
    options: [
      "A. Giá trị sử dụng và giá trị",
      "B. Giá trị sử dụng và giá trị trao đổi",
      "C. Giá trị và giá trị thị trường",
      "D. Cung và cầu"
    ],
    correct: 1,
    explanation: "Hàng hóa có hai thuộc tính: giá trị sử dụng (khả năng thỏa mãn nhu cầu) và giá trị (lao động xã hội kết tinh trong hàng hóa)."
  },
  {
    id: 4,
    question: "Quy luật cơ bản của kinh tế chính trị Mác - Lênin là gì?",
    options: [
      "A. Quy luật cung - cầu",
      "B. Quy luật giá trị",
      "C. Quy luật tích lũy tư bản",
      "D. Quy luật giá trị thặng dư"
    ],
    correct: 3,
    explanation: "Quy luật giá trị thặng dư là quy luật cơ bản của chủ nghĩa tư bản, chi phối toàn bộ quá trình sản xuất tư bản chủ nghĩa."
  },
  {
    id: 5,
    question: "Cấu trúc của tư bản gồm những phần nào?",
    options: [
      "A. Tư bản cố định và tư bản lưu động",
      "B. Tư bản bất biến và tư bản khả biến",
      "C. Tư bản tài chính và tư bản công nghiệp",
      "D. Tư bản trong nước và tư bản nước ngoài"
    ],
    correct: 1,
    explanation: "Tư bản được chia thành tư bản bất biến (c) - giá trị phương tiện sản xuất, và tư bản khả biến (v) - giá trị sức lao động."
  },
  {
    id: 6,
    question: "Tỷ suất giá trị thặng dư được tính như thế nào?",
    options: [
      "A. m' = m / (c + v)",
      "B. m' = m / v",
      "C. m' = (c + v) / m",
      "D. m' = m / c"
    ],
    correct: 1,
    explanation: "Tỷ suất giá trị thặng dư (m') = giá trị thặng dư (m) / tư bản khả biến (v), phản ánh mức độ bóc lột lao động."
  },
  {
    id: 7,
    question: "Chu kỳ tư bản gồm mấy giai đoạn?",
    options: [
      "A. 2 giai đoạn",
      "B. 3 giai đoạn",
      "C. 4 giai đoạn",
      "D. 5 giai đoạn"
    ],
    correct: 1,
    explanation: "Chu kỳ tư bản gồm 3 giai đoạn: mua (H - T), sản xuất (T - P...), và bán (P' - H')."
  },
  {
    id: 8,
    question: "Tư bản cố định là gì?",
    options: [
      "A. Tư bản dùng để mua nguyên vật liệu",
      "B. Tư bản giá trị không thay đổi trong quá trình sản xuất",
      "C. Tư bản lưu động nhanh",
      "D. Tư bản đầu tư dài hạn"
    ],
    correct: 1,
    explanation: "Tư bản cố định là tư bản có giá trị chuyển dần vào sản phẩm theo mức hao mòn (máy móc, nhà xưởng)."
  },
  {
    id: 9,
    question: "Tư bản lưu động là gì?",
    options: [
      "A. Tư bản dùng để xây dựng nhà xưởng",
      "B. Tư bản có giá trị chuyển toàn bộ vào sản phẩm trong một chu kỳ sản xuất",
      "C. Tư bản đầu tư vào cổ phiếu",
      "D. Tư bản cho vay ngắn hạn"
    ],
    correct: 1,
    explanation: "Tư bản lưu động là tư bản thay đổi hình thái liên tục, giá trị chuyển toàn bộ vào sản phẩm trong một chu kỳ (nguyên vật liệu, lương)."
  },
  {
    id: 10,
    question: "Tái sản xuất là gì?",
    options: [
      "A. Quá trình sản xuất một lần",
      "B. Quá trình sản xuất được lặp đi lặp lại, liên tục",
      "C. Quá trình đầu tư tư bản",
      "D. Quá trình tích lũy tư bản"
    ],
    correct: 1,
    explanation: "Tái sản xuất là quá trình sản xuất được lặp đi lặp lại, liên tục, bao gồm tái sản xuất giản đơn và mở rộng."
  }
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleAnswerSelect = (index) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleCheckAnswer = () => {
    if (selectedAnswer === null) return;
    
    const isCorrect = selectedAnswer === questions[currentQuestion].correct;
    setShowResult(true);
    
    if (isCorrect) {
      setScore(score + 1);
    }
    
    setAnswers([...answers, {
      question: questions[currentQuestion].question,
      selected: selectedAnswer,
      correct: questions[currentQuestion].correct,
      isCorrect,
      explanation: questions[currentQuestion].explanation
    }]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
    setAnswers([]);
  };

  const letters = ['A', 'B', 'C', 'D'];

  if (quizComplete) {
    return (
      <QuizWrapper>
        <Container>
          <QuizHeader
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <QuizTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Kết Quả Quiz
            </QuizTitle>
            <QuizDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Chúc mừng bạn đã hoàn thành bài quiz!
            </QuizDescription>
          </QuizHeader>
          
          <QuizCard
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <ResultCard>
              <ResultTitle>Kết quả của bạn</ResultTitle>
              <ResultScore>
                Bạn đã trả lời đúng <ScoreHighlight $score={score}>{score}/{questions.length}</ScoreHighlight> câu hỏi
              </ResultScore>
              <ResultScore>
                {score >= 8 ? "Xuất sắc! Bạn đã nắm vững kiến thức Kinh tế chính trị Mác - Lênin!" :
                 score >= 6 ? "Tốt lắm! Kiến thức của bạn khá vững chắc." :
                 score >= 4 ? "Không tồi! Hãy tiếp tục học tập để củng cố kiến thức." :
                 "Hãy chú ý học kỹ hơn về Kinh tế chính trị Mác - Lênin nhé!"}
              </ResultScore>
              
              <ButtonContainer>
                <ActionButton
                  onClick={handleRestartQuiz}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Làm lại Quiz
                </ActionButton>
              </ButtonContainer>
            </ResultCard>
          </QuizCard>
        </Container>
      </QuizWrapper>
    );
  }

  return (
    <QuizWrapper id="quiz">
      <Container>
        <QuizHeader
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <QuizTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Kiểm Tra Kiến Thức
          </QuizTitle>
          <QuizDescription
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hãy kiểm tra kiến thức của bạn về Kinh tế chính trị Mác - Lênin
          </QuizDescription>
        </QuizHeader>
        
        <QuizCard
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <QuestionCounter>
            Câu hỏi {currentQuestion + 1} / {questions.length}
          </QuestionCounter>
          
          <QuestionText>{questions[currentQuestion].question}</QuestionText>
          
          <OptionsContainer>
            {questions[currentQuestion].options.map((option, index) => (
              <OptionButton
                key={index}
                $selected={selectedAnswer === index}
                $isCorrect={index === questions[currentQuestion].correct}
                $showResult={showResult}
                onClick={() => handleAnswerSelect(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <OptionText>
                  <OptionLetter
                    $selected={selectedAnswer === index}
                    $isCorrect={index === questions[currentQuestion].correct}
                    $showResult={showResult}
                  >
                    {letters[index]}
                  </OptionLetter>
                  {option}
                </OptionText>
              </OptionButton>
            ))}
          </OptionsContainer>
          
          <AnimatePresence>
            {showResult && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                style={{
                  marginTop: '20px',
                  padding: '16px',
                  borderRadius: '12px',
                  background: answers[answers.length - 1]?.isCorrect ? '#22c55e15' : '#ef444415'
                }}
              >
                <p style={{
                  color: answers[answers.length - 1]?.isCorrect ? '#22c55e' : '#ef4444',
                  fontWeight: 600,
                  marginBottom: '8px'
                }}>
                  {answers[answers.length - 1]?.isCorrect ? '✓ Chính xác!' : '✗ Chưa chính xác'}
                </p>
                <p style={{ color: '#64748b', fontSize: '14px' }}>
                  {questions[currentQuestion].explanation}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          
          <ButtonContainer>
            {!showResult ? (
              <ActionButton
                onClick={handleCheckAnswer}
                disabled={selectedAnswer === null}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Kiểm tra đáp án
              </ActionButton>
            ) : (
              <ActionButton
                onClick={handleNextQuestion}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentQuestion < questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
              </ActionButton>
            )}
          </ButtonContainer>
        </QuizCard>
      </Container>
    </QuizWrapper>
  );
};

export default Quiz;
