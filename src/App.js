import React, { useState } from 'react';
import './style.css';

let data = ['Front', 'Back', 'Middle'];

const Conversation = (props) => {
  const { oriData } = props;
  const [data, setData] = useState(
    oriData.map((elem) => {
      return { contact: elem, cache: '' };
    })
  );
  const [actIdx, setActIdx] = useState(-1);
  const [info, setInfo] = useState('');

  const clickHandler = (idx) => {
    setInfo(data[idx].cache);
    setActIdx(idx);
  };

  const onChangeHandler = (e) => {
    if (actIdx === -1) return;
    setInfo(e.target.value);
    data[actIdx].cache = e.target.value;
    setData(data);
  };

  return (
    <div className="cov-tool">
      <ul className="left">
        {data.map((elem, idx) => {
          return (
            <li
              className={idx === actIdx ? 'active' : 'nonact'}
              key={idx}
              onClick={() => {
                clickHandler(idx);
              }}
            >
              {elem.contact}
            </li>
          );
        })}
      </ul>
      <input
        className="right"
        type="text"
        value={info}
        onChange={(e) => {
          onChangeHandler(e);
        }}
      />
    </div>
  );
};

export default function App() {
  return (
    <div>
      <Conversation oriData={data} />
    </div>
  );
}
