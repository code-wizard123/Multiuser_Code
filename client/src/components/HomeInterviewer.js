import React from 'react'
import '../css/Home_Interviewer.css'




const HomeInterviewer = () => {
  const [code, setCode] = React.useState('');

  const handleChange = (e) => {
    if (e.target.value.length > 10) {
      return;
    }
    setCode(e.target.value);
  }

  return (
    <div className='margin-auto'>
      <div className='outer-interviewer'>
        <div className='main-interview-A'>
          <div className='left'>
            <div className='text-A'>
              <p>Stand strong in the storm, for it is the bracing winds that shape the mightiest trees</p>
            </div>
            <div className='text-B'>
              <p>Welcome to our online interview hub, where opportunities meet talent. Designed to connect employers with top-notch candidates. Navigate user-friendly features, discover insightful resources, and embark on a journey of meaningful conversations. Your next career milestone awaits – dive into a world of possibilities and make your interview experience exceptional</p>
            </div>
            <div className='interview-submit'>
              <button type="reset">Create Meeting</button>
              <input type='text' onChange={(e) => handleChange(e)} value={code} className='code-submit' placeholder='abcd-efg-hij'></input>
            </div>
          </div>
          <div className='right'>
            <img alt="img" src='Webinar-cuate.png'></img>
          </div>

        </div>

      </div>
      <div className='Details'>
        <h3 className='h3-details'>Interviewee Details</h3>
      </div>

      <div className='scroll-details'>


        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Interviewee Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Start Date
                </th>
                <th scope="col" className="px-6 py-3">
                  End Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Time Range
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  1
                </th>
                <td className="px-6 py-4">
                  Rahul Babar
                </td>
                <td className="px-6 py-4">
                  02-03-2024
                </td>
                <td className="px-6 py-4">
                  04-03-2024
                </td>
                <td className="px-6 py-4">
                  2pm-5pm
                </td>
                <td className="confirm">
                  <button type="reset" >Confirm</button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  1
                </th>
                <td className="px-6 py-4">
                  Rahul Babar
                </td>
                <td className="px-6 py-4">
                  02-03-2024
                </td>
                <td className="px-6 py-4">
                  04-03-2024
                </td>
                <td className="px-6 py-4">
                  2pm-5pm
                </td>
                <td className="confirm">
                  <button type="reset" >Confirm</button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  1
                </th>
                <td className="px-6 py-4">
                  Rahul Babar
                </td>
                <td className="px-6 py-4">
                  02-03-2024
                </td>
                <td className="px-6 py-4">
                  04-03-2024
                </td>
                <td className="px-6 py-4">
                  2pm-5pm
                </td>
                <td className="confirm">
                  <button type="reset" >Confirm</button>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  1
                </th>
                <td className="px-6 py-4">
                  Rahul Babar
                </td>
                <td className="px-6 py-4">
                  02-03-2024
                </td>
                <td className="px-6 py-4">
                  04-03-2024
                </td>
                <td className="px-6 py-4">
                  2pm-5pm
                </td>
                <td className="confirm">
                  <button type="reset" >Confirm</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>






      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  )
}

export default HomeInterviewer