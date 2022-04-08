import React from 'react'
import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({type}) =>{
    return<button className={"widgetLgButton " + type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="http://3.bp.blogspot.com/-i0xdBnC8Kaw/UXDGcsSgCqI/AAAAAAAAGRk/X8Y56OL0HAI/s1600/kannada-actor-yash-childhood-photos.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Manipal </span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">Rs 999</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgTr">
            <img src="http://3.bp.blogspot.com/-i0xdBnC8Kaw/UXDGcsSgCqI/AAAAAAAAGRk/X8Y56OL0HAI/s1600/kannada-actor-yash-childhood-photos.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Manipal S</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">Rs 999</td>
          <td className="widgetLgStatus">
            <Button type="Declined"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgTr">
            <img src="http://3.bp.blogspot.com/-i0xdBnC8Kaw/UXDGcsSgCqI/AAAAAAAAGRk/X8Y56OL0HAI/s1600/kannada-actor-yash-childhood-photos.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Manipal S</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">Rs 999</td>
          <td className="widgetLgStatus">
            <Button type="Pendding"/>
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgTr">
            <img src="http://3.bp.blogspot.com/-i0xdBnC8Kaw/UXDGcsSgCqI/AAAAAAAAGRk/X8Y56OL0HAI/s1600/kannada-actor-yash-childhood-photos.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Manipal S</span>
          </td>
          <td className="widgetLgDate">2 jun 2021</td>
          <td className="widgetLgAmount">Rs 999</td>
          <td className="widgetLgStatus">
            <Button type="Approved"/>
          </td>
        </tr>
      </table>
    </div>
  )
}
