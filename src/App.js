import React, { useState } from 'react';
import './style.css';

let data = ['Front', 'Back', 'Middle'];

const Conversation = (props) => {
  const { oriData } = props;
  let [data, setData] = useState(
    oriData.map((elem) => {
      return { contact: elem, cache: '' };
    })
  );
  let [actIdx, setActIdx] = useState(-1);
  let [info, setInfo] = useState('');

  const clickHandler = (idx) => {
    info = data[idx].cache;
    actIdx = idx;
    setInfo(info);
    setActIdx(idx);
  };

  const onChangeHandler = (e) => {
    if (actIdx === -1) return;
    info = e.target.value;
    setInfo(info);
    data = JSON.parse(JSON.stringify(data))
    data[actIdx].cache = info;
    setData(data);
  };

  return (
    <div className = "cov-tool">
      <ul className = "left">
        {data.map((elem, idx) => {
          return (
            <li
              className={idx === actIdx? 'active':'nonact'}
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
        className = "right"
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
