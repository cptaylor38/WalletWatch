import React, { useState, useEffect } from 'react';
import './HomeOverview.css';
import { Doughnut } from 'react-chartjs-2';
import API from '../../../clientRoutes/API';
import { Paper, Grid } from '@material-ui/core';

const Overview = ({ user }) => {

    const [profile, setProfile] = useState(null);
    const [doughnut, setDoughnut] = useState(null);
    const [nonMonDoughnut, setNonMonDoughnut] = useState(null);

    useEffect(() => {
        if (profile !== null) {
            let financesTotal = 0;
            let livingTotal = 0;
            let healthTotal = 0;
            let leisureTotal = 0;
            let travelTotal = 0;

            let nonMonFin = 0;
            let nonMonLiv = 0;
            let nonMonHea = 0;
            let nonMonLei = 0;
            let nonMonTra = 0;

            profile.expense.map(item => {
                switch (item.category) {
                    case 'finances':
                        if (item.monthly === true) return financesTotal += item.amount;
                        else return nonMonFin += item.amount;
                        break;
                    case 'living':
                        if (item.monthly === true) return livingTotal += item.amount;
                        else return nonMonLiv += item.amount;
                        break;
                    case 'health':
                        if (item.monthly === true) return healthTotal += item.amount;
                        else return nonMonHea += item.amount;
                        break;
                    case 'leisure':
                        if (item.monthly === true) return leisureTotal += item.amount;
                        else return nonMonLei += item.amount;
                        break;
                    case 'travel':
                        if (item.monthly === true) return travelTotal += item.amount;
                        else return nonMonTra += item.amount;
                        break;
                    default:
                        return item;
                }
            })

            let total = financesTotal + livingTotal + healthTotal + leisureTotal + travelTotal;
            let nonMonTotal = nonMonFin + nonMonLiv + nonMonHea + nonMonLei + nonMonTra;

            setDoughnut({
                labels: ['Finances', 'Living', 'Health', 'Leisure', 'Travel'],
                datasets: [
                    {
                        label: `Recurring Monthly Expenses - ${total.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD"
                        })}`,
                        backgroundColor: [
                            '#5A4218',
                            'green',
                            'red',
                            'gold',
                            'aquamarine'
                        ],
                        data: [financesTotal, livingTotal, healthTotal, leisureTotal, travelTotal]
                    }

                ]
            })

            setNonMonDoughnut({
                labels: ['Finances', 'Living', 'Health', 'Leisure', 'Travel'],
                datasets: [
                    {
                        label: `Msc. Charges - ${nonMonTotal.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD"
                        })}`,
                        backgroundColor: [
                            '#5A4218',
                            'green',
                            'red',
                            'gold',
                            'aquamarine'
                        ],
                        data: [nonMonFin, nonMonLiv, nonMonHea, nonMonLei, nonMonTra]
                    }

                ]
            })

        }
    }, [profile])

    useEffect(() => {
        API.getHomeDisplay({ id: user })
            .then(response => { setProfile(response.data); })
    }, [])
    return (
        <>
            <Grid item xs={12} sm={12} md={6} lg={6} className='pieGridItem'>
                {doughnut !== null ?
                    <Paper id='recurringPiePaper'>
                        <Doughnut id='recurringPie'
                            data={doughnut}
                            options={{
                                title: {
                                    display: true,
                                    text: doughnut.datasets[0].label,
                                    fontSize: 12
                                },
                                legend: {
                                    display: true,
                                    position: 'bottom',
                                    maintainAspectRation: false
                                }
                            }}
                        />
                    </Paper>
                    : <p>Loading</p>}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} className='pieGridItem'>
                {nonMonDoughnut !== null ?
                    <Paper id='recurringPiePaper'>
                        <Doughnut id='recurringPie'
                            data={nonMonDoughnut}
                            options={{
                                title: {
                                    display: true,
                                    text: nonMonDoughnut.datasets[0].label,
                                    fontSize: 12
                                },
                                legend: {
                                    display: true,
                                    position: 'bottom',
                                    maintainAspectRation: false
                                }
                            }}
                        />
                    </Paper>
                    : <p>Loading</p>}
            </Grid>
            <Grid container>
                <Paper>
                    Some stuff here
                </Paper>
            </Grid>
        </>
    )
}

export default Overview;