"use client";

import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton,
  AccordionIcon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Button,
} from "@chakra-ui/react";

const ResumeList = () => (
  <Accordion allowMultiple display="flex" flexDirection="column" gap="8px">
    <Resume />
    <Resume />
  </Accordion>
);

const Resume = () => (
  <AccordionItem borderRadius="10px">
    <ResumeHeader />
    <QuestionList />
  </AccordionItem>
);

const ResumeHeader = () => (
  <div className="flex items-center px-4 py-3">
    <AccordionButton padding="0">
      <AccordionIcon />
      자기소개서 예시
    </AccordionButton>
    <PopOver />
  </div>
);

const Question = ({ active }: { active?: boolean }) => (
  <a
    href="#"
    className={`flex justify-between py-2 px-4 ${
      active ? "bg-purple-50 text-purple-500" : ""
    }`}
  >
    {"자기소개서 문항 질문을 적어보세요."}
    <PopOver />
  </a>
);

const QuestionList = () => (
  <AccordionPanel
    display="flex"
    flexDirection="column"
    paddingX="0px"
    paddingY="8px"
  >
    <ul>
      <li>
        <Question active />
      </li>
      <li>
        <Question />
      </li>
      <li>
        <Question />
      </li>
    </ul>
    <Button>문항 추가</Button>
  </AccordionPanel>
);

const PopOver = () => (
  <Popover>
    <PopoverTrigger>
      <button>
        <IconMore />
      </button>
    </PopoverTrigger>
    <PopoverContent>
      <PopoverBody justifyItems="start" className="flex flex-col items-start">
        <button>수정하기</button>
        <button>삭제하기</button>
      </PopoverBody>
    </PopoverContent>
  </Popover>
);

const IconMore = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.99967 3.33333C9.53944 3.33333 9.16634 3.70643 9.16634 4.16667C9.16634 4.6269 9.53944 5 9.99967 5C10.4599 5 10.833 4.6269 10.833 4.16667C10.833 3.70643 10.4599 3.33333 9.99967 3.33333Z"
      stroke="#CDCED6"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99967 9.16634C9.53944 9.16634 9.16634 9.53944 9.16634 9.99967C9.16634 10.4599 9.53944 10.833 9.99967 10.833C10.4599 10.833 10.833 10.4599 10.833 9.99967C10.833 9.53944 10.4599 9.16634 9.99967 9.16634Z"
      stroke="#CDCED6"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.99967 15.0003C9.53944 15.0003 9.16634 15.3734 9.16634 15.8337C9.16634 16.2939 9.53944 16.667 9.99967 16.667C10.4599 16.667 10.833 16.2939 10.833 15.8337C10.833 15.3734 10.4599 15.0003 9.99967 15.0003Z"
      stroke="#CDCED6"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LNB = () => {
  const handleAddFolderButtonClick = () => {
    return null;
  };

  return (
    <nav className="bg-gray-50">
      <header className="flex items-center justify-between mb-7">
        <h1 className="subhead1">내 자기소개서</h1>
        <Button
          variant="secondary"
          size="md"
          onClick={handleAddFolderButtonClick}
        >
          자기소개서 추가
        </Button>
      </header>
      <ResumeList />
    </nav>
  );
};

export default LNB;
