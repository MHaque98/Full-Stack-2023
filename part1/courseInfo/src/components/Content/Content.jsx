/* eslint-disable react/prop-types */
import { Part } from './Part/Part'
export const Content = ({ contents }) => {
  return (
    <div>
      <Part content={contents[0]} />
      <Part content={contents[1]} />
      <Part content={contents[2]} />
    </div>
  )
}
