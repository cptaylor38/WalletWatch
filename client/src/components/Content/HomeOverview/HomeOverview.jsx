import React, { useState, useEffect } from 'react';
import './HomeOverview.css';
import { Pie } from 'react-chartjs-2';
import API from '../../../clientRoutes/API';
import { Paper, Grid } from '@material-ui/core';

const Overview = ({ user }) => {

    const [profile, setProfile] = useState(null);
    const [chart, setChart] = useState(null)

    useEffect(() => {
        if (profile !== null) {
            let financesTotal = 0;
            let livingTotal = 0;
            let healthTotal = 0;
            let leisureTotal = 0;
            let travelTotal = 0;

            profile.expense.map(item => {
                switch (item.category) {
                    case 'finances':
                        if (item.monthly === true) return financesTotal += item.amount;
                        break;
                    case 'living':
                        if (item.monthly === true) return livingTotal += item.amount;
                        break;
                    case 'health':
                        if (item.monthly === true) return healthTotal += item.amount;
                        break;
                    case 'leisure':
                        if (item.monthly === true) return leisureTotal += item.amount;
                        break;
                    case 'travel':
                        if (item.monthly === true) return travelTotal += item.amount;
                        break;
                    default:
                        return item;
                }
            })
            let percFin = financesTotal;
            let percLiv = livingTotal;
            let percHea = healthTotal;
            let percLei = leisureTotal;
            let percTra = travelTotal;
            let total = percFin + percLiv + percHea + percLei + percTra;

            setChart({
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
                        data: [percFin, percLiv, percHea, percLei, percTra]
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
            <Grid item xs={12} sm={12} md={6} lg={6}>
                {chart !== null ?
                    <Paper id='recurringPiePaper'>
                        <Pie id='recurringPie'
                            data={chart}
                            options={{
                                title: {
                                    display: true,
                                    text: chart.datasets[0].label,
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'bottom'
                                }
                            }}
                        />
                    </Paper>
                    : <p>Loading</p>}
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                {chart !== null ?
                    <Paper id='recurringPiePaper'>
                        <Pie id='recurringPie'
                            data={chart}
                            options={{
                                title: {
                                    display: true,
                                    text: chart.datasets[0].label,
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'bottom'
                                }
                            }}
                        />
                    </Paper>
                    : <p>Loading</p>}
            </Grid>
        </>
    )
}

export default Overview;