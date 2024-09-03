import clients from "./images/trueIcon/clients.svg";
import paper from "./images/trueIcon/paper.svg";
import time from "./images/trueIcon/time.svg";
import report from "./images/trueIcon/report.svg";
import arrowDown from "./images/trueIcon/arrowDown.svg";

export const data = [
  {
    img: <img src={clients} alt="clients" />,
    description: "У вас нет актуальной клиентской базы и есть забытые лиды",
  },
  {
    img: <img src={paper} alt="paper" />,
    description: "Бумаги копятся на столах и теряются, а согласование решений происходит слишком долго.",
  },
  {
    img: <img src={time} alt="time" />,
    description: "Ваше время уходит на контроль сотрудников и рутинные задачи, вместо развития и масштабирования бизнеса.",
  },
  {
    img: <img src={report} alt="report" />,
    description: "Для формирования отчетов требуется не только собрать информацию из десятков источников, но и обработать ее.",
  },
  {
    img: <img src={arrowDown} alt="arrowDown" />,
    description: "И самое главное: вы теряете клиентов и прибыль",
  },
];
