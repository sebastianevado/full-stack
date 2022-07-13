import React from 'react';
import { Sub } from  '../types'
interface Props {
  subs: Array<Sub>
}
// const List: React.FunctionComponent<Props> = ({ subs }: Props) => {
const List = ({ subs }: Props) => {
  const renderList = (): JSX.Element[] => {
    return subs.map(sub => {
      return (
        <li key={sub.nick}>
          <img src={sub.avatar} alt="avatar for sub" />
          <h4>{sub.nick} <small>{sub.subMonths}</small></h4>
          <p>{sub.description?.substring(0, 100)}</p>
        </li>
      )
    }
    )
  }
  return (
    <div>
      <ul>
        {renderList()}
      </ul>
    </div>
  );
};

export default List;
