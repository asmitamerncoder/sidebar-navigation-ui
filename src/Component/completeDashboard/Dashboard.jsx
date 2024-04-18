import React from 'react'
import DashboardLayout from "../layouts/DashboardLayout"
import DoughnutChart from '../charts/DoughnutChart'
import LineChart from '../charts/LineChart'
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { FaUserCircle } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faHeartPulse, faThermometerHalf, faWind } from '@fortawesome/free-solid-svg-icons';
import HorizontalBarChart from '../charts/HorizontalBarChart'
import BarChart from "../charts/BarChart"


defaults.maintainAspectRatio = false;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = "black";


export const Dashboard = () => {


    const lineChartData = [
        // { name: 'Revenue', value: 20 },
        // { name: 'Subscritption', value: 80 },
        // { name: 'Share', value: 100 },
    ];

    return (
        <div>
            <DashboardLayout className="dashboard-bars">
                <div className='home__page'>
                    <div className='cards-wrapper'>
                        <div className='profile-card'>
                            <div className='profileName'>
                                <div>
                                    <img className='avatar-profile' width="48" height="48" src="https://img.icons8.com/color/48/circled-user-female-skin-type-7--v1.png" alt="circled-user-female-skin-type-7--v1" />
                                </div>
                                <div>
                                    <p className='card-title'>Hi, Asmita!</p>
                                </div>
                            </div>
                            <div className='time-week-wrapper'>
                                <p className='time-text'>14:17</p>
                                <p className='weekname'>Sunday</p>
                            </div>
                            <div className='loc-temp-wrapper'>
                                <div className='loc-air-wrapper'>
                                    <div className='location-wrapper'>
                                        <div>
                                            <FontAwesomeIcon icon={faLocationDot} className='location' />
                                        </div>
                                        <div>
                                            <p className='name-tag'>Najafgarh</p>
                                        </div>
                                    </div>
                                    <div className='air-wrapper'>
                                        <div>
                                            <FontAwesomeIcon icon={faWind} className='wind' />
                                        </div>
                                        <div>
                                            <p className='name-tag'>3m/s</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='temp-wrapper'>
                                    <div className='location-wrapper'>
                                        <div>
                                            <FontAwesomeIcon icon={faThermometerHalf} className='location' />
                                        </div>
                                        <div>
                                            <p className='name-tag'>-23 C</p>
                                        </div>
                                    </div>
                                    <div className='air-wrapper'>
                                        <div>
                                            <FontAwesomeIcon icon={faHeartPulse} className='wind' />
                                        </div>
                                        <div>
                                            <p className='name-tag'>277mm Hg</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='friends-card'>
                            <div className='profileName'>
                                <div>
                                    <img
                                        width="64"
                                        height="64"
                                        src="https://img.icons8.com/arcade/64/friends.png"
                                        alt="friends"
                                        className="friends-icon"
                                    />
                                </div>
                                <div>
                                    <p className='card-title'>Friend's Activity</p>
                                </div>
                            </div>
                            <table>
                                <thead >
                                    <tr>
                                        <th style={{ color: "#3380FF" }} className='friends-table'>Rank</th>
                                        <th className='friends-table' >Name</th>
                                        <th className='friends-table' >When</th>
                                        <th className='friends-table' >Steps</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Natya Roy</td>
                                        <td className='when-text'>Today</td>
                                        <td><span>23136</span></td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Kesina Balaya</td>
                                        <td className='when-text'>Yesterday</td>
                                        <td><span style={{ backgroundColor: "#FBDDDD", color: "#ED6F6F" }}>23148</span></td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Atque</td>
                                        <td className='when-text'>Yesterday</td>
                                        <td><span>23137</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='schedule-card'>
                            <div className='schedule'>
                                <img width="32" height="32" src="https://img.icons8.com/color/48/planner.png" alt="planner" />
                                <p className='schedule-text'>Schedule</p>
                            </div>
                            <div className='multi-cards-wrapper'>
                                <div className='containers'>
                                    <div className='stretching-text-one'>
                                        <h3 style={{ color: "#F5B272" }}>Stretching</h3>
                                        <p className='time'>10:00</p>
                                    </div>
                                    <p className='p-text'>Mo/cdm Respect</p>
                                </div>
                                <div className='containers' style={{ backgroundColor: "#C4E2D1" }}>
                                    <div className='stretching-text-one'>
                                        <h3 style={{ color: "#4FAC77" }}>Workout</h3>
                                        <p className='time'>20:00</p>
                                    </div>
                                    <p className='p-text'>We/studio Fa</p>
                                </div>
                                <div className='containers' style={{ backgroundColor: "#DBD3FF" }}>
                                    <div className='stretching-text-one'>
                                        <h3 style={{ color: "#A395E4" }}>Stretching</h3>
                                        <p className='time'>10:00</p>
                                    </div>
                                    <p className='p-text'>Mo/cdm Respect</p>
                                </div>
                                <div className='containers' style={{ backgroundColor: "#FBDDDD" }}>
                                    <div className='stretching-text-one'>
                                        <h3 style={{ color: "#EE7878" }}>Workout</h3>
                                        <p className='time'>20:00</p>
                                    </div>
                                    <p className='p-text'>Mo/cdm Respect</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='linechart-task-wrapper'>
                        <div className='lineChart-main-wrapper'>
                            <div className='profileName'>
                                <div>
                                    <img width="48" height="48" src="https://img.icons8.com/color/48/activity.png" alt="activity" />
                                </div>
                                <div>
                                    <p className='task-title'>Activity</p>
                                </div>
                            </div>
                            <div className='lineChart-wrapper'>
                                <LineChart data={lineChartData} />
                            </div>
                        </div>
                        <div className='task-wrapper'>
                            <div className='profileName'>
                                <div>
                                    <img width="40" height="40" src="https://img.icons8.com/nolan/64/task-completed.png" alt="task-completed" />
                                </div>
                                <div>
                                    <p className='task-title'>Upcomming Tasks</p>
                                </div>
                            </div>
                            <table>
                                <thead className='task-th'>
                                    <tr>
                                        <th style={{ color: "#3380FF" }}>Name</th>
                                        <th >Time</th>
                                        <th >Date</th>
                                    </tr>
                                </thead>
                                <tbody >
                                    <tr>
                                        <td className='task-list'>Workshop(Healthy Diet)</td>
                                        <td className='time-value task-list'>14:00Pm</td>
                                        <td className='task-list'><span>10/02</span></td>
                                    </tr>
                                    <tr>
                                        <td className='task-list'>Workshop(Healthy Diet)</td>
                                        <td className='time-value task-list'>14:00Pm</td>
                                        <td className='task-list'><span>10/02</span></td>
                                    </tr>
                                    <tr>
                                        <td className='task-list'>Master Class(Acrobatics)</td>
                                        <td className='time-value task-list'>12:00Pm</td>
                                        <td className='task-list'><span>10/02</span></td>
                                    </tr>
                                    <tr>
                                        <td className='task-list'>Doctor's appointment</td>
                                        <td className='time-value task-list'>18:00Pm</td>
                                        <td className='task-list'><span>10/02</span></td>
                                    </tr>
                                    <tr>
                                        <td className='task-list'>Workshop(Healthy Lifestyle)</td>
                                        <td className='time-value task-list'>15:00Pm</td>
                                        <td className='task-list'><span>10/02</span></td>
                                    </tr>
                                    <tr>
                                        <td className='task-list'>Zumba Class</td>
                                        <td className='time-value task-list'>19:00Pm</td>
                                        <td className='task-list'><span>10/02</span></td>
                                    </tr>
                                    <tr>
                                        <td className='task-list'>Zumba Class</td>
                                        <td className='time-value task-list'>19:00Pm</td>
                                        <td className='task-list'><span>10/02</span></td>
                                    </tr>
                                    <tr>
                                        <td className='task-list'>Zumba Class</td>
                                        <td className='time-value task-list'>19:00Pm</td>
                                        <td className='task-list'><span>10/02</span></td>
                                    </tr>
                                    <tr>
                                        <td className='task-list'>Zumba Class</td>
                                        <td className='time-value task-list'>19:00Pm</td>
                                        <td className='task-list'><span>10/02</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='doughnut-horizontal-vertical-bar-wrapper'>
                        <div className='doughnut-main-wrapper'>
                            <div className='profileName'>
                                <div>
                                    <img width="40" height="40" src="https://img.icons8.com/emoji/48/person-in-bed.png" alt="person-in-bed" />
                                </div>
                                <div>
                                    <p className='task-title'>Sleep</p>
                                </div>
                            </div>
                            <div className='doughnut-text-wrapper'>
                                <div className='doughnut-container'>
                                    <DoughnutChart />
                                </div>
                                <div className='sleep-container'>
                                    <div className='deep-sleep'>
                                        <p className='sleep-title'>Deep Sleep</p>
                                        <p className='sleep-hrs'>2h25m</p>
                                    </div>
                                    <div className='rem-sleep'>
                                        <p className='sleep-title'>REM Sleep</p>
                                        <p className='sleep-hrs'>2h25m</p>
                                    </div>
                                    <div className='light-sleep'>
                                        <p className='sleep-title'>Light Sleep</p>
                                        <p className='sleep-hrs'>2h25m</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='horizontalBarChart-main-wrapper'>
                            <div className='profileName-hydration'>
                                <div>
                                    <img width="40" height="40" src="https://img.icons8.com/color/48/man-drinking-water.png" alt="man-drinking-water" />
                                </div>
                                <div>
                                    <p className='task-title'>Hydration</p>
                                </div>
                            </div>
                            <div className='horizontalBarChart-wrapper'>
                                <HorizontalBarChart />
                            </div>
                        </div>
                        <div className='barChart-main-wrapper'>
                            <div className='profileName-weekly'>
                                <div>
                                    <img width="40" height="40" src="https://img.icons8.com/doodle/48/improvement.png" alt="improvement" />
                                </div>
                                <div>
                                    <p className='task-title'>Weekly Results</p>
                                </div>
                            </div>
                            <div className='barChart-wrapper'>
                                <BarChart />
                            </div>
                        </div>
                    </div>
                </div>


            </DashboardLayout>
        </div>
    )
}
